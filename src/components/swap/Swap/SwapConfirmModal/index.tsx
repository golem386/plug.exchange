// this is a SwapConfirmmpdel File and Provide a SwapConfirmation Model
import styled from '@emotion/styled';
import React, { Component } from 'react';
import Cros from '../../../../assets/icon/Cros.png';
import DownArrow from '../../../../assets/icon/DownArrow.png';
import { FormControl } from '@mui/material';
import ShortVartical from '../../../../assets/icon/ShortVartical.png';
import { useSelector } from 'react-redux';
import { onModelOpen, onReceiveCoin, onSelectCoin } from '../../../../store/Actions';
import { useDispatch } from 'react-redux';
import UpDown from '../../../../assets/icon/UpDown.png';

const MainDiv = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: 15,
  marginRight: 15,
});
const Image = styled('img')({
  height: 15,
  width: 15,
});
const Title = styled('p')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 24,
});
const ETH = styled('span')({
  color: '#BB36FF',
});
const ImgVarticalShort = styled('img')({
  height: '15px',
  width: '15px',
  marginLeft: 10,
  cursor: 'pointer',
});
const ShortView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
  marginTop: 15,
});
const DIv = styled('div')({
  backgroundColor: '#F7F7F7',
  borderRadius: 24,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 15,
  marginBottom: 15,
  padding: 10,
});
const Main = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 3,
  marginBottom: 3,
});
const Text = styled('span')({
  color: '#b0b0b0',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 500,
});
const Price = styled('span')({
  color: 'black',
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 500,
});
const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
  cursor: 'pointer',
  paddingTop: 15,
});
const Pay = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: 'black',
  fontFamily: 'Inter',
});
const Max = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: '#BB36FF',
  fontFamily: 'Inter',
});
const CurrencyInput = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#e8e8e8',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 16,
  paddingLeft: 10,
  height: 70,
  marginTop: 10,
});
const SelectMain = styled('div')({
  borderRadius: '100px',
  height: '36px',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
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

const CurrencyOutput = styled('div')({
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
const SwapArrow = styled('img')({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 100,
  boxShadow: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.1))',
  position: 'absolute',
  top: -20,
  left: '40%',
  cursor: 'pointer',
});
type Currency = {};
type ENUM = {};
type SWAP = {};
type ERROR = {};
type WAITING = {};
type COMPLETED = {};
export type SwapConfirmModalProps = {
  handleClose: any;
  //   inputToken: Currency;
  //   outputToken: Currency;
  //   swapAmount: number;
  //   expectedOutput: number;
  //   minReceived: number;
  //   allowedSlippage: number;
  //   gasEstimateInUSD: number;
  //   priceImpact: number;
  //   swapHandler: () => void;
  //   swapTXStatus: ENUM | SWAP | ERROR | WAITING | COMPLETED;
};

const SwapConfirmModal = (props: SwapConfirmModalProps) => {
  const dispatch: any = useDispatch();
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);
  const ReceiveCoin: any = useSelector((state: ArticleState) => state.receiveCoinDetail);
  const onModel = (article: any) => {
    dispatch(onModelOpen(article));
  };
  const onSelectIcon = (coin: any) => {
    dispatch(onSelectCoin(coin));
  };
  const onReceiveIcon = (coin: any) => {
    dispatch(onReceiveCoin(coin));
  };
  const onChangeToken = () => {
    onSelectIcon(ReceiveCoin);
    onReceiveIcon(CoinDetail);
  };
  return (
    <>
      <MainDiv>
        <Title>Swap Confirmation</Title>
        <Image src={Cros} onClick={props.handleClose} />
      </MainDiv>
      <SwapDiv>
        <Pay>You Pay</Pay>
        <Max>Max 0 ETH</Max>
      </SwapDiv>
      <CurrencyInput>
        <TextInput placeholder="0" />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectMain
            onClick={() => {
              onModel('SelectToken');
            }}
          >
            <CoinImgTag src={CoinDetail.image} alt="Coin" />
            <CoinTitle>{CoinDetail.name}</CoinTitle>
            <CoinDropIcon src={DownArrow} alt="DownArrow" />
          </SelectMain>
        </FormControl>
      </CurrencyInput>
      <CurrencyOutput>
        <SwapArrow
          src={UpDown}
          onClick={() => {
            onChangeToken();
          }}
          alt="Icon"
        />
        <YouReceive>You Receive</YouReceive>
        <MainViewInput>
          <TextInput placeholder="0" />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <SelectMainDarkCoin
              onClick={() => {
                onModel('ReceiveToken');
              }}
            >
              <CoinImgTag src={ReceiveCoin.image} alt="Icon" />
              <CoinTitle>{ReceiveCoin.name}</CoinTitle>
              <CoinDropIcon src={DownArrow} alt="DownArrow" />
            </SelectMainDarkCoin>
          </FormControl>
        </MainViewInput>
      </CurrencyOutput>
      <ShortView>
        <ETH>1 ETH = 4,008.2766 USDT</ETH>
        <ImgVarticalShort src={ShortVartical} />
      </ShortView>
      <DIv>
        <Main>
          <Text>Expected Output</Text>
          <Price>1.46 USDT</Price>
        </Main>
        <Main>
          <Text>Price Impact</Text>
          <Price>-0.01%</Price>
        </Main>
        <Main>
          <Text>Minimum Received</Text>
          <Price>1.45 USDT</Price>
        </Main>
        <Main>
          <Text>Gas Price</Text>
          <Price>76.34 - 134.45 GWEI</Price>
        </Main>
        <Main>
          <Text>Slippage Tolerance</Text>
          <Price>1%</Price>
        </Main>
        <Main>
          <Text>Transaction Cost</Text>
          <Price>~$0.02</Price>
        </Main>
      </DIv>
    </>
  );
};

export default SwapConfirmModal;
