// Validation of Environment Variables

const requiredEnv = [
    'CLOUDINARY_CLOUD_NAME',
    'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET',
];

requiredEnv.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Missing ${key} in environment variables`);
    }
});

export const config = {
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINARY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
    },
};
