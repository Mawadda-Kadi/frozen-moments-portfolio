import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from '@/styles/Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <Image
                    className={styles.logo}
                    src="/images/logo.png"
                    alt="Logo"
                    width={2000}
                    height={1000}
                />
                <h1 className={styles.title}>
                    <span className={styles.frozen_memory}>Frozen Moments</span>
                    <span className={styles.name}>von Emma Schmidt</span>
                </h1>
            </div>
            <button className={styles.menu_toggle} onClick={toggleMenu}>
                {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
            <nav
                className={`${styles.navigation} ${isMenuOpen ? styles.navigation_open : ''
                    }`}
            >
                <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
                    Startseite
                </Link>
                <Link
                    href="/gallery"
                    className={router.pathname === '/gallery' ? styles.active : ''}
                >
                    Galerie
                </Link>
                <Link
                    href="/aboutMe"
                    className={router.pathname === '/aboutMe' ? styles.active : ''}
                >
                    Über mich
                </Link>
                <Link
                    href="/contact"
                    className={router.pathname === '/contact' ? styles.active : ''}
                >
                    Kontakt
                </Link>
            </nav>
        </header>
    );
};

export default Header;
