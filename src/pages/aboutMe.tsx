import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FiCamera, FiEdit, FiVideo } from "react-icons/fi";
import Image from "next/image";
import '@/styles/globals.scss';
import styles from "@/styles/AboutMe.module.scss";

const aboutMe: React.FC = () => {
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);

    const testimonials = [
        "Die Fotos sind einfach atemberaubend! Jedes Bild erzählt eine eigene Geschichte. Vielen Dank für die wunderbare Arbeit!",
        "Ich bin begeistert von der Qualität der Fotos und der schnellen Bearbeitung. Absolute Empfehlung!",
        "Vielen Dank für die entspannte Atmosphäre beim Shooting. Die Ergebnisse haben all meine Erwartungen übertroffen!",
        "Professionell, kreativ und super freundlich – die beste Fotografin, die ich je hatte!",
        "Die Bearbeitung der Fotos ist perfekt! Jede Aufnahme wirkt so lebendig und einzigartig. Ich bin mehr als zufrieden.",
        "Vielen Dank für die tolle Beratung und die genialen Ideen. Die Fotos sind wunderschön geworden!",
        "Das war mit Abstand das beste Fotoshooting, das ich je hatte! Toller Service und atemberaubende Ergebnisse.",
    ];

    const handlePrev = () => {
        setCurrentCommentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentCommentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <Header />
            <div className={styles.aboutMe}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroContainer}>
                        <Image
                            src="/images/about-me/hero-emma.jpg"
                            alt="Hero Image"
                            layout="responsive"
                            width={600}
                            height={300}
                            className={styles.heroImage}
                        />
                        <h1 className={styles.heroTitle}>Willkommen in meiner Welt der Fotografie</h1>
                    </div>
                </section>

                {/* Personal Story Section */}
                <section className={styles.story}>
                    <h2 className={styles.sectionTitle}>Die Geschichte hinter meiner Kamera</h2>
                    <div className={styles.storyContainer}>
                        <div className={styles.storyText}>
                            <p>
                                Schon als Kind war ich begeistert davon, wie ein einziger Moment in einem Bild für die <span className="highlight">Ewigkeit</span> festgehalten werden kann.
                            </p>
                            <p>
                                Ein prägender Moment war ein spontanes Foto meiner Eltern im Urlaub, das voller <span className="highlight">Emotionen</span> und Authentizität steckte.
                            </p>
                            <div className="divider"></div>
                            <p>
                                Heute ist die Fotografie für mich mehr als nur ein Beruf – sie ist meine Leidenschaft, mit der ich Menschen dabei helfe, die schönsten Momente ihres Lebens <span className="highlight">unvergesslich</span> zu machen.
                            </p>
                        </div>
                        <div className={styles.storyImage}>
                            <Image
                                src="/images/about-me/emma-story.PNG"
                                alt="Die Geschichte hinter meiner Kamera"
                                layout="responsive"
                                width={400}
                                height={400}
                            />
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <div className={styles.experience}>
                    <div className={styles.exp_image}>
                        <Image
                            src="/images/about-me/exp-image.png"
                            alt="Erfahrung und Qualifikationen"
                            layout="responsive"
                            width={400}
                            height={300}
                            className={styles.experienceImage}
                        />
                    </div>
                    <div className={styles.text}>
                        <h2>Erfahrung und Qualifikationen</h2>
                        <div className={styles.detail}>
                            <h3>
                                <span className={styles.icon}>🎓</span> Ausbildung und Weiterbildung:
                            </h3>
                            <p>
                                Nach meinem Abitur habe ich eine professionelle Ausbildung in Fotografie
                                abgeschlossen und besuche regelmäßig Workshops, um mein Wissen und meine
                                Techniken zu erweitern.
                            </p>
                        </div>
                        <div className={styles.detail}>
                            <h3>
                                <span className={styles.icon}>📸</span> Berufserfahrung:
                            </h3>
                            <p>
                                Seit über fünf Jahren bin ich als selbstständige Fotografin tätig. In dieser
                                Zeit durfte ich zahlreiche unvergessliche Momente festhalten, darunter:
                            </p>
                            <ul>
                                <li>Hochzeiten und Verlobungen</li>
                                <li>Baby- und Familienshootings</li>
                                <li>Firmen-Events und Businessporträts</li>
                                <li>Persönliche Porträtshootings</li>
                            </ul>
                        </div>
                        <div className={styles.detail}>
                            <h3>
                                <span className={styles.icon}>🔧</span> Ausrüstung und Technik:
                            </h3>
                            <p>
                                Modernste Kamera- und Beleuchtungstechnik ermöglicht mir höchste Qualität.
                                Dabei lege ich Wert auf eine natürliche Atmosphäre, in der sich meine Kunden
                                wohlfühlen.
                            </p>
                        </div>
                        <div className={styles.detail}>
                            <h3>
                                <span className={styles.icon}>✨</span> Persönlicher Stil:
                            </h3>
                            <p>
                                Mein Stil ist authentisch und zeitlos. Ich liebe es, Emotionen und Details
                                einzufangen, die Geschichten erzählen und auch nach Jahren noch berühren.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What I Do Best Section */}
                <section className={styles.whatIDoBest}>
                    <h2>Was ich am besten kann</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <FiCamera className={styles.icon} />
                            <h3>Fotoshooting</h3>
                            <p>
                                Ich fange unvergessliche Momente mit Kreativität und Präzision ein, egal
                                ob bei Hochzeiten, Porträts oder besonderen Anlässen.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <FiEdit className={styles.icon} />
                            <h3>Foto-Bearbeitung</h3>
                            <p>
                                Mit professioneller Bearbeitung erwecke ich Bilder zum Leben und verleihe
                                ihnen den perfekten Feinschliff.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <FiVideo className={styles.icon} />
                            <h3>Online-Beratung</h3>
                            <p>
                                Ich biete persönliche Beratung für alle Ihre fotografischen Anliegen, von
                                der Planung bis hin zur Umsetzung.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Customer Testimonials */}
                <section className={styles.testimonials}>
                    <h2>Kommentare von Kunden</h2>
                    <div className={styles.carousel}>
                        <button className={styles.prev} onClick={handlePrev}>
                            ◀
                        </button>
                        <div className={styles.comment}>
                            <p>"{testimonials[currentCommentIndex]}"</p>
                        </div>
                        <button className={styles.next} onClick={handleNext}>
                            ▶
                        </button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default aboutMe;
