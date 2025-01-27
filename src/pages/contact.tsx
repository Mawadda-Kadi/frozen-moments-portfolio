import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Contact.module.scss';

const contact: React.FC = () => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Kontaktieren Sie uns</h1>
                <div className={styles.content}>
                    {/* Kontaktformular */}
                    <div className={styles.formContainer}>
                        <form className={styles.form} method="POST" action="/api/auth/callback">
                            <label htmlFor="reason">Wie können wir Ihnen helfen?</label>
                            <input type="text" id="reason" name="reason" placeholder="Ihr Anliegen oder Grund" required />

                            <label htmlFor="name">Ihr Name</label>
                            <input type="text" id="name" name="name" placeholder="Geben Sie Ihren vollständigen Namen ein" required />

                            <label htmlFor="email">E-Mail-Adresse</label>
                            <input type="email" id="email" name="email" placeholder="Geben Sie Ihre E-Mail-Adresse ein" required />

                            <label htmlFor="mobile">Telephonnummer</label>
                            <input type="tel" id="mobile" name="mobile" placeholder="Geben Sie Ihre Telephonnummer ein" />

                            <button type="submit">Nachricht senden</button>
                        </form>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
};

export default contact;
