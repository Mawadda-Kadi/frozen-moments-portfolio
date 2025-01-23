import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { category = 'all', page = 1, limit = 18 } = req.query;

    try {
        const client = await clientPromise;
        const db = client.db('gallery');

        // Filter by category if not 'all'
        const filter = category === 'all' ? {} : { category };

        // Pagination
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
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch photos' });
    }
}
