import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const oauth2Client = new google.auth.OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            'http://localhost:3000/api/auth/callback' // Redirect URI
        );

        // Generate the Google OAuth2 login URL
        const authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: ['https://www.googleapis.com/auth/gmail.send'],
        });

        // Redirect the user to Google's OAuth2 consent page
        res.redirect(authUrl);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
