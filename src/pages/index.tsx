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
                </main >
                <Footer />
            </div >
        </>
    );
};

export default Home;
