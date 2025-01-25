import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/PhotoDetails.module.scss';

const PhotoDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        // Simulate fetching photo details from an API or data source
        const fetchPhotoDetails = async () => {
            const allPhotos = [
                { id: 1, src: '/images/gallery/birthday1.jpg', name: 'Photo 1', category: 'birthdays', camera: 'Canon EOS R5', lens: 'RF 50mm', location: 'Berlin', date: '2025-01-15', description: 'A beautiful birthday celebration.' },
                // Add more photo details
            ];
            const photoDetails = allPhotos.find((photo) => photo.id === Number(id));
            setPhoto(photoDetails);
        };

        if (id) fetchPhotoDetails();
    }, [id]);

    if (!photo) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Header />
            <main className={styles.photo_details}>
                <div className={styles.photo_display}>
                    <img src={photo.src} alt={photo.name} className={styles.photo_image} />
                </div>
                <div className={styles.photo_info_card}>
                    <h1>{photo.name}</h1>
                    <p><strong>Category:</strong> {photo.category}</p>
                    <p><strong>Camera:</strong> {photo.camera}</p>
                    <p><strong>Lens:</strong> {photo.lens}</p>
                    <p><strong>Location:</strong> {photo.location}</p>
                    <p><strong>Date:</strong> {photo.date}</p>
                    <p><strong>Description:</strong> {photo.description}</p>
                    <button onClick={() => router.push('/gallery')} className={styles.back_button}>Back to Gallery</button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PhotoDetails;
