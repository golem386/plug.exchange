// this is a SwapTransactionDetails file and Provide a SwapTransactionDetails list
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailView = styled('div')({
  backgroundColor: '#F7F7F7',
  width: '80%',
  margin: 'auto',
  display: 'block',
  padding: 10,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
});
const DetailView2 = styled('div')({
  backgroundColor: '#F7F7F7',
  width: '95%',
  padding: 10,
  borderRadius:25,
});

const Expected = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
});
const ItemText = styled('span')({
  padding: 10,
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '500',
  color: 'black',
  opacity: 0.65
});
const ItemText2 = styled('span')({
  padding: 10,
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '500',
  color: '#010101',
});

export type SwapTransactionDetailsProps = {
  btnTitle: String;
  expectedOutput: number | null;
  priceImpact: number | null;
  minReceived: number | null;
  maxSent: number | null;
  allowedSlippage: number | null;
};

type ConnectWalletType = {
  name: String | string;
  image: String | string;
  Subname: String | string;
  Price: String | string;
};
type CoinNetworkType = {
  name: String | string;
  image: String | string;
};
const SwapTransactionDetails = (props: SwapTransactionDetailsProps) => {
  const ConnectWallet: ConnectWalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: CoinNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const matches = useMediaQuery('(min-width:660px)');
  return props.btnTitle === 'Connect Wallet' ? (
    ConnectWallet.name !== '' && CoinNetwork.name !== '' ? matches ?
      <DetailView>
        <Expected>
          <ItemText>Expected Output</ItemText>
          <ItemText2>1.46 USDT</ItemText2>
        </Expected>
        <Expected>
          <ItemText>Price Impact</ItemText>
          <ItemText2>-0.01%</ItemText2>
        </Expected>
        <hr />
        <Expected>
          <ItemText>Minimum received after</ItemText>
          <ItemText2>1.46</ItemText2>
        </Expected>
        <Expected>
          <ItemText>slippage (0.50%)</ItemText>
          <ItemText2>USDT</ItemText2>
        </Expected>
      </DetailView> : <DetailView2>
        <Expected>
          <ItemText>Expected Output</ItemText>
          <ItemText2>1.46 USDT</ItemText2>
        </Expected>
        <Expected>
          <ItemText>Price Impact</ItemText>
          <ItemText2>-0.01%</ItemText2>
        </Expected>
        <hr />
        <Expected>
          <ItemText>Minimum received after</ItemText>
          <ItemText2>1.46</ItemText2>
        </Expected>
        <Expected>
          <ItemText>slippage (0.50%)</ItemText>
          <ItemText2>USDT</ItemText2>
        </Expected>
      </DetailView2>
      : null
  ) : null;
};

export default SwapTransactionDetails;
