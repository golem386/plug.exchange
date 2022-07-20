import React from 'react';
import { Provider } from 'react-redux';
import { styled } from '@mui/system';
import { store } from './store/Store';
import SwapPage from './pages';
import Modal from './components/Modal';
import WalletModal from './components/WalletModal';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { closeModal, Menu, OpenModal, Search } from './store/Actions';
import Coin3 from './assets/icon/coin3.png'
import { useMediaQuery } from '@mui/material';
import mMenu from './assets/icon/mMenu.png';
import mlogo from './assets/icon/mlogo.png'
import mSearch from './assets/icon/mSearch.png'
import mSetting from './assets/icon/mSetting.png'
import SwitchNetwork from './components/SwitchNetwork';
import WalletDetails from './components/WalletDetails/WalletDetails';
import Settings from './components/Settings';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';

const MyComponent = styled('div')({
  backgroundColor: '#FFFFFF',
  height: '100%',
  width: '100%',
  overflow: 'auto'
});
const MyComponent2 = styled('div')({
  backgroundColor: '#FFFFFF',
  height: '670px',
  width: '100%',
  overflow: 'auto'
});

const BoxsToken = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingTop: 10,
  width: '585px',
  height: '90%',
  borderRadius: 10,
  overflow: 'hidden',
  '&:hover': {
    overflowY: 'auto',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
const BtnGroup = styled('div')({
  backgroundColor: "transparent",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  width: '100%',
  marginTop: '10%'
});
const ActiveBtn = styled('button')({
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
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
  justifyContent: 'center'
});

const NavBar = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 76,
})

const NavImg = styled('img')({
  height: '36px',
  width: '36px',
  marginLeft: 10,
  marginRight: 10
})
const DivFlex = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

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
function App() {
  const matches = useMediaQuery('(min-width:660px)');
  const ModalData: any = useSelector((state: ArticleState) => state.Modal);
  const dispatch: AppDispatch = useDispatch();
  const CoinDetail: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  console.log('CoinDetail', CoinDetail)
  console.log('CoinNetwork', CoinNetwork)
  return (
    <>
      {
        matches ? null : <NavBar>
          <div>
            <NavImg src={mMenu} onClick={() => { dispatch(Menu(true)) }} />
            <NavImg src={mlogo} />
          </div>
          <DivFlex>
            <NavImg src={mSearch} onClick={() => { dispatch(Search(true)) }} />
            <Settings settings={settingData} />
          </DivFlex>
        </NavBar>
      }
      {
        matches ? <MyComponent>
          <SwapPage />
          <Modal
            isOpen={ModalData}
            modalTitle="WalletModal"
            close={() => {
              dispatch(closeModal())
            }}
          >
            <BoxsToken>
              <WalletModal
                Check={ModalData}
                onClose={() => {
                  dispatch(closeModal())
                }}
              />
            </BoxsToken>
          </Modal>
        </MyComponent> : <MyComponent2>
          <SwapPage />
          <Modal
            isOpen={ModalData}
            modalTitle="WalletModal"
            close={() => {
              dispatch(closeModal())
            }}
          >
            <BoxsToken>
              <WalletModal
                Check={ModalData}
                onClose={() => {
                  dispatch(closeModal())
                }}
              />
            </BoxsToken>
          </Modal>
        </MyComponent2>
      }

      {
        matches ? null : CoinDetail.name !== "" ? <BtnGroup>
          {/* <ActiveBtn><Img src={CoinDetail.coin} />{CoinDetail.name !== "" ? CoinDetail.name : ''}</ActiveBtn> */}
          <SwitchNetwork />
          <WalletDetails />
        </BtnGroup> : <BtnGroup>
          <ActiveBtn onClick={() => {
            dispatch(OpenModal())
          }}>Connect Wallet</ActiveBtn>
        </BtnGroup>
      }
    </>
  );
}

export default App;
