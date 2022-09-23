import React from 'react';
import { Provider } from 'react-redux';
import './app.css';
import type { AppProps } from 'next/app';
import store from '../store';
import WalletModal from '../components/WalletModal';
import AppBar from '../components/AppBar';
import AppFooter from '../components/AppFooter';
import Notification from '../components/swap/Swap/SwapConfirmModal/Notification';
import GlobalStyles from '../theme/globalStyles';
import ThemeConfig from '../theme';
import createEmotionCache from 'createEmotionCache';
import { CacheProvider } from '@emotion/react';

// client side emotion cache
const clientSideEmotionCache = createEmotionCache();

// @ts-ignore
export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeConfig>
        <Provider store={store}>
          <>
            <GlobalStyles />
            <AppBar />
            <WalletModal />
            <Component {...pageProps} />
            <AppFooter type="Window" />
            <Notification />
          </>
        </Provider>
      </ThemeConfig>
    </CacheProvider>
  );
}
