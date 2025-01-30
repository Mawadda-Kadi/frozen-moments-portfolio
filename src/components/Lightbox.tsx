import React from 'react';
import Image from 'next/image';
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
                <button className={styles.close} onClick={onClose}>✖</button>
                <button className={styles.prev} onClick={onPrev}>◀</button>

                <div className={styles.image_wrapper}>
                    <Image
                        src={src}
                        alt="Lightbox Image"
                        layout="intrinsic"
                        width={800}
                        height={600}
                        className={styles.image}
                    />
                </div>

                <button className={styles.next} onClick={onNext}>▶</button>
            </div>
        </div>
    );
};

export default Lightbox;
