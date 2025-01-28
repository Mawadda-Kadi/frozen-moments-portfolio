import React, { useState, ChangeEvent, FormEvent } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.scss';
import styles from '@/styles/Contact.module.scss';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', telefonnummer: '', nachricht: '' });
    const [status, setStatus] = useState('');
    const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatusType('');
        setStatus('Nachricht wird gesendet...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setStatusType('success');
                setStatus('Nachricht erfolgreich gesendet!');
                setForm({ name: '', email: '', telefonnummer: '', nachricht: '' });
            } else {
                const errorData = await response.json();
                setStatusType('error');
                setStatus(`Fehler: ${errorData.error}`);
            }
        } catch (error) {
            console.error(error);
            setStatusType('error');
            setStatus('Fehler beim Senden der Nachricht.');
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Header />

            <main className={styles.main}>
                {/* Alert Messages */}
                {status && (
                    <div
                        className={`${styles.alert} ${statusType === 'success' ? styles.success : styles.error
                            }`}
                    >
                        {status}
                    </div>
                )}

                <h1 className={styles.title}>Planen wir etwas Besonderes <br/>lassen Sie uns Ihre Vision verwirklichen!</h1>
                <div className={styles.content}>
                    <div className={styles.formContainer}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <label htmlFor="name">Ihr Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Ihr vollständiger Name (für die persönliche Ansprache)"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="email">E-Mail-Adresse</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="E-Mail-Adresse für unsere Rückmeldung"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="telefonnummer">Telefonnummer (optional)</label>
                            <input
                                type="tel"
                                id="telefonnummer"
                                name="telefonnummer"
                                placeholder="Optional: Telefonnummer für schnellere Kontaktaufnahme"
                                value={form.telefonnummer}
                                onChange={handleChange}
                            />

                            <label htmlFor="nachricht">Nachricht</label>
                            <textarea
                                id="nachricht"
                                name="nachricht"
                                placeholder="„Beschreiben Sie kurz Ihr Anliegen (z. B. Hochzeitsshooting, Eventfotografie)“"
                                value={form.nachricht}
                                onChange={handleChange}
                                required
                            />

                            <button type="submit" className={styles.submitButton}>
                                Nachricht senden
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}