import { styled } from '@mui/system';
import React, { Component, useState } from 'react';

const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Title = styled('p')({
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: '600',
});

const Wallate = styled('p')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
});

const Coin = styled('div')({
  backgroundColor: '#f7f7f7',
  height: 84,
  borderRadius: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '3%',
  paddingRight: '5%',
});

const CoinName = styled('p')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  opacity: 0.65,
  marginLeft: 10,
});

const From = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const ShareIcon = styled('img')({
  height: 18,
  width: 18,
  opacity: 0.5,
  marginLeft: 10,
});
const CoinImg = styled('img')({
  height: 36,
  width: 36,
  marginLeft: 10,
  borderRadius: 100,
});
const ContinueBtn = styled('button')((props) =>({
  height: 52,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  color: 'white',
  border: 'none',
  width: '100%',
}));

const Close = styled('img')({
  cursor:'pointer'
});

const CopyText = styled('p')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  color: '#BB36FF',
});

const ContinuewithWallets = (props) => {
  const [copy, setCopy] = useState(false);
  const [copyto, setCopyto] = useState(false);
  return (
    <>
      <Header>
        <Title>Continue with Wallets</Title>
        <Close
          src="/images/cros.png"
          onClick={() => {
            props.close();
          }}
        />
      </Header>
      <br />
      <div>
        <Wallate>From Wallet</Wallate>
        <Coin>
          <From>
            <CoinImg src="/images/coin6.png" />
            <CoinName>ETH</CoinName>
          </From>
          <From>
            <img
              src="/images/filecopy.png"
              onClick={() => {
                setCopy(true);
              }}
            />
            <CoinName>{copy ? <CopyText>copy</CopyText> : '0x37...0420'}</CoinName>
            <ShareIcon src="/images/shere.png" />
          </From>
        </Coin>
      </div>
      <br />
      <div>
        <Wallate>To Wallet</Wallate>
        <Coin>
          <From>
            <CoinImg src="/images/coin3.png" />
            <CoinName>ETH</CoinName>
          </From>
          <From>
            <img
              src="/images/filecopy.png"
              onClick={() => {
                setCopyto(true);
              }}
            />
            <CoinName>{copyto ? <CopyText>copy</CopyText> : '0x37...0420'}</CoinName>
            <ShareIcon src="/images/shere.png" />
          </From>
        </Coin>
      </div>
      <br />
      <ContinueBtn>Continue</ContinueBtn>
    </>
  );
};

export default ContinuewithWallets;
