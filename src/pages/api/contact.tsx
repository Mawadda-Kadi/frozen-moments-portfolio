import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { reason, name, email, mobile } = req.body;

        if (!reason || !name || !email) {
            return res.status(400).json({ message: "Please fill all required fields." });
        }

        try {
            // Configure nodemailer
            const transporter = nodemailer.createTransport({
                host: "smtp.example.com", // Replace with your SMTP server
                port: 587,
                auth: {
                    user: process.env.SMTP_USER, // Add your SMTP username to .env.local
                    pass: process.env.SMTP_PASS, // Add your SMTP password to .env.local
                },
            });

            // Email details
            const mailOptions = {
                from: email,
                to: process.env.CONTACT_EMAIL, // Add your receiving email to .env.local
                subject: `New Contact Form Submission: ${reason}`,
                text: `
                    Name: ${name}
                    Email: ${email}
                    Mobile: ${mobile || "Not provided"}
                    Reason: ${reason}
                `,
            };

            // Send the email
            await transporter.sendMail(mailOptions);

            return res.status(200).json({ message: "Email sent successfully." });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Failed to send email." });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
