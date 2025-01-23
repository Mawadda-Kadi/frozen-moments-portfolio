import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div>© 2025 Frozen Moments von Emma Schmidt.
            All Rights Reserved</div>
        <nav>
            <a href="/impressum">Impressum</a>
            <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
        </nav>
    </footer>
);

export default Footer;