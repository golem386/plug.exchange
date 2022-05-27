import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';
import React, { Component } from 'react';

const Title = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: 'black',
  textAlign: 'center',
});
const SubTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '16px',
  color: 'black',
  textAlign: 'center',
});
const CircularProgressIcon = styled(CircularProgress)({
  margin: 'auto',
  display: 'block',
  marginTop: 50,
});

const TransactionWaiting = () => {
  return (
    <>
      <CircularProgressIcon color="secondary" />
      <Title>Waiting for Confirmation</Title>
      <SubTitle>Swapping 0.000249 ETH for 1.46 USDT</SubTitle>
      <br />
      <SubTitle>Please confirm this transaction in your wallet.</SubTitle>
    </>
  );
};

export default TransactionWaiting;
