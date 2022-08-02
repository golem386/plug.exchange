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
import SwitchNetwork from '../SwitchNetwork';

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
  const isMobile = useMediaQuery('(min-width:660px)');
  const CoinDetail: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const SearchState: boolean = useSelector((state: ArticleState) => state.Search);
  const MenuState: string | boolean = useSelector((state: ArticleState) => state.Menu);
  return (
    <>
    {/* mobile Navbar  */}
      {isMobile ? null : (
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

      {isMobile ? (
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
                {window?.location?.pathname === '/Crosschain' ? (
                  <CrosschainButton href="/Crosschain">
                    <Img src="/images/chain.png" />
                    Crosschain
                    <DownImg src="/images/downIconWhite.png" />
                  </CrosschainButton>
                ) : (
                  <CrosschainButtonActive href="/Crosschain">Crosschain</CrosschainButtonActive>
                )}
                <BuyCrypto />
                {CoinNetwork?.name !== '' ? null : (
                  
                  <ConnectWalletActive onClick={() => null}>Connect Wallet</ConnectWalletActive>
                )}
                <SwitchNetwork />
                {CoinDetail?.name === '' && CoinNetwork?.name !== '' ? (
                  <WrongNetworkButton>Wrong Network</WrongNetworkButton>
                ) : CoinDetail?.name === '' && CoinNetwork?.name === '' ? (
                  null
                ) : (
                  <WalletDetails account={null} />
                )}
                <Settings settings={settingData} />
              </ButtonGrid>
            </NavGrids>
          </NavMainComponent>
        </>
      ) : (
        // Mobile Main Content
        <>
          <SettingMenuOverLay style={{ display: SearchState ? 'block' : 'none' }}>
            <Grid item sm={CoinDetail?.name === '' && CoinNetwork.name === '' ? 6.8 : 4.5}>
              <SettingMain>
                <SettingTitle>Setting</SettingTitle>
                <CloseIcon src="/images/cros.png" onClick={() => null} />
              </SettingMain>
            </Grid>
          </SettingMenuOverLay>
          {
            <ConnectWalletOverLay style={{ display:'block'}} onClick={() => null}>
              <ConnectWalletMain>
                <TitleView>
                  <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
                  <img src="/images/cros.png" onClick={() => { }} alt="Image" />
                </TitleView>
                <BuyCrypto />
                <AppFooter type="Mobile" />
              </ConnectWalletMain>
            </ConnectWalletOverLay>
          }
        </>
      )}
      {/* for mobile Connect Wallete */}
      {isMobile ? null : null !== '' ? (
        <BtnGroup>
          <SwitchNetwork />
          <WalletDetails account={null} />
        </BtnGroup>
      ) : (
        <BtnGroup>
          <ActiveBtn>Connect Wallet</ActiveBtn>
        </BtnGroup>
      )}
    </>
  );
};

export default AppBar;
