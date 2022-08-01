import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../store';
import { styled } from '@mui/system';
import Modal from '../components/Modal';
import WalletModal from '../components/WalletModal';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import SwitchNetwork from '../components/SwitchNetwork';
import WalletDetails from '../components/WalletDetails/WalletDetails';
import Settings from '../components/Settings';
import AppBar from '../components/AppBar';
import AppFooter from '../components/AppFooter';
import Head from 'next/head';

const MyComponent = styled('div')({
  backgroundColor: '#FFFFFF',
  height: '100%',
  width: '100%',
  overflow: 'auto',
  '@media (max-width: 660px)': {
    backgroundColor: '#FFFFFF',
    height: '670px',
    width: '100%',
    overflow: 'auto',
  },
});

const BoxsToken = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingTop: 10,
  width: '585px',
  height: '90%',
  borderRadius: 10,
  overflow: 'hidden',
  '@media (max-width: 660px)': {
    backgroundColor: 'white',
    paddingBottom: 30,
    paddingTop: 10,
    width: '585px',
    height: '90%',
    borderRadius: 0,
    overflow: 'hidden',
  },
  '&:hover': {
    overflowY: 'auto',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
const BtnGroup = styled('div')({
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: '10%',
});
const ActiveBtn = styled('button')({
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  height: 36,
  width: '100%',
  border: 'none',
  borderRadius: '100px',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const NavBar = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 76,
});
const NavImg = styled('img')({
  height: '36px',
  width: '36px',
  marginLeft: 10,
  marginRight: 10,
});
const DivFlex = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const settingData = [
  { name: 'About' },
  { name: 'Help Center' },
  { name: 'Request Features' },
  { name: 'Language' },
  { name: 'Dark Mode' },
];
type CoinDetail = {
  name: String;
  image: String;
  Subname: String;
  Price: String;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

export default function MyApp({ Component, pageProps }: AppProps) {
  const matches = useMediaQuery('(min-width:660px)');
  //const ModalData: boolean = useSelector((state: ArticleState) => state.Modal);
  //const dispatch: AppDispatch = useDispatch();
  //const CoinDetail: CoinDetail = useSelector((state: ArticleState) => state.ConnectWallet);
  let router = useRouter();
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Plug Exchange" />
      </Head>
      {matches ? null : (
        <NavBar>
          <div>
            <NavImg src="/images/mMenu.png" onClick={() => null} />
            <NavImg src="/images/mlogo.png" />
          </div>
          <DivFlex>
            <Settings settings={settingData} />
          </DivFlex>
        </NavBar>
      )}
      <MyComponent>
        <AppBar />
        <Modal isOpen={false} modalTitle="WalletModal" close={() => null}>
          <BoxsToken>
            <WalletModal onClose={() => null} />
          </BoxsToken>
        </Modal>

        {matches ? null : null !== '' ? (
          <BtnGroup>
            <SwitchNetwork />
            <WalletDetails account={null} />
          </BtnGroup>
        ) : (
          <BtnGroup>
            <ActiveBtn>Connect Wallet</ActiveBtn>
          </BtnGroup>
        )}
        <Component {...pageProps} />
        {router?.pathname === '/Crosschain' ? null : matches ? <AppFooter /> : null}
      </MyComponent>
    </Provider>
  );
}