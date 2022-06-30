// this file is a appbar and Create appBar Design

import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Logo from '../../assets/logo.png';
import Search from '../../assets/icon/Search.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { connetNetwork, connetWallet } from '../../store/Actions';
import WalletDetails from '../WalletDetails/WalletDetails';
import SwitchNetwork from '../SwitchNetwork';
import Settings from '../Settings';
import CurrencySearch from '../CurrencySearch';
import CustomModal from '../Modal';
import WalletModal from '../WalletModal';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Notification from '../swap/Swap/SwapConfirmModal/Notification';

const MainComponent = styled('div')({
  display: 'flex',
  paddingLeft: 10,
  alignItems: 'center',
  justifyContent: 'space-around',
});
const InputIcon = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F7F7F7',
  borderRadius: '16px',
  paddingLeft: '2%',
});

const TextInputActive = styled('input')({
  width: '100%',
  display: 'flex',
  backgroundColor: '#F7F7F7',
  borderRadius: '16px',
  padding: '3px',
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
  padding: '10px 24px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  height: 60,
});

const CustomButtonActive = styled(Button)({
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '10px 24px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  height: 60,
});
const Imgs = styled('img')({
  marginTop: '15%',
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
  '&:hover': {
    backgroundColor: 'red',
  },
});
const CustomGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-evenly',
  // alignItems: 'center',
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
  const [ErrorStatus, setErrorStatus] = React.useState(false);
  const [Check, setCheck] = React.useState<Boolean>(false);
  const [filterInput, setFilterInput] = React.useState<String>('');
  const [WalletData, setWallet] = React.useState<DataObject>(nullObj);
  const [NetworkData, setNetwork] = React.useState<DataObject>(nullObj);
  const [open, setOpen] = React.useState(false);
  const CoinDetail: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const openModal = () => {
    setOpen(true);
  };
  const closeModel = () => {
    setOpen(false);
  };

  const handleOpenError = () => setErrorStatus(true);
  const handleCloseError = () => setErrorStatus(false);

  const connetWalletData = (coin: any) => {
    dispatch(connetWallet(coin));
  };
  const connetNetworkData = (coin: any) => {
    dispatch(connetNetwork(coin));
  };
  const connetWalletFunction = (value: DataObject) => {
    setWallet(value);
  };
  const connetNetworkFunction = (value: DataObject) => {
    setNetwork(value);
  };

  const Network = () => {
    // if (WalletData.name !== '' && NetworkData.name !== '') {
    connetWalletData(WalletData);
    connetNetworkData(NetworkData);
    // }
  };

  const SelectData = () => {
    Network();
    closeModel();
  };
  return (
    <>
      <MainComponent>
        <ControlGrids container spacing={5}>
          <LogoGrid item sm={1}>
            <Imgs src={Logo} height="38px" width="80px" alt="logo" />
          </LogoGrid>
          <Grid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 6 : 4}>
            <InputIcon>
              <img src={Search} alt="Search" />
              <TextInputActive
                placeholder="Search by Token Name or Address"
                onChange={(e) => {
                  setFilterInput(e.target.value);
                }}
              />
            </InputIcon>
            {filterInput !== '' ? <CurrencySearch searchValue={null} /> : null}
          </Grid>
          <CustomGrid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 5 : 7}>
            <CustomButton>Buy Crypto</CustomButton>
            {CoinNetwork.name !== '' ? (
              <SwitchNetwork
                connetNetworkData={(val: any) => {
                  connetNetworkData(val);
                }}
              />
            ) : (
              <CustomButtonActive
                onClick={() => {
                  connetWalletFunction(nullObj);
                  connetNetworkFunction(nullObj);
                  setCheck(false);
                  openModal();
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
      <CustomModal
        children={
          <WalletModal
            setCheck={(val) => {
              setCheck(val);
            }}
            SelectData={() => {
              SelectData();
            }}
            Network={() => {
              Network();
            }}
            Check={Check}
            WalletData={WalletData}
            ErrorStatus={ErrorStatus}
            handleCloseError={() => {
              handleCloseError();
            }}
            handleOpenError={() => {
              handleOpenError();
            }}
            connetNetworkFunction={(val: any) => {
              connetNetworkFunction(val);
            }}
            connetWalletFunction={(val: any) => {
              connetWalletFunction(val);
            }}
            NetworkData={NetworkData}
            onClose={() => {
              closeModel();
            }}
          />
        }
        isOpen={open}
        modalTitle="WalletModal"
        close={() => {
          closeModel();
        }}
      />
      <Notificationdiv>
        <Notification />
      </Notificationdiv>
    </>
  );
};

export default AppBar;
