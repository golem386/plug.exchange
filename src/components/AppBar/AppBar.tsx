
// this file is a appbar and Create appBar Design

import { Button, Grid } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Logo from '../../assets/logo.png';
import Serch from '../../assets/icon/Serch.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { connetNetwork, connetWallet } from '../../redux/Actions';
import ChooseNetworkModel from '../WalletModal/WalletModal';
import { WalletDetails } from '../WalletDetails';
import { SwitchNetwork } from '../SwitchNetwork';
import Settings from '../Settings/Settings';
import { CurrencySearch } from '../CurrencySearch';

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
  padding: '7px',
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

const CustomGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  // alignItems: 'center',
});

const ControlGrids = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
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
const AppBar = () => {
  const dispatch: any = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [ErrorStatus, setErrorStatus] = React.useState(false);
  const [Check, satCheck] = React.useState<Boolean>(false);
  const [filterInput, setFilterInput] = React.useState<String>('');
  const [WalletData, setWallet] = React.useState<DataObject>(nullObj);
  const [NetworkData, setNetwork] = React.useState<DataObject>(nullObj);

  const CoinDetail: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    if (WalletData.name !== '' && NetworkData.name !== '') {
      connetWalletData(WalletData);
      connetNetworkData(NetworkData);
    }
  };

  const SelectData = () => {
    Network();
    handleClose();
  };
  return (
    <>
      <MainComponent>
        <ControlGrids container spacing={4}>
          <Grid item sm={1}>
            <Imgs src={Logo} height="43px" width="90px" alt="logo" />
          </Grid>
          <Grid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 7 : 4}>
            <InputIcon>
              <img src={Serch} alt="Serch" />
              <TextInputActive
                placeholder="Search by Token Name or Address"
                onChange={(e) => {
                  setFilterInput(e.target.value);
                }}
              />
            </InputIcon>
            {filterInput !== '' ? <CurrencySearch /> : null}
          </Grid>
          <CustomGrid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 4 : 7}>
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
                  satCheck(false);
                  handleOpen();
                }}
              >
                Connect Wallet
              </CustomButtonActive>
            )}
            {CoinDetail.name === '' && CoinNetwork.name === '' ? '' : <WalletDetails />}
            <Settings />
          </CustomGrid>
        </ControlGrids>
      </MainComponent>
      <ChooseNetworkModel
        satCheck={() => {
          satCheck(!Check);
        }}
        SelectData={() => {
          SelectData();
        }}
        Network={() => {
          Network();
        }}
        Check={Check}
        WalletData={WalletData.name}
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
        open={open}
        handleClose={() => {
          handleClose();
        }}
        NetworkData={NetworkData.name}
      />
    </>
  );
};

export default AppBar;
