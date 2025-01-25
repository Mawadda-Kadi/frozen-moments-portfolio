import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/PhotoDetails.module.scss';

interface Photo {
    id: number;
    src: string;
    name: string;
    category: string;
    camera: string;
    lens: string;
    location: string;
    date: string;
    description: string;
}

const PhotoDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [photo, setPhoto] = useState<Photo | null>(null);

    useEffect(() => {
        // Simulate fetching photo details from an API or data source
        const fetchPhotoDetails = async () => {
            const allPhotos: Photo[] = [
                {
                    id: 1,
                    src: '/images/gallery/birthday1.jpg',
                    name: 'Birthday Celebration',
                    category: 'Birthdays',
                    camera: 'Canon EOS R5',
                    lens: 'RF 50mm F1.2L',
                    location: 'Berlin, Germany',
                    date: '2025-01-15',
                    description: 'A beautiful birthday celebration capturing smiles and joy.',
                },
                {
                    id: 2,
                    src: '/images/gallery/business1.jpg',
                    name: 'Corporate Event',
                    category: 'Business Events',
                    camera: 'Nikon D850',
                    lens: '85mm F1.4',
                    location: 'Hamburg, Germany',
                    date: '2025-01-10',
                    description: 'A professional event featuring inspiring speeches and networking.',
                },
                // Add more photos with metadata
            ];

            const photoDetails = allPhotos.find((photo) => photo.id === Number(id));
            setPhoto(photoDetails || null);
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
                    <h1 className={styles.photo_title}>{photo.name}</h1>
                    <p><strong>Category:</strong> {photo.category}</p>
                    <p><strong>Camera:</strong> {photo.camera}</p>
                    <p><strong>Lens:</strong> {photo.lens}</p>
                    <p><strong>Location:</strong> {photo.location}</p>
                    <p><strong>Date:</strong> {photo.date}</p>
                    <p><strong>Description:</strong> {photo.description}</p>
                    <button onClick={() => router.push('/gallery')} className={styles.back_button}>
                        Back to Gallery
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default PhotoDetails;