// this is a Component index file and Provide a Component
// import SwapPage from '../../components/swap';

// export { SwapPage };

import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, AppFooter } from '../../components';
import { Selecttoken } from '../../components/CurrencyModal';
import { Resetmore } from '../../components/RestartModel';
import { Selectedtoken } from '../../components/SelectedToken';
import PairLineChart from '../../components/swap/PairLineChart';
import QuoteTables from '../../components/swap/QuoteTable';
import Swap from '../../components/swap/Swap';
import { TransactionSettings } from '../../components/swap/Swap/TransactionSettings';

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
              <Selectedtoken select="ReceiveToken" />
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
            <QuoteTables />
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