import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/lib/cloudinary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { file, folder } = req.body;

            if (!file) {
                return res.status(400).json({ message: 'No file provided.' });
            }

            const result = await cloudinary.uploader.upload(file, {
                folder: folder || 'frozen_moments', // Specify a folder in Cloudinary
            });

            res.status(200).json({ message: 'File uploaded successfully!', result });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error uploading file to Cloudinary.' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed.' });
    }
}
