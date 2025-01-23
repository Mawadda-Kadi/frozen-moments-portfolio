import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

import '@/styles/globals.scss';
import styles from '@/styles/Home.module.scss';

const Home = () => {
    return (
        <>
            <Header />
            <main className={styles.home}>
                <section className={styles.hero}>
                    <div className={styles.hero_images}>
                        <Image src="/images/home/hero2.jpg" alt="Left Image" width={300} height={400} />
                        <Image src="/images/home/hero1.jpg" alt="Center Image" width={400} height={500} />
                        <Image src="/images/home/hero3.jpg" alt="Right Image" width={300} height={400} />
                    </div>
                    <div className={styles.short_intro}>
                        <h2>Capturing Life's Most Precious Moments</h2>
                        <p>
                            Welcome to Frozen Moments, where every event is a story and every photograph is
                            a cherished memory.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};


export default Home;