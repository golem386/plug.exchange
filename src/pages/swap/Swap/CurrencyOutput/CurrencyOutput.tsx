import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onModelOpen } from '../../../../redux/Actions';
import DownArrow from '../../../../assets/icon/DownArrow.png';
import { SwapArrow } from '../SwapArrow';

const ReceiveMain = styled('div')({
  backgroundColor: '#e8e8e8',
  marginTop: '10%',
  position: 'relative',
  paddingBottom: '10%',
  paddingTop: '10px',
});
const YouReceive = styled('span')({
  padding: 20,
  fontFamily: 'inter',
  fontWeight: '500',
  fontSize: 16,
});
const MainViewInput = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 16,
  paddingLeft: 10,
  height: 70,
  marginTop: 10,
});
const TextInput = styled('input')({
  width: '90%',
  borderBottom: 'none',
  border: 'none',
  height: '52px',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: 'transparent',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const SelectMainDarkCoin = styled('div')({
  borderRadius: '100px',
  height: '36px',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#d9d9d9',
  display: 'flex',
  alignItems: 'center',
});
const CoinImgTag = styled('img')({
  height: '36px',
  width: '36px',
});
const CoinTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  color: 'black',
  marginLeft: 10,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const CurrencyOutput = () => {
  const dispatch: any = useDispatch();
  const ReceiveCoin: any = useSelector((state: ArticleState) => state.receiveCoinDetail);

  const onModel = (article: any) => {
    dispatch(onModelOpen(article));
  };
  return (
    <ReceiveMain>
      <SwapArrow />
      <YouReceive>You Receive</YouReceive>
      <MainViewInput>
        <TextInput placeholder="0" />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectMainDarkCoin
            onClick={() => {
              onModel('ReceiveToken');
            }}
          >
            <CoinImgTag src={ReceiveCoin.image} />
            <CoinTitle>{ReceiveCoin.name}</CoinTitle>
            <CoinDropIcon src={DownArrow} />
          </SelectMainDarkCoin>
        </FormControl>
      </MainViewInput>
    </ReceiveMain>
  );
};

export default CurrencyOutput;
