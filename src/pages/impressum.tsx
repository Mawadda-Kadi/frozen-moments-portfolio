import Header from '@/components/Header';
import '@/styles/globals.scss';

const Impressum = () => (
    <>
        <Header />
        <main style={{ padding: '2rem' }}>
            <h1>Impressum</h1>
            <div style={{ fontSize: '1.2rem' }}>
                <p><strong>Verantwortlich für den Inhalt:</strong></p>
                <p>
                    Emma Schmidt<br />
                    Frozen Moments Photography<br />
                    Leipziger Straße 123<br />
                    12345 Halle (Saale)<br />
                    Deutschland
                </p>
                <p><strong>Kontakt:</strong></p>
                <p>Email: info@frozenmoments.com<br />Telefon: +49 123 456 7890</p>
                <p><strong>Umsatzsteuer-ID:</strong> DE123456789</p>
            </div>
        </main>
    </>
);

export default Impressum;