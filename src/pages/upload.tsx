import { useState } from 'react';

const UploadPage = () => {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFile(file || null);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const reader = new FileReader();
        reader.onload = async () => {
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ file: reader.result }),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Upload successful!');
                console.log(data.result); // Cloudinary response
            } else {
                setMessage('Upload failed.');
            }
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>
            <h1>Upload to Cloudinary</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            <p>{message}</p>
        </div>
    );
};

export default UploadPage;
