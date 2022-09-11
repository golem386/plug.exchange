import React, { useState } from 'react';
import { Button, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import WalletDetails from '../WalletDetails/WalletDetails';
import Settings from '../Settings';
import AppFooter from '../AppFooter';
import BuyCrypto from '../BuyCrypto';
import SwitchNetwork from '../SwitchNetwork';
import { StyledButton } from '../../theme/GlobalComponent/globalStyleComponent';
import IconGlobalStyleComponent from 'src/theme/GlobalComponent/iconGlobalStyleComponent';;

const NavMainComponent = styled('div')({
  display: 'flex',
  paddingLeft: 10,
  paddingTop: 20,
  alignItems: 'center',
  justifyContent: 'space-around',
});

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
  marginLeft:13
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
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  position:'fixed',
  zIndex:999,
  bottom:0,
  paddingBottom:'10%',
  paddingTop:'10%'
});


const Logo = styled('div')({
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

const AppBar = () => {
  const isMobile = useMediaQuery('(min-width:660px)');
  const [menu , setMenu] = useState(false)
  return (
    <>
      {/* mobile Navbar  */}
      {isMobile ? null : (
        <NavBar>
          <Logo>
            <NavImg src="/images/mlogo.png" />
          </Logo>
          <DivFlex>
            <Settings settings={settingData} />
            <NavImg src="/images/mMenu.png" onClick={() => {setMenu(true)}} />
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
                <StyledButton isActive={window?.location?.pathname === '/swap'} href="/swap">
                  Swap
                </StyledButton>
                {/* <StyledButton isActive={window?.location?.pathname === '/Recovery'} href="/Recovery">
                  {window?.location?.pathname === '/Recovery'}
                  Recovery
                </StyledButton>
                <StyledButton isActive={window?.location?.pathname === '/Referral'} href="/Referral">
                  {window?.location?.pathname === '/Referral'}
                  Referral
                </StyledButton> */}
                <StyledButton isActive={window?.location?.pathname === '/Crosschain'} href="/Crosschain">
                  {window?.location?.pathname === '/Crosschain' && <Img src="/images/chain.png" />}
                  Crosschain
                </StyledButton>
                <BuyCrypto />
                <StyledButton isActive={false} onClick={() => null}>
                  Connect Wallet
                </StyledButton>
                {/* )} */}
                <SwitchNetwork />

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
            style={{ display: menu ? 'none' : 'none' }}
          >
            <Grid
              item
            // sm={CoinDetail?.name === '' && CoinNetwork.name === '' ? 6.8 : 4.5}
            >
              <SettingMain
                style={{ display: menu ? 'none' : 'none' }}
              >
                <h4>Setting</h4>
                <IconGlobalStyleComponent
                  onClick={() => { }}
                  ml={0}
                  mr={0}
                  height={15}
                  width={15}
                  img='/images/cros.png'
                  opecity={1} />
              </SettingMain>
            </Grid>
          </SettingMenuOverLay>
          {
            <ConnectWalletOverLay
              // style={{ display: MenuState ? 'block' : 'none' }}
              style={{ display: menu ? 'block' : 'none' }}
              onClick={() => null}
            >
              <ConnectWalletMain
               style={{ display: menu ? 'block' : 'none' }}
              >
                <TitleView>
                  <ConnectWalletTitle>Connect Wallet</ConnectWalletTitle>
                  <img src="/images/cros.png" onClick={() => { setMenu(false)}} alt="Image" />
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
          <StyledButton isActive={false}>Connect Wallet</StyledButton>
        </BtnGroup>
      )}
    </>
  );
};

export default AppBar;
