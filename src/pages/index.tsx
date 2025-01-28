import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

import '@/styles/globals.scss';
import styles from '@/styles/Home.module.scss';

const Home = () => {
    return (
        <>
            <Header />
            <div className="page-container">
                <main className={styles.home}>
                    <section className={styles.hero}>
                        <div className={styles.hero_images}>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src="/images/home/hero2.jpg"
                                    alt="Left Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className={styles.image}
                                />
                            </div>
                            <div className={`${styles.image_wrapper} ${styles.center_image}`}>
                                <Image
                                    src="/images/home/hero1.jpg"
                                    alt="Center Image"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className={styles.image_wrapper}>
                                <Image
                                    src="/images/home/hero3.jpg"
                                    alt="Right Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className={styles.image}
                                />
                            </div>
                        </div>
                        <div className={styles.short_intro}>
                            <h2>Die kostbarsten Momente des Lebens einfangen</h2>
                            <p>
                                Willkommen bei Frozen Moments, wo jedes Ereignis eine Geschichte und jedes Foto eine wertvolle Erinnerung ist.
                            </p>
                        </div>
                    </section>
                    {/* Featured Services Section */}
                    <section className={styles.featuredServices}>
                        <h3>Unsere Leistungen</h3>
                        <div className={styles.services}>
                            <div className={styles.service}>
                                <Image
                                    src="/images/services/wedding.jpg"
                                    alt="Weddings"
                                    width={300}
                                    height={200}
                                />
                                <h4>Hochzeiten</h4>
                                <p>Perfekt eingefangene Momente Ihres besonderen Tages.</p>
                            </div>
                            <div className={styles.service}>
                                <Image
                                    src="/images/services/portrait.jpg"
                                    alt="Portraits"
                                    width={300}
                                    height={200}
                                />
                                <h4>Porträts</h4>
                                <p>Authentische und unvergessliche persönliche Aufnahmen.</p>
                            </div>
                            <div className={styles.service}>
                                <Image
                                    src="/images/services/event.jpg"
                                    alt="Events"
                                    width={300}
                                    height={200}
                                />
                                <h4>Events</h4>
                                <p>Professionelle Fotografie für Ihre geschäftlichen oder privaten Events.</p>
                            </div>
                        </div>
                    </section>

                    {/* Call-to-Action Section */}
                    <section className={styles.callToAction}>
                        <h3>Planen Sie Ihr nächstes Shooting mit uns</h3>
                        <p>
                            Lassen Sie uns gemeinsam unvergessliche Erinnerungen schaffen.
                        </p>
                        <div className={styles.buttons}>
                            <button
                                className={`${styles.ctaButton} ${styles.primaryButton}`}
                                onClick={() => alert('Termin Buchen')}>
                                Termin Buchen
                            </button>
                            <button
                                className={`${styles.ctaButton} ${styles.secondaryButton}`}
                                onClick={() => alert('Galerie Ansehen')}>
                                Galerie Ansehen
                            </button>
                        </div>
                    </section>
                </main >
                <Footer />
            </div >
        </>
    );
};

export default Home;
