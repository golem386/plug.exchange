import React from 'react';
import { Button, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import WalletDetails from '../WalletDetails/WalletDetails';
import Settings from '../Settings';
import AppFooter from '../AppFooter';
import BuyCrypto from '../BuyCrypto';
import SwitchNetwork from '../SwitchNetwork';

const NavMainComponent = styled('div')({
  display: 'flex',
  paddingLeft: 10,
  alignItems: 'center',
  justifyContent: 'space-around',
});
const NavButton = styled(Button)((props: any) => ({
  background: props.isActive ? props.theme.palette.color.active : props.theme.palette.color.lightText,
  color: props.isActive ? props.theme.palette.color.white : props.theme.palette.color.text,
  height: 52,
  border: props.isActive ? 'none' : '1px solid ' + props.theme.palette.color.border,
}));
const Imgs = styled('img')({
  width: '90px',
  height: 43,
  marginTop: 5,
});
const WrongNetworkButton = styled(Button)({
  background: 'red',
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
const settingData = [
  { name: 'About' },
  { name: 'Help Center' },
  { name: 'Request Features' },
  { name: 'Language' },
  { name: 'Dark Mode' },
];

const AppBar = () => {
  const isMobile = useMediaQuery('(min-width:660px)');

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
              <ButtonGrid item sm={8}>
                <NavButton isActive={window?.location?.pathname === '/swap'} href="/swap">
                  Swap
                </NavButton>
                <NavButton isActive={window?.location?.pathname === '/Crosschain'} href="/Crosschain">
                  {window?.location?.pathname === '/Crosschain' && <Img src="/images/chain.png" />}
                  Crosschain
                </NavButton>
                <BuyCrypto />
                {/* {CoinNetwork?.name !== '' ? null : ( */}
                <NavButton isActive={false} onClick={() => null}>
                  Connect Wallet
                </NavButton>
                {/* )} */}
                <SwitchNetwork />
                {/* {CoinDetail?.name === '' && CoinNetwork?.name !== '' ? (
                  <WrongNetworkButton>Wrong Network</WrongNetworkButton>
                ) : CoinDetail?.name === '' && CoinNetwork?.name === '' ? null : (
                  <WalletDetails account={null} />
                )} */}
                <Settings settings={settingData} />
              </ButtonGrid>
            </NavGrids>
          </NavMainComponent>
        </>
      ) : (
        // Mobile Main Content
        <>
          <SettingMenuOverLay
          // style={{ display: SearchState ? 'block' : 'none' }}
          >
            <Grid
              item
              // sm={CoinDetail?.name === '' && CoinNetwork.name === '' ? 6.8 : 4.5}
            >
              <SettingMain>
                <h4>Setting</h4>
                <CloseIcon src="/images/cros.png" onClick={() => null} />
              </SettingMain>
            </Grid>
          </SettingMenuOverLay>
          {
            <ConnectWalletOverLay
              // style={{ display: MenuState ? 'block' : 'none' }}
              onClick={() => null}
            >
              <ConnectWalletMain>
                <TitleView>
                  <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
                  <img src="/images/cros.png" onClick={() => {}} alt="Image" />
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
          <NavButton isActive={false}>Connect Wallet</NavButton>
        </BtnGroup>
      )}
    </>
  );
};

export default AppBar;
