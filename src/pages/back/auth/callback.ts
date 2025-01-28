import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { OAuth2Client, Credentials } from 'google-auth-library';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const code = Array.isArray(req.query.code) ? req.query.code[0] : req.query.code;

        if (!code) {
            return res.status(400).json({ error: 'Authorization code is missing' });
        }

        try {
            const oauth2Client = new google.auth.OAuth2(
                process.env.CLIENT_ID,
                process.env.CLIENT_SECRET,
                'http://localhost:3000/api/auth/callback' // Redirect URI (must match in Google Console)
            );

            // Exchange the authorization code for tokens
            const { tokens }: { tokens: Credentials } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);

            // Save tokens or proceed with authenticated API calls
            res.status(200).json({
                success: true,
                tokens,
            });
        } catch (error) {
            console.error('Error exchanging authorization code:', error);
            res.status(500).json({ error: 'Failed to exchange authorization code' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
