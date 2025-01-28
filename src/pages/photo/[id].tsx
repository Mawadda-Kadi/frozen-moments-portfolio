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
                    src: '/images/gallery/wedding15.jpg',
                    name: 'Erster Tanz',
                    category: 'Hochzeiten',
                    camera: 'Canon EOS R5',
                    lens: 'RF 50mm F1.2L',
                    camera_position: 'Frontalperspektive mit weicher Beleuchtung',
                    location: 'München, Deutschland',
                    date: '2025-01-15',
                    description: 'Ein magischer Moment des ersten Tanzes unter funkelnden Lichtern. Ein Augenblick voller Emotionen und Liebe, perfekt festgehalten.',
                },
                {
                    id: 2,
                    src: '/images/gallery/graduation3.jpg',
                    name: 'Absolventenfreude',
                    category: 'Abschlussfeiern',
                    camera: 'Sony Alpha 7 IV',
                    lens: 'FE 85mm F1.4 GM',
                    camera_position: 'Nahaufnahme von der Seite',
                    location: 'Hamburg, Deutschland',
                    date: '2025-01-15',
                    description: 'Ein emotionaler Moment der Umarmung nach dem Erreichen eines großen Meilensteins. Pure Freude und Stolz in jedem Detail eingefangen.',
                },
                {
                    id: 3,
                    src: '/images/gallery/baby_shower6.jpg',
                    name: 'Freude auf neues Leben',
                    category: 'Babypartys',
                    camera: 'Nikon Z7 II',
                    lens: 'NIKKOR Z 35mm f/1.8 S',
                    camera_position: 'Weitwinkel mit natürlichem Licht',
                    location: 'Frankfurt, Deutschland',
                    date: '2025-01-15',
                    description: 'Ein liebevoller Moment unter Freunden, der die Vorfreude auf ein neues Leben feiert. Die Leichtigkeit und Wärme des Tages sind in jedem Detail spürbar.',
                },
                {
                    id: 4,
                    src: '/images/gallery/birthday16.jpg',
                    name: 'Geburtstagswunsch',
                    category: 'Geburtstage',
                    camera: 'Fujifilm X-T5',
                    lens: 'XF 56mm f/1.2 R',
                    camera_position: 'Augenhöhe mit Fokus auf die Kerzen',
                    location: 'Stuttgart, Deutschland',
                    date: '2025-01-15',
                    description: 'Ein bezaubernder Moment, in dem ein Kind die Geburtstagskerzen ausbläst. Freude und Unschuld leuchten in diesem liebevoll eingefangenen Bild.',
                },
                {
                    id: 5,
                    src: '/images/gallery/business3.jpg',
                    name: 'Teamgeist in Aktion',
                    category: 'Geschäftsevents',
                    camera: 'Canon EOS R6',
                    lens: 'RF 24-70mm F2.8L IS USM',
                    camera_position: 'Weitwinkelperspektive mit natürlichem Licht',
                    location: 'Düsseldorf, Deutschland',
                    date: '2024-12-05',
                    description: 'Ein inspirierender Moment der Zusammenarbeit und Motivation. Dieses Bild fängt den Enthusiasmus und die Energie eines erfolgreichen Geschäftsteams perfekt ein.',
                },
                {
                    id: 6,
                    src: '/images/gallery/personal_shooting10.jpg',
                    name: 'Frühlingsfreunde',
                    category: 'Persönliche Fotoshootings',
                    camera: 'Panasonic Lumix S5',
                    lens: 'LUMIX S 24-105mm F4 Macro OIS',
                    camera_position: 'Bodennähe für eine natürliche Perspektive',
                    location: 'Heidelberg, Deutschland',
                    date: '2025-03-25',
                    description: 'Ein herzerwärmender Moment im Frühling, der die innige Verbindung zwischen Mensch und Tier in einer farbenfrohen Umgebung festhält.',
                },
                {
                    id: 7,
                    src: '/images/gallery/business9.jpg',
                    name: 'Inspiration im Vortrag',
                    category: 'Geschäftsevents',
                    camera: 'Nikon Z9',
                    lens: 'NIKKOR Z 70-200mm f/2.8 VR S',
                    camera_position: 'Leicht erhöht mit Fokus auf den Sprecher',
                    location: 'Berlin, Deutschland',
                    date: '2024-11-20',
                    description: 'Ein kraftvoller Moment während eines inspirierenden Vortrags, der die Aufmerksamkeit und das Engagement des Publikums einfängt.',
                },
                {
                    id: 8,
                    src: '/images/gallery/wedding25.jpg',
                    name: 'Winterliche Romantik',
                    category: 'Hochzeiten',
                    camera: 'Sony Alpha 7R IV',
                    lens: 'FE 35mm F1.4 GM',
                    camera_position: 'Rücklicht mit natürlicher Winterbeleuchtung',
                    location: 'Garmisch-Partenkirchen, Deutschland',
                    date: '2025-02-14',
                    description: 'Ein bezaubernder Moment in einer verschneiten Winterlandschaft, der die Zärtlichkeit und Liebe eines frisch verheirateten Paares einfängt.',
                },
                {
                    id: 9,
                    src: '/images/gallery/birthday4.jpg',
                    name: 'Feierlaune pur',
                    category: 'Geburtstage',
                    camera: 'Canon EOS 5D Mark IV',
                    lens: 'EF 24-70mm f/2.8L II USM',
                    camera_position: 'Frontalperspektive mit Fokus auf die Gruppe',
                    location: 'Köln, Deutschland',
                    date: '2025-04-10',
                    description: 'Ein lebhafter Geburtstag voller Farben, Lachen und Freude. Dieser Moment fängt die ausgelassene Stimmung eines perfekten Feierabends ein.',
                },
                {
                    id: 10,
                    src: '/images/gallery/graduation7.jpg',
                    name: 'Abschluss und Stolz',
                    category: 'Abschlussfeiern',
                    camera: 'Nikon Z6 II',
                    lens: 'NIKKOR Z 85mm f/1.8 S',
                    camera_position: 'Porträtaufnahme mit sanftem Hintergrund',
                    location: 'Münster, Deutschland',
                    date: '2025-06-30',
                    description: 'Ein herzerwärmender Moment, der die Liebe und den Stolz einer Familie während der Abschlussfeier einfängt. Ein bleibendes Andenken an einen besonderen Tag.',
                },
                {
                    id: 11,
                    src: '/images/gallery/wedding20.jpg',
                    name: 'Feuerwerk der Liebe',
                    category: 'Hochzeiten',
                    camera: 'Sony Alpha 1',
                    lens: 'FE 24-70mm F2.8 GM',
                    camera_position: 'Frontalperspektive bei Nacht mit Beleuchtungseffekt',
                    location: 'Schloss Neuschwanstein, Deutschland',
                    date: '2025-09-15',
                    description: 'Ein spektakulärer Moment unter funkelndem Feuerwerk, der die Romantik und Magie eines unvergesslichen Hochzeitstags einfängt.',
                },
                {
                    id: 12,
                    src: '/images/gallery/personal_shooting6.jpg',
                    name: 'Bergträume',
                    category: 'Persönliche Fotoshootings',
                    camera: 'Fujifilm X-T4',
                    lens: 'XF 16-55mm F2.8 R LM WR',
                    camera_position: 'Weitwinkel mit Fokus auf die Landschaft',
                    location: 'Eibsee, Deutschland',
                    date: '2025-05-18',
                    description: 'Ein ruhiger Moment inmitten der majestätischen Alpenlandschaft. Dieses Bild zeigt die perfekte Harmonie zwischen Mensch und Natur.',
                },
                {
                    id: 13,
                    src: '/images/gallery/wedding6.jpg',
                    name: 'Strandhochzeitstraum',
                    category: 'Hochzeiten',
                    camera: 'Canon EOS R5',
                    lens: 'RF 28-70mm F2L USM',
                    camera_position: 'Weitwinkelperspektive mit Gegenlicht',
                    location: 'Sylt, Deutschland',
                    date: '2025-07-10',
                    description: 'Ein unvergesslicher Moment bei einer romantischen Strandhochzeit, umgeben von Familie und Freunden. Dieses Bild strahlt pure Freude und Liebe aus.',
                },
                {
                    id: 14,
                    src: '/images/gallery/birthday9.jpg',
                    name: 'Geburtstagsspaß pur',
                    category: 'Geburtstage',
                    camera: 'Sony Alpha 7 III',
                    lens: 'FE 50mm F1.8',
                    camera_position: 'Nahaufnahme mit Fokus auf die Interaktion',
                    location: 'Hamburg, Deutschland',
                    date: '2025-03-20',
                    description: 'Ein herzerwärmender Moment, der zeigt, wie man mit seinem vierbeinigen besten Freund den Geburtstag feiert. Lachen, Liebe und ein bisschen Kuchen – die perfekte Mischung.',
                },
                {
                    id: 15,
                    src: '/images/gallery/personal_shooting8.jpg',
                    name: 'Familienglück',
                    category: 'Persönliche Fotoshootings',
                    camera: 'Canon EOS R6',
                    lens: 'RF 85mm F2 Macro IS STM',
                    camera_position: 'Frontalperspektive mit natürlichem Licht',
                    location: 'Leipzig, Deutschland',
                    date: '2025-04-25',
                    description: 'Ein herzlicher Moment, der die Freude und Verbundenheit einer Familie vor ihrem Zuhause einfängt. Ein perfektes Bild von Liebe und Glück.',
                },
                {
                    id: 16,
                    src: '/images/gallery/baby_shower11.jpg',
                    name: 'Vorfreude auf das Wunder',
                    category: 'Babypartys',
                    camera: 'Nikon D850',
                    lens: 'AF-S NIKKOR 50mm f/1.8G',
                    camera_position: 'Seitliche Nahaufnahme mit weichem Licht',
                    location: 'Dresden, Deutschland',
                    date: '2025-05-05',
                    description: 'Ein intimer Moment voller Vorfreude und Liebe, der die Schönheit der Mutterschaft in warmem, natürlichem Licht festhält.',
                },
                {
                    id: 17,
                    src: '/images/gallery/wedding8.jpg',
                    name: 'Liebe in den Wolken',
                    category: 'Hochzeiten',
                    camera: 'Canon EOS R3',
                    lens: 'RF 70-200mm F2.8L IS USM',
                    camera_position: 'Weitwinkelaufnahme in Schwarz-Weiß',
                    location: 'Zugspitze, Deutschland',
                    date: '2025-08-20',
                    description: 'Ein atemberaubendes Schwarz-Weiß-Porträt zweier Bräute, das ihre Liebe und Freude in einer dramatischen Berglandschaft einfängt. Ein zeitloser Moment, der in Erinnerung bleibt.',
                },
                {
                    id: 18,
                    src: '/images/gallery/birthday2.jpg',
                    name: 'Feierliche Erinnerungen',
                    category: 'Geburtstage',
                    camera: 'Sony Alpha 7 IV',
                    lens: 'FE 35mm F1.4 GM',
                    camera_position: 'Nahaufnahme mit weicher Beleuchtung',
                    location: 'Stuttgart, Deutschland',
                    date: '2025-01-30',
                    description: 'Ein herzerwärmender Moment einer Geburtstagsfeier mit Freunden und Familie. Lachen, Kerzenschein und festliche Dekoration schaffen eine magische Atmosphäre.',
                },
                {
                    id: 19,
                    src: '/images/gallery/personal_shooting3.jpg',
                    name: 'Unterwegs mit Stil',
                    category: 'Persönliche Fotoshootings',
                    camera: 'Canon EOS R6',
                    lens: 'RF 24-105mm F4-7.1 IS STM',
                    camera_position: 'Seitliche Perspektive mit natürlichem Licht',
                    location: 'Frankfurt am Main, Deutschland',
                    date: '2025-02-12',
                    description: 'Ein modernes Porträt einer stilvollen Frau auf dem Weg zu neuen Abenteuern. Dieses Bild vereint Eleganz und Dynamik in einem urbanen Setting.',
                },
                {
                    id: 20,
                    src: '/images/gallery/personal_shooting9.jpg',
                    name: 'Natur und Gelassenheit',
                    category: 'Persönliche Fotoshootings',
                    camera: 'Fujifilm X-T5',
                    lens: 'XF 18-55mm F2.8-4 R LM OIS',
                    camera_position: 'Weitwinkelaufnahme mit natürlichem Licht',
                    location: 'Allgäu, Deutschland',
                    date: '2025-06-01',
                    description: 'Ein Moment der Ruhe inmitten der alpinen Schönheit. Dieses Bild fängt die Harmonie von Mensch und Natur in einer malerischen Berglandschaft ein.',
                },



















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
