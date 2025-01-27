import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check for API key in request headers
    if (req.headers['x-api-key'] !== process.env.API_SECRET_KEY) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    if (req.method === 'GET') {
        // Fetch photos with filtering and pagination
        const { category = 'all', page = 1, limit = 18, source = 'db' } = req.query;

        try {
            if (source === 'db') {
                // MongoDB Fetch Logic
                const client = await clientPromise;
                const db = client.db('gallery');

                // Filter by category if not 'all'
                const filter = category === 'all' ? {} : { category };

                // Pagination logic
                const filteredPhotos = await db
                    .collection('photos')
                    .find(filter)
                    .skip((+page - 1) * +limit)
                    .limit(+limit)
                    .toArray();

                const totalPhotos = await db.collection('photos').countDocuments(filter);
                const totalPages = Math.ceil(totalPhotos / +limit);

                res.status(200).json({
                    photos: filteredPhotos,
                    totalPages,
                    currentPage: +page,
                });
            } else if (source === 'cloudinary') {
                // Cloudinary Fetch Logic
                const { resources } = await cloudinary.search
                    .expression('folder:frozen_moments')
                    .sort_by('public_id', 'desc')
                    .max_results(80)
                    .execute();

                if (!resources || !Array.isArray(resources)) {
                    return res.status(404).json({ message: 'No photos found in the specified folder.' });
                }

                console.log('Resources:', resources);

                const photos = resources.map((photo) => ({
                    id: photo.asset_id, // Unique identifier for the asset
                    src: photo.secure_url, // URL for the image
                    name: photo.public_id.split('/').pop(), // Extract the file name
                    cameraPosition: photo.metadata?.cameraPosition || 'Unknown',
                    lensUsed: photo.metadata?.lensUsed || 'Unknown',
                    location: photo.metadata?.location || 'Unknown',
                    date: photo.metadata?.date || 'Unknown',
                    description: photo.metadata?.description || 'No description provided',
                    width: photo.width,
                    height: photo.height,
                    //format: photo.format, // File format (e.g., jpg, png)
                    //bytes: photo.bytes,
                    // tags: photo.tags || [], // Tags associated with the image
                })) || [];

                res.status(200).json({ photos });
            } else {
                res.status(400).json({ message: 'Invalid source parameter.' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch photos' });
        }
    } else if (req.method === 'POST') {
        // Handle uploading photos
        try {
            const client = await clientPromise;
            const db = client.db('gallery');
            const collection = db.collection('photos');

            const {
                src, // File path or URL of the photo
                name,
                category,
                cameraPosition,
                lensUsed,
                location,
                date,
                description,
            } = req.body;

            // Validate required fields
            if (!src || !name || !category) {
                return res.status(400).json({ message: 'Missing required fields (src, name, or category).' });
            }

            // Validate optional metadata
            if (!cameraPosition || !lensUsed || !location || !date || !description) {
                return res.status(400).json({
                    message: 'Missing one or more metadata fields (cameraPosition, lensUsed, location, date, description).',
                });
            }

            // Generate a unique share URL
            const shareUrl = `https://website.com/gallery/${name.replace(/\s+/g, '-').toLowerCase()}`;

            // Construct the photo document
            const newPhoto = {
                src,
                shareUrl,
                name,
                category,
                cameraPosition,
                lensUsed,
                location,
                date: new Date(date).toISOString(), // Convert to ISO 8601 format
                description,
            };

            // Insert the photo metadata into MongoDB
            await collection.insertOne(newPhoto);

            res.status(201).json({ message: 'Photo uploaded successfully!', photo: newPhoto });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to upload photo.' });
        }
    } else {
        // Handle unsupported HTTP methods
        res.status(405).json({ message: 'Method not allowed. Only GET and POST requests are supported.' });
    }
}
