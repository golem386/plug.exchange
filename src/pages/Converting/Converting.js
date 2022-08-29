import { Slider } from '@mui/material';
import { Box } from '@mui/system';
import React, { Component } from 'react';
import styled from 'styled-components';

const Warning = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const Text = styled('p')({
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: '600',
  color: '#FF0000',
  marginLeft: 10,
});
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

const Current = styled('p')({
  fontFamily: 'Inter',
  fontSize: '14px',
  fontWeight: '500',
  opacity: 0.5,
});

const Card = styled('div')({
  width: 320,
  height: 320,
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: 24,
  padding: 20,
});

const CardCenter = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
});

const Div = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const Coin = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const CoinTitle = styled('p')({
  marginLeft: 10,
});
const PinkRound = styled('p')({
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  height: 36,
  width: 36,
  borderRadius: '100px',
  marginLeft: 10,
});
const PinkLoder = styled('p')({
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  height: 36,
  width: 36,
  borderRadius: '100px',
  marginRight: 35,
  marginBottom: 5,
});
const LoderDiv = styled('p')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const Loder = styled('div')({
  marginTop: '15%',
});
const Pr = styled('p')({
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '24px',
  fontFamily: 'Inter',
});
const Discription = styled('p')({
  textAlign: 'center',
  fontWeight: '500',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.65)',
});

const SliderUi = styled(Slider)({
  color: '#BB36FF',
  marginLeft: '5%',
  width: '90%',
});
const Confirmations = styled('p')({
    textAlign:'center'
  });


const Solscan = styled(Slider)((props) =>({
    // background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    color: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    backgroundClip: 'text',
}));


const Converting = (props) => {
  return (
    <>
      <Header>
        <Title>Continue with Wallets</Title>
        <img src="/images/cros.png" onClick={() =>{props.close()}} />
      </Header>
      <Warning>
        <img src="/images/info.png" />
        <Text>Warning</Text>
      </Warning>
      <p>
        When Solana transactions per second (TPS) drop below 2000 due to network congestion, it may cause delays or
        cancellations.
      </p>
      <br />
      <Current>Current TPS: 1470</Current>
      <CardCenter>
        <Card>
          <Div>
            <Coin>
              <img src="/images/coin3.png" />
              <CoinTitle>SOL</CoinTitle>
            </Coin>
            <img src="/images/LeftPink.png" />
            <Coin>
              <img src="/images/coin3.png" />
              <CoinTitle>SOL</CoinTitle>
            </Coin>
          </Div>
          <Loder>
            <LoderDiv>
              <PinkLoder></PinkLoder>
            </LoderDiv>
            <LoderDiv>
              <PinkRound></PinkRound>
              <PinkRound></PinkRound>
              <PinkRound></PinkRound>
              <PinkRound></PinkRound>
            </LoderDiv>
          </Loder>
          <br />
          <br />
          <Confirmations>8/32 Confirmations</Confirmations>
          <SliderUi defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </Card>
      </CardCenter>
      <Pr>43%</Pr>
      <Discription>Please wait while converting SOL to ETH</Discription>
      <Box>
        <SliderUi defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </Box>
    </>
  );
};

export default Converting;
