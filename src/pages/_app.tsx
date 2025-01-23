// _app.txs The entry point of te app
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Bree_Serif, Oleo_Script } from 'next/font/google';

// Importing Google Fonts
const breeSerif = Bree_Serif({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bree-serif',
});

const oleoScript = Oleo_Script({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-oleo-script',
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${breeSerif.variable} ${oleoScript.variable}`}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;