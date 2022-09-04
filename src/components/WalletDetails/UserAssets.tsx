// this file is a UserAssets and Provide a List
import { styled } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import { DropDownDataWallet } from '../../contexts/ConnectWalletDATA';

const NetWorth = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingLeft: '10px',
  padding: '5px',
  paddingTop: '5%',
  paddingBottom: '5%',
  marginTop: 5,
});
const NetWorthTitle = styled('p')({
  fontWeight: '600',
  marginLeft: 10,
});
const TotalNetWorth = styled('h2')({
  fontWeight: '600',
  marginLeft: 10,
});
const DropMain = styled('div')({
  width: '260px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  paddingRight: 15,
  paddingTop: 5,
  paddingBottom: 5,
  justifyContent: 'space-between',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
  '@media (max-width: 660px)': {
    width: '94%',
    
  },
});

const Detail = styled('div')({
  alignItems: 'center',
  display: 'flex',
  marginTop: 3,
  marginBottom: 3,
});
const CoinImage = styled('img')({
  height: '30px',
  width: '30px',
  paddingRight: '20px',
});
const DropTitle = styled('p')({
  fontWeight: '600',
});
const DropPrice = styled('p')({
  fontWeight: '600',
  color: '#d4d4d4',
  marginLeft: 10,
});

export type UserAssetsProps = {
  account: String;
};

const UserAssets = (props: UserAssetsProps) => {
  return (
    <>
      <NetWorth>
        <NetWorthTitle>Net Worth</NetWorthTitle>
        <br />
        <br />
        <TotalNetWorth>36.34 USDT</TotalNetWorth>
      </NetWorth>
      {DropDownDataWallet.map((val, i) => {
        return (
          <DropMain>
            <Detail>
              <CoinImage src={val.coin} alt="Icon" />
              <DropTitle>{val.Subname}</DropTitle>
            </Detail>
            <DropPrice>{val.Price}</DropPrice>
          </DropMain>
        );
      })}
    </>
  );
};

export default UserAssets;
