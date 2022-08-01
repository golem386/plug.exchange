import { Button, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//import { Menu, OpenModal, Search } from '../../store/Actions';
import WalletDetails from '../WalletDetails/WalletDetails';
import Settings from '../Settings';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Notification from '../swap/Swap/SwapConfirmModal/Notification';
import AppFooter from '../AppFooter';
import BuyCrypto from '../BuyCrypto';
import Link from 'next/link';

const NavMainComponent = styled('div')({
  display: 'flex',
  paddingLeft: 10,
  alignItems: 'center',
  justifyContent: 'space-around',
});
const CrosschainButtonActive = styled(Button)({
  borderRadius: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  height: 52,
  width: '137px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
});
const SwapButtonActive = styled(Button)({
  borderRadius: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  height: 52,
  width: '92px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
});
const SwapButton = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: 'white',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: '92px',
  border: 'none',
});

const ConnectWalletActive = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: '169px',
});
const CrosschainButton = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: '191px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});
const Imgs = styled('img')({
  width: '90px',
  height: 43,
  marginTop: 5,
});
const DownImg = styled('img')({
  width: '8.49px',
  height: '5.19px',
});

const WrongNetworkButton = styled(Button)({
  borderRadius: 16,
  background: 'red',
  padding: '0px 15px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  height: 52,
  width: '38%',
  '&:hover': {
    backgroundColor: 'red',
  },
});
const ButtonGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-evenly',
});
const Img = styled('img')({
  height: '36px',
  width: '36px',
});

const SettingMain = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: 15,
  marginLeft: 15,
});

const NavGrids = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
});
const LogoGrid = styled(Grid)({
  marginRight: 0,
});
const Notificationdiv = styled('div')({
  display: 'flex',
  justifyContent: 'end',
});
const SettingTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 20,
});
const CloseIcon = styled('img')({
  width: 15,
  height: 15,
});

const SettingMenuOverLay = styled('div')({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'white',
  zIndex: 2,
  cursor: 'pointer',
  paddingTop: 10,
});
const ConnectWalletOverLay = styled('div')({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 2,
  cursor: 'pointer',
  paddingTop: 10,
});
const ConnectWalletMain = styled('div')({
  paddingLeft: 10,
  paddingRight: 5,
  paddingTop: '5%',
  paddingBottom: '10%',
  backgroundColor: 'white',
  margin: 5,
  borderRadius: 16,
  position: 'fixed',
  top: '25%',
  width: '93%',
});
const TitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 0,
  marginBottom: 15,
  marginRight: '3%',
});
const ConnectWalletTitle = styled('span')({
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: '600',
  marginLeft: '3%',
});
type ConnectWalletType = {
  name: String;
  image: String;
  Subname: String;
  Price: String;
};
type ConnectNetworkType = {
  name: String;
  image: String;
};
const settingData = [
  { name: 'About' },
  { name: 'Help Center' },
  { name: 'Request Features' },
  { name: 'Language' },
  { name: 'Dark Mode' },
];
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const AppBar = () => {
  const dispatch: AppDispatch = useDispatch();
  const matches = useMediaQuery('(min-width:660px)');
  const CoinDetail: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const SearchState: boolean = useSelector((state: ArticleState) => state.Search);
  const MenuState: string | boolean = useSelector((state: ArticleState) => state.Menu);
  return (
    <>
      {matches ? (
        <>
          <NavMainComponent>
            <NavGrids container>
              <LogoGrid item sm={1}>
                <Imgs src="/logo.png" alt="logo" />
              </LogoGrid>
              <ButtonGrid item sm={CoinDetail?.name === '' && CoinNetwork?.name === '' ? 6.5 : 8}>
                {window?.location?.pathname === '/swap' ? (
                  <SwapButton href="/swap">Swap</SwapButton>
                ) : (
                  <SwapButtonActive href="/swap">Swap</SwapButtonActive>
                )}
                {window?.location?.pathname === '/crosschain' ? (
                  <CrosschainButton href="/crosschain">
                    <Img src="/images/Chain.png" />
                    Crosschain
                    <DownImg src="/images/DownIconWhite.png" />
                  </CrosschainButton>
                ) : (
                  <CrosschainButtonActive href="/crosschain">Crosschain</CrosschainButtonActive>
                )}
                <BuyCrypto />
                {CoinNetwork?.name === '' ? null : (
                  // <SwitchNetwork />
                  <ConnectWalletActive onClick={() => null}>Connect Wallet</ConnectWalletActive>
                )}
                {CoinDetail?.name === '' && CoinNetwork?.name !== '' ? (
                  <WrongNetworkButton>Wrong Network</WrongNetworkButton>
                ) : CoinDetail?.name === '' && CoinNetwork?.name === '' ? (
                  ''
                ) : (
                  <WalletDetails account={null} />
                )}
                <Settings settings={settingData} />
              </ButtonGrid>
            </NavGrids>
          </NavMainComponent>
        </>
      ) : (
        <>
          <SettingMenuOverLay style={{ display: SearchState ? 'block' : 'none' }}>
            <Grid item sm={CoinDetail?.name === '' && CoinNetwork.name === '' ? 6.8 : 4.5}>
              <SettingMain>
                <SettingTitle>Setting</SettingTitle>
                <CloseIcon src="/images/Cros.png" onClick={() => null} />
              </SettingMain>
            </Grid>
          </SettingMenuOverLay>
          {
            <ConnectWalletOverLay style={{ display: MenuState ? 'block' : 'none' }} onClick={() => null}>
              <ConnectWalletMain>
                <TitleView>
                  <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
                  <img src="/images/Cros.png" onClick={() => {}} alt="Image" />
                </TitleView>
                <BuyCrypto />
                <AppFooter />
              </ConnectWalletMain>
            </ConnectWalletOverLay>
          }
        </>
      )}
      <Notificationdiv>
        <Notification />
      </Notificationdiv>
    </>
  );
};

export default AppBar;
