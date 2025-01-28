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
                { id: 1, src: '/images/gallery/wedding15.jpg', name: 'Erster Tanz', category: 'weddings' },
                { id: 2, src: '/images/gallery/graduation3.jpg', name: 'Absolventenfreude', category: 'graduations' },
                { id: 3, src: '/images/gallery/baby_shower6.jpg', name: 'Freude auf neues Leben', category: 'baby_showers' },
                { id: 4, src: '/images/gallery/birthday16.jpg', name: 'Geburtstagswunsch', category: 'birthdays' },
                { id: 5, src: '/images/gallery/business3.jpg', name: 'Teamgeist in Aktion', category: 'business_events' },
                { id: 6, src: '/images/gallery/personal_shooting10.jpg', name: 'Frühlingsfreunde', category: 'personal_photoshoots' },
                { id: 7, src: '/images/gallery/business9.jpg', name: 'Inspiration im Vortrag', category: 'business_events' },
                { id: 8, src: '/images/gallery/wedding25.jpg', name: 'Winterliche Romantik', category: 'weddings' },
                { id: 9, src: '/images/gallery/birthday4.jpg', name: 'Feierlaune pur', category: 'birthdays' },
                { id: 10, src: '/images/gallery/graduation7.jpg', name: 'Abschluss und Stolz', category: 'graduations' },
                { id: 11, src: '/images/gallery/wedding20.jpg', name: 'Feuerwerk der Liebe', category: 'weddings' },
                { id: 12, src: '/images/gallery/personal_shooting6.jpg', name: 'Bergträume', category: 'personal_photoshoots' },
                { id: 13, src: '/images/gallery/wedding6.jpg', name: 'Strandhochzeitstraum', category: 'weddings' },
                { id: 14, src: '/images/gallery/birthday9.jpg', name: 'Geburtstagsspaß pur', category: 'birthdays' },
                { id: 15, src: '/images/gallery/personal_shooting8.jpg', name: 'Familienglück', category: 'personal_photoshoots' },
                { id: 16, src: '/images/gallery/baby_shower11.jpg', name: 'Vorfreude auf das Wunder', category: 'baby_showers' },
                { id: 17, src: '/images/gallery/wedding8.jpg', name: 'Liebe in den Wolken', category: 'weddings' },
                { id: 18, src: '/images/gallery/birthday2.jpg', name: 'Feierliche Erinnerungen', category: 'birthdays' },
                { id: 19, src: '/images/gallery/personal_shooting3.jpg', name: 'Unterwegs mit Stil', category: 'personal_photoshoots' },
                { id: 20, src: '/images/gallery/personal_shooting9.jpg', name: 'Natur und Gelassenheit', category: 'personal_photoshoots' },
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
