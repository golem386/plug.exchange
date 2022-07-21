// this file is a appbar and Create appBar Design

import { Button, Grid, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Logo from '../../assets/logo.png';
import SearchIconImg from '../../assets/icon/Search.png';
import Cros from '../../assets/icon/Cros.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { connetNetwork, connetWallet, Menu, OpenModal, Search } from '../../store/Actions';
import WalletDetails from '../WalletDetails/WalletDetails';
import SwitchNetwork from '../SwitchNetwork';
import Settings from '../Settings';
import CurrencySearch from '../CurrencySearch';
import Modal from '../Modal';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Notification from '../swap/Swap/SwapConfirmModal/Notification';
import discord from '../../assets/icon/discord.png';
import social from '../../assets/icon/social.png';
import teligram from '../../assets/icon/teligram.png';
import twiter from '../../assets/icon/twiter.png';
import Chain from '../../assets/icon/Chain.png'
import DownIconWhite from '../../assets/icon/DownIconWhite.png'
import { useNavigate } from 'react-router-dom';

const MainComponent = styled('div')({
  display: 'flex',
  paddingLeft: 10,
  alignItems: 'center',
  justifyContent: 'space-around',
});
const InputIcon = styled('div')({
  width: '93%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F7F7F7',
  borderRadius: '16px',
  paddingLeft: '2%',
  height: 52,
  marginLeft: 5
});

const TextInputActive = styled('input')({
  width: '100%',
  display: 'flex',
  backgroundColor: '#F7F7F7',
  borderRadius: '16px',
  borderBottom: 0,
  border: 'none',
  height: 52,
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});

const CustomButton = styled(Button)({
  borderRadius: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  height: 52,
  width: "137px",
  border: '1px solid rgba(0, 0, 0, 0.1)'
});
const CustomButton2 = styled(Button)({
  borderRadius: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  height: 52,
  width: "137px",
  border: '1px solid rgba(0, 0, 0, 0.1)'
});
const CustomButton4 = styled(Button)({
  borderRadius: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  height: 52,
  width: "92px",
  border: '1px solid rgba(0, 0, 0, 0.1)'
});
const SwapCustomButton = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: 'white',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: "92px",
  border: 'none'
});
const CustomButton3 = styled(Button)({
  borderRadius: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  height: 52,
  width: "80%",
  border: '1px solid rgba(0, 0, 0, 0.1)',
  marginLeft: '10%',
  marginTop: '5%'
});

const CustomButtonActive = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: "169px",
});
const CustomButtonActive1 = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  height: 52,
  width: "191px",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
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

const CustomButtonActiveCoin = styled(Button)({
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
  width: "38%",
  '&:hover': {
    backgroundColor: 'red',
  },
});
const CustomGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-evenly',
  // alignItems: 'center',
});
const Img = styled('img')({
  height: '36px',
  width: '36px'
});

const DivFlex = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: 15,
  marginLeft: 15
});

const ControlGrids = styled(Grid)({
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
const SearchIcon = styled('img')({
  opacity: 0.5,
  marginLeft: 5,
  marginRight: 5,
  height: 18,
  width: 18
});
const Title = styled('p')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 20
});
const CrosImg = styled('img')({
  width: 15,
  height: 15
});

const OverLay = styled('div')({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'white',
  zIndex: 2,
  cursor: "pointer",
  paddingTop: 10
});
const OverLay2 = styled('div')({
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 2,
  cursor: "pointer",
  paddingTop: 10
});
const MainComponent2 = styled('div')({
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
const CustomButtom = styled(Button)({
  borderRadius: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  '&:hover': {
    borderRadius: 100,
    margin: 10,
    background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    padding: '20px 0px',
    color: '#000000',
    opacity: '1',
  }
});
const NameButton = styled('button')({
  backgroundColor: 'transparent',
  padding: '5px 5px',
  color: 'black',
  opacity: '0.65',
  border: 'none',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600'
});
const Div = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: '7%'
});
const Div2 = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});
const TitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 0,
  marginBottom: 15,
  marginRight: '3%',
});
const Title2 = styled('span')({
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: '600',
  marginLeft: '3%'
});
type DataObject = {
  name: String;
  coin: String;
};
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
const nullObj = {
  name: '',
  coin: '',
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
  const Navigate = useNavigate()
  const [filterInput, setFilterInput] = React.useState<String>('');
  const CoinDetail: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const SearchState: any = useSelector((state: ArticleState) => state.Search);
  const MenuState: any = useSelector((state: ArticleState) => state.Menu);
  return (
    <>
      {
        matches ? <>
          <MainComponent>
            <ControlGrids container>
              <LogoGrid item sm={1}>
                <Imgs src={Logo} alt="logo" />
              </LogoGrid>
              {/* <Grid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 6.8 : 4.5}> */}
              {/* <InputIcon>
                  <SearchIcon src={SearchIconImg} alt="Search" />
                  <TextInputActive
                    placeholder="Search by Token Name or Address"
                    onChange={(e) => {
                      setFilterInput(e.target.value);
                    }}
                  />
                </InputIcon> */}
              {/* {filterInput !== '' ? <CurrencySearch searchValue={null} /> : null} */}
              {/* </Grid> */}
              {/* <CustomGrid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 4.2 : 6.5}> */}
              <CustomGrid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 6.5 : 8}>
                {
                  window.location.pathname === '/' ? <SwapCustomButton onClick={() => { Navigate('/') }}>Swap</SwapCustomButton> : <CustomButton4 onClick={() => { Navigate('/') }}>Swap</CustomButton4>
                }



                {window.location.pathname === '/Crosschain' ? <CustomButtonActive1 onClick={() => { Navigate('/Crosschain') }}>
                  <Img src={Chain} />
                  Crosschain
                  <DownImg src={DownIconWhite} />
                </CustomButtonActive1> : <CustomButton2 onClick={() => { Navigate('/Crosschain') }}>Crosschain</CustomButton2>}
                {CoinNetwork.name !== '' ? <CustomButton2>Buy Crypto</CustomButton2> : <CustomButton>Buy Crypto</CustomButton>}
                {CoinNetwork.name !== '' ? (
                  null
                  // <SwitchNetwork />
                ) : (
                  <CustomButtonActive
                    onClick={() => {
                      dispatch(OpenModal())
                    }}
                  >
                    Connect Wallet
                  </CustomButtonActive>
                )}
                {CoinDetail.name === '' && CoinNetwork.name !== '' ? (
                  <CustomButtonActiveCoin>Wrong Network</CustomButtonActiveCoin>
                ) : CoinDetail.name === '' && CoinNetwork.name === '' ? (
                  ''
                ) : (
                  <WalletDetails />
                )}
                <Settings settings={settingData} />
              </CustomGrid>
            </ControlGrids>
          </MainComponent>
        </> : <><OverLay style={{ display: SearchState ? 'block' : 'none' }}>
          <Grid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 6.8 : 4.5}>
            <DivFlex>
              <Title>Setting</Title>
              <CrosImg src={Cros} onClick={() => { dispatch(Search(false)) }} />
            </DivFlex>
            <InputIcon>
              <SearchIcon src={SearchIconImg} alt="Search" />
              <TextInputActive
                placeholder="Search by Token Name or Address"
                onChange={(e) => {
                  setFilterInput(e.target.value);
                }}
              />
            </InputIcon>
            {filterInput !== '' ? <CurrencySearch searchValue={null} /> : null}
          </Grid>
        </OverLay>
          {
            <OverLay2 style={{ display: MenuState ? 'block' : 'none' }} onClick={() => { dispatch(Menu(false)) }}>
              <MainComponent2>
                <TitleView>
                  <Title2>Connect Wallet</Title2>
                  <img
                    src={Cros}
                    onClick={() => {

                    }}
                    alt="Image"
                  />
                </TitleView>
                <CustomButton3>Buy Crypto</CustomButton3>
                <Div>
                  <CustomButtom>
                    <img src={teligram} alt="teligram" />
                  </CustomButtom>
                  <CustomButtom>
                    <img src={social} alt="social" />
                  </CustomButtom>
                  <CustomButtom>
                    <img src={twiter} alt="twiter" />
                  </CustomButtom>
                  <CustomButtom>
                    <img src={discord} alt="discord" />
                  </CustomButtom>
                </Div>
                <Div2>
                  <NameButton>FAQs</NameButton>
                  <NameButton>Docs</NameButton>
                  <NameButton>Careers</NameButton>
                </Div2>
              </MainComponent2>
            </OverLay2>
          }
        </>

      }
      <Notificationdiv>
        <Notification />
      </Notificationdiv>
    </>
  );
};

export default AppBar;
