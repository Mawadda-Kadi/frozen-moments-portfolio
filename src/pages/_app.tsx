// _app.txs The entry point of te app
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Bree_Serif, Oleo_Script, Outfit } from 'next/font/google';

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

const outfit = Outfit({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-outfit',
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className={`${breeSerif.variable} ${oleoScript.variable}  ${outfit.variable}`}>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;