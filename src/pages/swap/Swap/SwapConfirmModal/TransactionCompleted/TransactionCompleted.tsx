import styled from '@emotion/styled';
import { Button, CircularProgress } from '@mui/material';
import React, { Component } from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Completed from '../../../../../assets/icon/Completed.svg';
import MataMask from '../../../../../assets/icon/MataMask.svg';
import Cros from '../../../../../assets/icon/Cros.png';
import { ComponentProps } from './Props';

const Title = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: 'black',
  textAlign: 'center',
  margin: 'auto',
  display: 'block',
  marginTop: 20,
});
const SubTitle = styled('span')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '16px',
  textAlign: 'center',
  color: '#DC7FB6',
  margin: 'auto',
  display: 'block',
  marginTop: 10,
});
const CompletedIcon = styled('img')({
  height: '70px',
  width: '70px',
  margin: 'auto',
  display: 'block',
});
const Buttons = styled(Button)({
  width: '100%',
  borderRadius: 16,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  textTransform: 'initial',
  marginTop: 20,
});
const BtnIcon = styled('img')({
  height: '32px',
  width: '32px',
  marginLeft: 3,
  marginRight: 3,
});
const CloseIcon = styled('img')({
  height: '15px',
  width: '15px',
});
const ImagDiv = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

const TransactionCompleted = (props: ComponentProps) => {
  return (
    <>
      <ImagDiv>
        <CloseIcon src={Cros} onClick={props.handleClose} />
      </ImagDiv>
      <CompletedIcon src={Completed} />
      <Title>Transaction Submitted</Title>
      <SubTitle>View on Explorer</SubTitle>
      <Buttons>
        Add USDT to
        <BtnIcon src={MataMask} />
        MetaMask
      </Buttons>
    </>
  );
};

export default TransactionCompleted;
