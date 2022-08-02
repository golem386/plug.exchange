import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../store';
import WalletModal from '../components/WalletModal';
import AppBar from '../components/AppBar';
import AppFooter from '../components/AppFooter';
import Head from 'next/head';
import Notification from '../components/swap/Swap/SwapConfirmModal/Notification';
import './app.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Plug Exchange" />
      </Head>
        <AppBar />
        <WalletModal />
        <Component {...pageProps} />
         <AppFooter type="Window" />
        <Notification />    
    </Provider>
  );
}