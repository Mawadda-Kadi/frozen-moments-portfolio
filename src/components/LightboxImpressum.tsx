import React from 'react';
import styles from '@/styles/LightboxImpressum.module.scss';

interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.lightbox}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.content}>
                <button className={styles.close_button} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Lightbox;
