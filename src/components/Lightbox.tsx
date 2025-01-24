import React from 'react';
import styles from '@/styles/Lightbox.module.scss';

interface LightboxProps {
    src: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose, onPrev, onNext }) => {
    return (
        <div className={styles.lightbox}>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.content}>
                <button className={styles.close} onClick={onClose}>
                    ✖
                </button>
                <button className={styles.prev} onClick={onPrev}>
                    ◀
                </button>
                <img src={src} alt="Lightbox Image" className={styles.image} />
                <button className={styles.next} onClick={onNext}>
                    ▶
                </button>
            </div>
        </div>
    );
};

export default Lightbox;
