// this is a Swap File and Create Swap Model and manage other model and Swep Props Pass
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import {AppFooter, AppBar } from '..';
import QuoteTable from './QuoteTable/QuoteTable';
import { Resetmore } from '../RestartModel';
import Selectedtoken from '../SelectedToken/SelectedToken';
import { Selecttoken } from '../CurrencyModal';
import PairLineChart from './PairLineChart';
import { TransactionSettings } from './Swap/TransactionSettings';
import Swap from './Swap';

const MainDiv = styled('div')({
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '4%',
});

const SwapPage = () => {
  const Model: any = useSelector((state: ArticleState) => state.model);
  return (
    <>
      <AppBar />
      <MainDiv>
        <Grid container spacing={5}>
          <Grid item sm={8}>
            <PairLineChart />
          </Grid>
          <Grid item sm={4}>
            {Model === 'Transaction' ? (
              <TransactionSettings />
            ) : Model === 'SelectToken' ? (
              <Selecttoken select="PayToken" />
            ) : Model === 'ReceiveToken' ? (
              <Selecttoken select="ReceiveToken" />
            ) : (
              <Swap btnTitle="Connect Wallet" />
            )}
            {/* <Selectedtoken /> */}
            {/* <Swap btnTitle='Review Order' /> */}
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={5}>
          <Grid item sm={8}>
            <QuoteTable />
          </Grid>
          <Grid item sm={4}>
            <Resetmore />
          </Grid>
        </Grid>
      </MainDiv>
      <AppFooter />
    </>
  );
};

export default SwapPage;
