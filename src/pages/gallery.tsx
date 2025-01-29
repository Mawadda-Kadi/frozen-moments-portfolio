import { useGallery } from '@/hooks/useGallery';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lightbox from '@/components/Lightbox';
import '@/styles/globals.scss';
import styles from '@/styles/Gallery.module.scss';
import { FiEye, FiShare2 } from 'react-icons/fi';


const photosPerPage = 18;

const Gallery = () => {
    const router = useRouter();

    // Update Category
    const {
        photos,
        totalPages,
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
    } = useGallery(photosPerPage);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);


    return (
        <>
            <Header />
            <main className={styles.gallery}>
                {/*  Category Filter (Ensure Correct Category is Passed) */}
                <div className={styles.filter_menu}>
                    <button onClick={() => setSelectedCategory('all')} className={selectedCategory === 'all' ? styles.active : ''}>Alle</button>
                    <button onClick={() => setSelectedCategory('hochzeiten')} className={selectedCategory === 'hochzeiten' ? styles.active : ''}>Hochzeiten</button>
                    <button onClick={() => setSelectedCategory('geburtstage')} className={selectedCategory === 'geburtstage' ? styles.active : ''}>Geburtstage</button>
                    <button onClick={() => setSelectedCategory('babypartys')} className={selectedCategory === 'babypartys' ? styles.active : ''}>Babypartys</button>
                    <button onClick={() => setSelectedCategory('abschlussfeiern')} className={selectedCategory === 'abschlussfeiern' ? styles.active : ''}>Abschlussfeiern</button>
                    <button onClick={() => setSelectedCategory('persönliche Fotoshootings')} className={selectedCategory === 'persönliche Fotoshootings' ? styles.active : ''}>Persönliche Fotoshootings</button>
                    <button onClick={() => setSelectedCategory('Geschäftsevents')} className={selectedCategory === 'Geschäftsevents' ? styles.active : ''}>Geschäftliche Veranstaltungen</button>
                </div>

                {/*  Update Photos */}
                {photos.length > 0 ? (
                    <div className={styles.photo_grid}>
                        {photos.map((photo, index) => (
                            <div
                                key={photo.id}
                                className={styles.photo_card}
                                onClick={() => {
                                    setCurrentPhotoIndex(index);
                                    setLightboxOpen(true);
                                }}
                            >
                                {/* Image */}
                                <Image
                                    src={photo.src}
                                    alt={photo.name}
                                    width={300}
                                    height={300}
                                    className={styles.photo_image}
                                />

                                {/* Icons Overlay */}
                                <div className={styles.icon_overlay}>
                                    {/* View More (Eye Icon) */}
                                    <button
                                        className={styles.icon_button}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            router.push(`/photo/${photo.id}`);
                                        }}
                                    >
                                        <FiEye />
                                        <span className={styles.tooltip}>Mehr ansehen</span>
                                    </button>

                                    {/* Share Feature (Share Icon) */}
                                    <button
                                        className={styles.icon_button}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: photo.name,
                                                    text: `Check out this photo: ${photo.name}`,
                                                    url: window.location.href,
                                                });
                                            } else {
                                                alert('Sharing is not supported on this browser.');
                                            }
                                        }}
                                    >
                                        <FiShare2 />
                                        <span className={styles.tooltip}>Foto teilen</span>
                                    </button>
                                </div>

                                {/* Photo Name */}
                                <p className={styles.photo_name}>{photo.name}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={styles.no_photos}>Keine Fotos gefunden.</p> // Show message if no photos match the filter
                )}

                {/* Pagination Controls */}
                <div className={styles.pagination}>
                    <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>

                {/* Lightbox for Enlarged View */}
                {lightboxOpen && (
                    <Lightbox
                        src={photos[currentPhotoIndex].src}
                        onClose={() => setLightboxOpen(false)}
                        onPrev={() => setCurrentPhotoIndex((currentPhotoIndex + photos.length - 1) % photos.length)}
                        onNext={() => setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length)}
                    />
                )}
            </main>
            <Footer />
        </>
    );
};

export default Gallery;
