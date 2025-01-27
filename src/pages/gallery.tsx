import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Lightbox from '@/components/Lightbox';
import styles from '@/styles/Gallery.module.scss';
import { FiEye, FiShare2 } from 'react-icons/fi';

interface Photo {
    id: number;
    src: string;
    name: string;
    category: string;
}

const photosPerPage = 18;

const Gallery = () => {
    const router = useRouter();
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        const fetchPhotos = async () => {
            const allPhotos = [
                { id: 1, src: '/images/gallery/birthday1.jpg', name: 'Photo 1', category: 'birthdays' },
                { id: 2, src: '/images/gallery/business1.jpg', name: 'Photo 2', category: 'business_events' },
                { id: 3, src: '/images/gallery/baby_shower1.jpg', name: 'Photo 3', category: 'baby_showers' },
            ];
            setPhotos(allPhotos);
        };
        fetchPhotos();
    }, []);

    useEffect(() => {
        const filtered = selectedCategory === 'all'
            ? photos
            : photos.filter((photo) => photo.category === selectedCategory);
        setFilteredPhotos(filtered);
    }, [selectedCategory, photos]);

    const startIndex = (currentPage - 1) * photosPerPage;
    const paginatedPhotos = filteredPhotos.slice(startIndex, startIndex + photosPerPage);

    const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);

    return (
        <>
            <Header />
            <main className={styles.gallery}>
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

                <div className={styles.photo_grid}>
                    {paginatedPhotos.map((photo, index) => (
                        <div
                            key={photo.id}
                            className={styles.photo_card}
                            onClick={() => {
                                setCurrentPhotoIndex(startIndex + index);
                                setLightboxOpen(true);
                            }}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.name}
                                width={300}
                                height={300}
                                className={styles.photo_image}
                            />
                            <div className={styles.icon_overlay}>
                                <button
                                    className={styles.icon_button}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(`/photo/${photo.id}`);
                                    }}
                                >
                                    <FiEye/>
                                    <span className={styles.tooltip}>Mehr ansehen</span>
                                </button>
                                <button
                                    className={styles.icon_button}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigator.share
                                            ? navigator.share({
                                                title: photo.name,
                                                text: `Check out this photo: ${photo.name}`,
                                                url: window.location.href,
                                            })
                                            : alert('Sharing not supported on this browser');
                                    }}
                                >
                                    <FiShare2/>
                                    <span className={styles.tooltip}>Foto teilen</span>
                                </button>
                            </div>
                            <p className={styles.photo_name}>{photo.name}</p>
                        </div>
                    ))}
                </div>

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

                {lightboxOpen && (
                    <Lightbox
                        src={filteredPhotos[currentPhotoIndex].src}
                        onClose={() => setLightboxOpen(false)}
                        onPrev={() =>
                            setCurrentPhotoIndex(
                                (currentPhotoIndex + filteredPhotos.length - 1) % filteredPhotos.length
                            )
                        }
                        onNext={() =>
                            setCurrentPhotoIndex((currentPhotoIndex + 1) % filteredPhotos.length)
                        }
                    />
                )}
            </main>
            <Footer />
        </>
    );
};

export default Gallery;
