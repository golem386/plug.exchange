import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React, { Component } from 'react';

const BuyCryptoButton = styled(Button)({
  borderRadius: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  opacity: '0.65',
  textTransform: 'initial',
  height: 52,
  width: '137px',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '@media (max-width: 660px)': {
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    fontSize: '16px',
    fontWeight: '600',
    color: '#000000',
    fontStyle: 'Inter',
    opacity: '0.65',
    textTransform: 'initial',
    height: 52,
    width: '80%',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    marginLeft: '10%',
    marginTop: '5%',
  },
});

const BuyCrypto = () => {
  return <BuyCryptoButton>Buy Crypto</BuyCryptoButton>;
};

export default BuyCrypto;
