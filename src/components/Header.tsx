import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from '@/styles/Header.module.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                    width={50}
                    height={50}
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
                style={{ display: isMenuOpen ? 'flex' : 'none' }}
            >
                <Link href="/">Startseite</Link>
                <Link href="/gallery">Galerie</Link>
                <Link href="/about">Über mich</Link>
                <Link href="/contact">Kontakt</Link>
            </nav>
        </header>
    );
};

export default Header;
