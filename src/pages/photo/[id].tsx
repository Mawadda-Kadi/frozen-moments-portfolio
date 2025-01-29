import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.scss';
import styles from '@/styles/PhotoDetails.module.scss';
import { photoData, Photo } from '@/data/photoData';


const PhotoDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the photo with the matching ID
    const photo = photoData.find((photo) => photo.id === Number(id));

    if (!photo) return <p>Photo not found.</p>;

    return (
        <>
            <Header />
            <main className={styles.photo_details}>
                <div className={styles.photo_display}>
                    <Image
                        src={photo.src}
                        alt={photo.name}
                        width={600}
                        height={400}
                        className={styles.photo_image}
                    />
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