import { AppProps } from 'next/app';

import Head from 'next/head';
import { GlobalStyles } from '../styles/global';

import { ThemeProvider } from '../components/ThemeContext/ThemeContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Bio Link: Launch Your Site in Seconds</title>
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
