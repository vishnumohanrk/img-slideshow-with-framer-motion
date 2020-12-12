import 'tailwindcss/tailwind.css';
import '../styles/index.css';

import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
