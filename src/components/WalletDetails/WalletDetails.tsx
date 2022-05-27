import styled from '@emotion/styled';
import { Menu } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { connetNetwork, connetWallet } from '../../redux/Actions';
import filecopy from '../../assets/icon/filecopy.png';
import History from '../../assets/icon/History.png';
import DishConnect from '../../assets/icon/DishConnect.png';
import DownAero from '../../assets/icon/DownAero.png';
import { useSelector } from 'react-redux';
import UserAssets from './UserAssets';

const Copy = styled('div')({
  paddingLeft: '10px',
  alignItems: 'center',
  display: 'flex',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
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
const ImageIconDropDown = styled('img')({
  height: '30px',
  width: '30px',
  paddingRight: '20px',
});
const CostomMenu = styled(Menu)({
  marginTop: '5%',
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
type DataObject = {
  name: String;
  coin: String;
};
const nullObj = {
  name: '',
  coin: '',
};
const WalletDetails = () => {
  const dispatch: any = useDispatch();
  const [anchorElPrice, setAnchorElPrice] = React.useState<null | HTMLElement>(null);
  const CoinDetail: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const openmenuPrice = Boolean(anchorElPrice);
  const [WalletData, setWallet] = React.useState<DataObject>(nullObj);
  const [Check, satCheck] = React.useState<Boolean>(false);
  const [NetworkData, setNetwork] = React.useState<DataObject>(nullObj);
  const handleClickPrice = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElPrice(event.currentTarget);
  };
  const handleClosemenuPrice = () => {
    setAnchorElPrice(null);
  };
  const connetWalletData = (coin: any) => {
    dispatch(connetWallet(coin));
  };
  const connetNetworkData = (coin: any) => {
    dispatch(connetNetwork(coin));
  };
  const DishConnectWallet = () => {
    handleClosemenuPrice();
    satCheck(false);
    setWallet(nullObj);
    setNetwork(nullObj);
    connetWalletData(nullObj);
    connetNetworkData(nullObj);
  };
  return (
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

        <UserAssets
          connetWalletData={(val: any) => {
            connetWalletData(val);
          }}
        />
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
  );
};

export default WalletDetails;
