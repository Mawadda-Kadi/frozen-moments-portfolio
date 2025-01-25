import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import styles from '@/styles/Gallery.module.scss';
import { useGallery } from '@/hooks/useGallery';

const photosPerPage = 18;

const Gallery = () => {
    const {
        photos,
        totalPages,
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
    } = useGallery(photosPerPage);

    return (
        <>
            <Header />
            <main className={styles.gallery}>
                {/* Filter Menu */}
                <div className={styles.filter_menu}>
                    <button onClick={() => setSelectedCategory('all')}>Alle</button>
                    <button onClick={() => setSelectedCategory('weddings')}>Hochzeiten</button>
                    <button onClick={() => setSelectedCategory('birthdays')}>Geburtstage</button>
                    <button onClick={() => setSelectedCategory('baby_showers')}>Babypartys</button>
                    <button onClick={() => setSelectedCategory('graduations')}>Abschlussfeiern</button>
                    <button onClick={() => setSelectedCategory('personal_photoshoots')}>
                        Persönliche Fotoshootings
                    </button>
                    <button onClick={() => setSelectedCategory('business_events')}>
                        Geschäftliche Veranstaltungen
                    </button>
                </div>

                {/* Photo Grid */}
                <div className={styles.photo_grid}>
                    {photos.map((photo) => (
                        <div key={photo.id} className={styles.photo_card}>
                            <Image src={photo.src} alt={photo.name} width={300} height={300} />
                            <p>{photo.name}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className={styles.pagination}>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Gallery;
