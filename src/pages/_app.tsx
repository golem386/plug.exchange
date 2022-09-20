import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../store';
import WalletModal from '../components/WalletModal';
import AppBar from '../components/AppBar';
import AppFooter from '../components/AppFooter';
import Notification from '../components/swap/Swap/SwapConfirmModal/Notification';
import './app.css';
import GlobalStyles from '../theme/globalStyles';
import ThemeConfig from '../theme';
import { Suspense, useEffect, useState } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isAppLayout, setIsAppLayout] = useState(false);

  useEffect(() => {
    if (
      globalThis.window?.location?.pathname !== '/HomePage' &&
      globalThis.window?.location?.pathname !== '/LandingPage' &&
      globalThis.window?.location?.pathname !== '/FaqPage'
    ) {
      setIsAppLayout(true);
    } else {
      setIsAppLayout(false);
    }
  }, []);
  return (
    <ThemeConfig>
      <Provider store={store}>
        <GlobalStyles />
        <Suspense fallback={"Loading..."}>
          {isAppLayout ? (
            <>
              <AppBar />
              <WalletModal />
              <Component {...pageProps} />
              <AppFooter type="Window" />
              <Notification />
            </>
          ) : (
            <>
              <Component {...pageProps} />
            </>
          )}
        </Suspense>
      </Provider>
    </ThemeConfig>
  );
}
