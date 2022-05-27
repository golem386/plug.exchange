import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { FooterBar, NavBar } from '../../components';
import QuoteTable from '../../components/QuoteTable/QuoteTable';
import { Resetmore } from '../../components/RestartModel';
import Selectedtoken from '../../components/SelectedToken/SelectedToken';
import { Selecttoken } from '../../components/CurrencyModal';
import PairLineChart from '../swap/PairLineChart';
import { TransactionSettings } from '../swap/Swap/TransactionSettings';
import Swap from '../swap/Swap';

const MainDiv = styled('div')({
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '4%',
});

const SwapPage = () => {
  const Model: any = useSelector((state: ArticleState) => state.model);
  return (
    <>
      <NavBar />
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
      <FooterBar />
    </>
  );
};

export default SwapPage;
