import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, FormControlLabel, Grid, Menu, MenuItem, Modal, Radio, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import Logo from '../../assets/logo.png';
import setting from '../../assets/icon/setting.png';
import Serch from '../../assets/icon/Serch.png';
import select from '../../assets/icon/select.png';
import Cros from '../../assets/icon/Cros.png';
import DownAero from '../../assets/icon/DownAero.png';
import DownIconWhite from '../../assets/icon/DownIconWhite.png';
import Coin from '../../assets/icon/coin.png';
import filecopy from '../../assets/icon/filecopy.png';
import History from '../../assets/icon/History.png';
import DishConnect from '../../assets/icon/DishConnect.png';
import {
  ConnectNewworkOne,
  ConnectNewworkTow,
  ConnectWalletOne,
  ConnectWalletThree,
  ConnectWalletTow,
  DropDownData,
  DropDownDataWallet,
} from '../../contexts/ConnectWalletDATA';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { connetNetwork, connetWallet } from '../../redux/actionCreators';
import ChooseNetworkModel from '../ChooseNetworkModel/ChooseNetworkModel';
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

const useStyles: any = makeStyles(() => ({
  textField: {
    width: '100%',
    outline: 'none',
    borderBottomWidth: 0,
  },
  input: {
    color: '#000000',
    backgroundColor: '#F7F7F7',
    height: '45px',
    border: 'none',
    borderBottomWidth: 0,
    fontSize: 18,
    paddingLeft: '2%',
  },
}));

const CostomButton = styled(Button)({
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

const CostomButtonActive = styled(Button)({
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
const CostomButtonActiveCoin = styled(Button)({
  borderRadius: 20,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '0px 15px',
  fontSize: '16px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
});

const SettingButton = styled(Button)({
  borderRadius: 100,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  height: 60,
});
const NotResult = styled('p')({
  padding: 30,
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const Imgs = styled('img')({
  marginTop: '15%',
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 4,
  paddingTop: 1,
  height: '90%',
  borderRadius: 2,
  overFlow: 'auto',
};
const styleError = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 4,
  paddingTop: 1,
  height: '30%',
  borderRadius: 2,
  overFlow: 'auto',
};
const ModalCostom = styled(Modal)({
  border: 'none',
  borderRadius: 20,
});
const Title = styled('p')({
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: '600',
});
const ViewMainView = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const ViewMain = styled('div')({
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: 15,
  paddingRight: 15,
});
const ViewMainActive = styled('div')({
  position: 'relative',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: 15,
  paddingRight: 15,
  borderColor: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
});
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
});
const TitleIcon = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
});
const DropDownTitleIcon = styled('span')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '500',
});
const TitleControl = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '2%',
});
const Condition = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
});
const ConditionPink = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  color: '#BB36FF',
  marginRight: 5,
  marginLeft: 5,
});
const ConnectButton = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
});
const ConnectButtonDisebal = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
  opacity: 0.3,
});
const SelectImg = styled('img')({
  position: 'absolute',
  left: '36%',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15,
});
const TitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const CoinPrice = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fafafa',
  padding: '0px 20px',
  fontSize: '16px',
  fontWeight: '600',
  color: 'black',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  borderRadius: 16,
  height: 60,
});
const Into = styled('p')({
  backgroundColor: 'white',
  padding: '10px 20px',
  borderRadius: 16,
  marginLeft: 15,
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const CostomGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
  // alignItems: 'center',
});
const CostomMenu = styled(Menu)({
  marginTop: '5%',
});
const CostomMenuItem = styled(MenuItem)({
  paddingTop: 3,
  paddingBottom: 3,
  paddingRight: '30px',
});
const ImageIconDropDown = styled('img')({
  height: '30px',
  width: '30px',
  paddingRight: '20px',
});
const DropMain = styled('div')({
  // padding: '5px',
  width: '260px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  paddingRight: 15,
  justifyContent: 'space-between',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const DIV = styled('div')({
  alignItems: 'center',
  display: 'flex',
  marginTop: 3,
  marginBottom: 3,
});
const Connected = styled('p')({
  paddingLeft: '10px',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const Copy = styled('div')({
  paddingLeft: '10px',
  alignItems: 'center',
  display: 'flex',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const NetWorth = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingLeft: '10px',
  padding: '5px',
});
const NetWorthTitle = styled('span')({
  fontSize: '14px',
  fontFamily: 'Inter',
  fontWeight: '600',
  marginLeft: 10,
});
const H1 = styled('span')({
  fontSize: '24px',
  fontFamily: 'Inter',
  fontWeight: '600',
  marginLeft: 10,
});
const DropTitle = styled('span')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: '600',
});
const DropPrice = styled('span')({
  fontSize: '14px',
  fontFamily: 'Inter',
  fontWeight: '600',
  color: '#d4d4d4',
  marginLeft: 10,
});
const FileCopy = styled('img')({
  height: '20px',
  width: '20px',
  paddingRight: '10px',
  cursor: 'pointer',
});
const HistoryDiv = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingLeft: 15,
});
const HistoryTitle = styled('span')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: '600',
  color: 'black',
  marginLeft: 10,
  marginBottom: 10,
  marginTop: 10,
});
const MainDiv = styled('div')({
  alignItems: 'center',
  display: 'flex',
  cursor: 'pointer',
});
const Span = styled('span')({
  fontFamily: 'inter',
  fontWeight: 600,
  fontSize: 16,
  color: 'black',
});
const Warning = styled('span')({
  fontFamily: 'inter',
  fontWeight: 600,
  fontSize: 16,
  color: 'red',
});
const ControlGrids = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-between',
});

type DataObject = {
  name: String;
  coin: String;
};
const Navbar = () => {
  const classes = useStyles();
  const dispatch: any = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [ErrorStatus, setErrorStatus] = React.useState(false);
  const [Check, satCheck] = React.useState<Boolean>(false);
  const [filterInput, setFilterInput] = React.useState<String>('');
  const [WalletData, setWallet] = React.useState<DataObject>({
    name: '',
    coin: '',
  });
  const [NetworkData, setNetwork] = React.useState<DataObject>({
    name: '',
    coin: '',
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElPrice, setAnchorElPrice] = React.useState<null | HTMLElement>(null);
  const openmenu = Boolean(anchorEl);
  const openmenuPrice = Boolean(anchorElPrice);
  const CoinDetail: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };

  const handleClickPrice = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPrice(event.currentTarget);
  };
  const handleClosemenuPrice = () => {
    setAnchorElPrice(null);
  };
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

  const DishConnectWallet = () => {
    handleClosemenuPrice();
    satCheck(false);
    setWallet({
      name: '',
      coin: '',
    });
    setNetwork({
      name: '',
      coin: '',
    });
    connetWalletData({
      name: '',
      coin: '',
    });
    connetNetworkData({
      name: '',
      coin: '',
    });
  };

  const SelectData = () =>{
    Network();
    handleClose();
  }
  return (
    <>
      <MainComponent>
        <ControlGrids container spacing={4}>
          <Grid item sm={1}>
            <Imgs src={Logo} height="43px" width="90px" />
          </Grid>
          <Grid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 7 : 4}>
            <InputIcon>
              <img src={Serch} />
              <TextInputActive
                placeholder="Search by Token Name or Address"
                onChange={(e) => {
                  setFilterInput(e.target.value);
                }}
              />
            </InputIcon>
            {filterInput !== '' ? <NotResult>No results found</NotResult> : null}
          </Grid>
          <CostomGrid item sm={CoinDetail.name === '' && CoinNetwork.name === '' ? 4 : 7}>
            <CostomButton>Buy Crypto</CostomButton>
            {CoinNetwork.name !== '' ? (
              <div>
                <CostomButtonActiveCoin
                  id="demo-positioned-button"
                  aria-controls={openmenu ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openmenu ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <ImageIcon src={CoinNetwork.coin} />
                  <TitleIcon>{CoinNetwork.name}</TitleIcon>
                  <CoinDropIcon src={DownIconWhite} />
                </CostomButtonActiveCoin>
                <CostomMenu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={openmenu}
                  onClose={handleClosemenu}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  {DropDownData.map((val, i) => {
                    return (
                      <CostomMenuItem
                        onClick={() => {
                          connetNetworkData(val);
                        }}
                      >
                        <ImageIconDropDown src={val.coin} />
                        <DropDownTitleIcon>{val.name}</DropDownTitleIcon>
                      </CostomMenuItem>
                    );
                  })}
                </CostomMenu>
              </div>
            ) : (
              <CostomButtonActive
                onClick={() => {
                  handleOpen();
                }}
              >
                Connect Wallet
              </CostomButtonActive>
            )}
            {CoinDetail.name === '' && CoinNetwork.name === '' ? (
              ''
            ) : (
              <div>
                <CoinPrice
                  id="demo-positioned-button2"
                  aria-controls={openmenuPrice ? 'demo-positioned-menu2' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openmenuPrice ? 'true' : undefined}
                  onClick={handleClickPrice}
                >
                  <ImageIconDropDown src={CoinDetail.coin} />
                  <p>{CoinDetail.Subname}</p>
                  <Into>{CoinDetail.Price}</Into>
                  <CoinDropIcon src={DownAero} />
                </CoinPrice>
                <CostomMenu
                  id="demo-positioned-menu2"
                  aria-labelledby="demo-positioned-button2"
                  anchorEl={anchorElPrice}
                  open={openmenuPrice}
                  onClose={handleClosemenuPrice}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <DropPrice>Connected with MetaMask</DropPrice>
                  <Copy>
                    <FileCopy src={filecopy} />
                    <p>0x37...0420</p>
                  </Copy>
                  <NetWorth>
                    <NetWorthTitle>Net Worth</NetWorthTitle>
                    <br />
                    <br />
                    <H1>36.34 USDT</H1>
                  </NetWorth>
                  {DropDownDataWallet.map((val, i) => {
                    return (
                      <DropMain
                        onClick={() => {
                          connetWalletData(val);
                        }}
                      >
                        <DIV>
                          <ImageIconDropDown src={val.coin} />
                          <DropTitle>{val.Subname}</DropTitle>
                        </DIV>
                        <DropPrice>{val.Price}</DropPrice>
                      </DropMain>
                    );
                  })}
                  <HistoryDiv>
                    <MainDiv>
                      <img src={History} />
                      <HistoryTitle>History</HistoryTitle>
                    </MainDiv>
                    <MainDiv
                      onClick={() => {
                        DishConnectWallet();
                      }}
                    >
                      <img src={DishConnect} />
                      <HistoryTitle>{CoinNetwork.name !== '' ? 'Disconnect' : 'Connected'}</HistoryTitle>
                    </MainDiv>
                  </HistoryDiv>
                </CostomMenu>
              </div>
            )}
            <SettingButton>
              <img src={setting} />
            </SettingButton>
          </CostomGrid>
        </ControlGrids>
      </MainComponent>
      <ChooseNetworkModel
        satCheck={() => {
          satCheck(!Check);
        }}
        SelectData={() =>{SelectData()}}
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

export default Navbar;
