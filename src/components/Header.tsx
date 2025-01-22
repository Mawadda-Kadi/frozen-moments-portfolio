import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// useState used to declare a state variable.
// Keeps track of the current language
import styles from '@/styles/Header.module.scss';

const Header = () => {
    const [language, setLanguage] = useState('DE');
    // setLanguage: A function to update the state.
    // useState initializes the state variable with the value 'DE'

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'DE' ? 'EN' : 'DE')); // Update state
    };

    return (
        <header className="header">
            <div className="header-left">
                <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
                <h1>Frozen Moments von Emma Schmidt</h1>
            </div>
            <nav className="navigation">
                <Link href="/">Startseite</Link>
                <Link href="/gallery">Galerie</Link>
                <Link href="/about">Über mich</Link>
                <Link href="/contact">Kontakt</Link>
            </nav>
            <button className="language-toggle" onClick={toggleLanguage}>
                {language}
            </button>
        </header>
    );
};


export default Header;