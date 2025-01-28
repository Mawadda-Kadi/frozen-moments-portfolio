import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, telefonnummer, nachricht } = req.body;

        if (!name || !email || !nachricht) {
            return res.status(400).json({ error: 'Bitte füllen Sie alle erforderlichen Felder aus.' });
        }

        try {
            const msg = {
                to: 'mawadda.kadi@gmail.com',
                from: 'mawadda.kadi@gmail.com',
                subject: `Neue Nachricht von ${name}`,
                text: `
                Name: ${name}
                Email: ${email}
                Telefonnummer: ${telefonnummer || 'Nicht angegeben'}
                Nachricht: ${nachricht}
                `,
            };

            await sgMail.send(msg);
            res.status(200).json({ success: true, message: 'Nachricht erfolgreich gesendet!' });
        } catch (error) {
            console.error('SendGrid Error:', error);
            res.status(500).json({ error: 'Fehler beim Senden der Nachricht.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
