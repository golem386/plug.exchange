import { styled } from '@mui/system';
import { Button } from '@mui/material';
import React, { Component } from 'react';
import { ThemeProps } from 'src/theme';
const BuyCryptoButton = styled(Button)((props: {isActive:boolean; theme: ThemeProps;}) => ({
  background: props.isActive ? props.theme.palette.color.active : props.theme.palette.color.lightText,
  color: props.isActive ? props.theme.palette.color.white : props.theme.palette.color.text,
  height: 52,
  width: '137px',
  border: props.isActive ? 'none' : '1px solid ' + props.theme.palette.color.border,
  '@media (max-width: 660px)': {
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    fontSize: '16px',
    fontWeight: '600',
    fontStyle: 'Inter',
    opacity: '0.65',
    textTransform: 'initial',
    width: '80%',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    marginLeft: '10%',
    marginTop: '5%',
  },
}));

const BuyCrypto = () => {
  return <BuyCryptoButton isActive={false}>Buy Crypto</BuyCryptoButton>;
};

export default BuyCrypto;
