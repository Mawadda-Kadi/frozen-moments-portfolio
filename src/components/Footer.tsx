import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import Lightbox from '@/components/LightboxImpressum';
import styles from '@/styles/Footer.module.scss';

const Footer = () => {
    const [isImpressumOpen, setIsImpressumOpen] = useState(false);

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_text}>
                    © 2025 Frozen Moments von Emma Schmidt. Alle Rechte vorbehalten.
                </div>
                <nav className={styles.footer_nav}>
                    <a
                        onClick={() => setIsImpressumOpen(true)}
                        className={styles.footer_link}
                    >
                        <span className={styles.impressum}>Impressum</span>
                    </a>
                    <a
                        href="https://facebook.com"

                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://instagram.com"
                        className={styles.footer_icon}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className={styles.footer_icon}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </nav>
            </div>

            {/* Lightbox for Impressum */}
            <Lightbox isOpen={isImpressumOpen} onClose={() => setIsImpressumOpen(false)}>
                <h1>Impressum</h1>
                <div style={{ fontSize: '1.2rem' }}>
                    <p><strong>Verantwortlich für den Inhalt:</strong></p>
                    <p>
                        Emma Schmidt<br />
                        Frozen Moments Photography<br />
                        Leipziger Straße 123<br />
                        12345 Halle (Saale)<br />
                        Deutschland
                    </p>
                    <p><strong>Kontakt:</strong></p>
                    <p>Email: info@frozenmoments.com<br />Telefon: +49 123 456 7890</p>
                    <p><strong>Umsatzsteuer-ID:</strong> DE123456789</p>
                </div>
            </Lightbox>
        </footer>
    );
};

export default Footer;
