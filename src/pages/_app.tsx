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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}
