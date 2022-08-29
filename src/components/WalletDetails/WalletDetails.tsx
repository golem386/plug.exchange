import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
//import { connetNetwork, connetWallet } from '../../store/Actions';
import { useSelector } from 'react-redux';
import UserAssets from './UserAssets';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import SwapTransactionHistory from '../SwapTransactionHistory';

const Copy = styled('div')({
  paddingLeft: '10px',
  alignItems: 'center',
  display: 'flex',
  opacity: '0.65',
  cursor: 'copy',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const Id = styled('p')({
  fontSize: '16px',
  fontWeight: '600',
});
const Copied = styled('p')((props:any) =>({
  fontSize: '16px',
  fontWeight: '600',
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
}));

const DropPrice = styled('span')({
  fontSize: '14px',
  fontWeight: '500',
  color: '#d4d4d4',
  marginLeft: 10,
});
const FileCopy = styled('img')({
  height: '20px',
  width: '20px',
  paddingRight: '10px',
  cursor: 'pointer',
});
const RightIcon = styled('img')({
  height: '10px',
  width: '15px',
  paddingRight: '10px',
  cursor: 'pointer',
});

const HistoryDiv = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingLeft: 15,
  paddingTop: 10,
  paddingBottom: 10,
  borderBottomLeftRadius: 16,
  borderBottomRightRadius: 16,
});
const HistoryTitle = styled('span')({
  fontSize: '16px',
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
const CoinPrice = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#fafafa',
  padding: '0px 10px',
  fontSize: '16px',
  fontWeight: '600',
  color: 'black',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginRight: '3%',
  borderRadius: 16,
  border: 'none',
  height: 52,
  width: '100%',
  cursor:'pointer',
  '@media (max-width: 660px)': {
    background: '#f7f7f7',
    height: 36,
    width: 130,
    padding: '0px 10px',
    border: 'none',
    borderRadius: '100px',

    fontWeight: '500',
    fontSize: '16px',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textTransform: 'initial',
  },
});
const Into = styled('p')({
  backgroundColor: 'white',
  padding: '7px 20px',
  borderRadius: 16,
  marginLeft: 15,
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  fontWeight: 600,
  fontSize: 16,
  marginBottom: '6%',
  color: '#565656',
});
const ImageIconDropDown = styled('img')({
  height: '30px',
  width: '30px',
  paddingRight: '20px',
  '@media (max-width: 660px)': {
    height: '20px',
    width: '20px',
    marginRight: '0px',
  },
});
const CustomMenu = styled('div')({
  position: 'absolute',
  top: '10%',
  left: '70%',
  borderRadius: 20,
  backgroundColor: 'white',
  boxShadow: '0px 3px 14px 0px #9c9c9c',
  width: '300px',
  paddingTop: 20,
  '@media (max-width: 660px)': {
    position: 'fixed',
    top: '15%',
    left: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    width: '95%',
    padding: 5,
    paddingTop: 20,
  },
});
const OverLay = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  zIndex: 2,
  cursor: 'pointer',
  '@media (max-width: 660px)': {
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
  },
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const Name = styled('p')({
  fontWeight: 600,
  fontSize: 16,
  color: '#565656',
});
type DataObject = {
  name: String;
  coin: String;
};
type WalletDetailsProps = {
  account: string | null;
};
const nullObj = {
  name: '',
  coin: '',
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const WalletDetails = (props: WalletDetailsProps) => {
  const isMobile = useMediaQuery('(min-width:660px)');
  const [open, setOpen] = React.useState(false);
  const [CopyId, setCopy] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch: AppDispatch = useDispatch();
  const [anchorElPrice, setAnchorElPrice] = React.useState<null | HTMLElement>(null);
  const CoinDetail: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const openmenuPrice = Boolean(anchorElPrice);
  const [WalletData, setWallet] = React.useState<DataObject>(nullObj);
  const [Check, setCheck] = React.useState<Boolean>(false);
  const [NetworkData, setNetwork] = React.useState<DataObject>(nullObj);
  const handleClickPrice = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPrice(event.currentTarget);
  };
  const handleClosemenuPrice = () => {
    setAnchorElPrice(null);
  };
  const connetWalletData = (coin: any) => {
    dispatch(null);
  };
  const connetNetworkData = (coin: any) => {
    dispatch(null);
  };
  const DisConnectWallet = () => {
    handleClosemenuPrice();
    setCheck(false);
    setWallet(nullObj);
    setNetwork(nullObj);
    connetWalletData(nullObj);
    connetNetworkData(nullObj);
  };
  return (
    <div>
      <CoinPrice onClick={handleClickPrice}>
        <ImageIconDropDown src={CoinDetail?.coin} alt="Coin" />
        <Name>{CoinDetail?.Subname}</Name>
        {isMobile ? (
          <>
            <Into>{CoinDetail?.Price}</Into>
            <CoinDropIcon src="/images/downArrow.png" alt="DownArrow" />
          </>
        ) : null}
      </CoinPrice>
      <OverLay style={{ display: openmenuPrice ? 'block' : 'none' }} onClick={handleClosemenuPrice}>
        <CustomMenu>
          <DropPrice>Connected with MetaMask</DropPrice>
          {!CopyId ? (
            <Copy
              onClick={() => {
                setCopy(true);
              }}
            >
              <FileCopy src="/images/filecopy.png" alt="Copy" />
              <Id>0x37...0420</Id>
            </Copy>
          ) : (
            <Copy
              onClick={() => {
                setCopy(true);
              }}
            >
              <RightIcon src="/images/right.png" alt="Copy" />
              <Copied>Copied!</Copied>
            </Copy>
          )}
          <UserAssets account="" />
          <HistoryDiv>
            <MainDiv
              onClick={() => {
                handleOpen();
              }}
            >
              <img src="/images/history.png" alt="History" />
              <HistoryTitle>History</HistoryTitle>
            </MainDiv>
            <MainDiv
              onClick={() => {
                DisConnectWallet();
              }}
            >
              <img src="/images/disConnect.png" alt="Disconnect" />
              <HistoryTitle>{CoinNetwork?.name !== '' ? 'Disconnect' : 'Connected'}</HistoryTitle>
            </MainDiv>
          </HistoryDiv>
          <SwapTransactionHistory
            close={() => {
              handleClose();
            }}
            isOpen={open}
          />
        </CustomMenu>
      </OverLay>
    </div>
  );
};

export default WalletDetails;
