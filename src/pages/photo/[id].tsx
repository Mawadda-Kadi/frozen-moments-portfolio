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
    camera_position: string;
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

            if (!id || Array.isArray(id)) return;

            const allPhotos: Photo[] = [
                {
                    id: 1,
                    src: '/images/gallery/birthday1.jpg',
                    name: 'Birthday Celebration2',
                    category: 'Birthdays',
                    camera: 'Canon EOS R5',
                    lens: 'RF 50mm F1.2L',
                    camera_position: 'Top/Down',
                    location: 'Berlin, Germany',
                    date: '2025-01-15',
                    description: 'A beautiful birthday celebration capturing smiles and joy.',
                },
                {
                    id: 2,
                    src: '/images/gallery/business1.jpg',
                    name: 'Business event',
                    category: 'Business Events',
                    camera: 'Nikon D850',
                    lens: '85mm F1.4',
                    camera_position: 'Top/Down',
                    location: 'Hamburg, Germany',
                    date: '2025-01-10',
                    description: 'A professional event featuring inspiring speeches and networking.',
                },
                // Add more photo details
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
                    <h1>{photo.name}</h1>
                    <div className={styles.info_grid}>
                        <p><strong>Category:</strong> {photo.category}</p>
                        <p><strong>Camera:</strong> {photo.camera}</p>
                        <p><strong>Lens:</strong> {photo.lens}</p>
                        <p><strong>Camera Position:</strong> {photo.camera_position}</p>
                        <p><strong>Location:</strong> {photo.location}</p>
                        <p><strong>Date:</strong> {photo.date}</p>
                    </div>
                    <p className={styles.description}><strong>Description:</strong> {photo.description}</p>
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
