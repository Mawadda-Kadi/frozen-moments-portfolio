import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footer_content}>
            <div className={styles.footer_text}>
                © 2025 Frozen Moments von Emma Schmidt. Alle Rechte vorbehalten.
            </div>
            <nav className={styles.footer_nav}>
                <a href="/impressum" className={styles.footer_link}>Impressum</a>
                <a href="https://facebook.com" className={styles.footer_icon} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com" className={styles.footer_icon} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com" className={styles.footer_icon} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </nav>
        </div>
    </footer>
);

export default Footer;