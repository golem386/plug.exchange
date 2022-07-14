// this is a Component index file and Provide a Component
// import SwapPage from '../../components/swap';

// export { SwapPage };

import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import AppBar from '../../components/AppBar';
import AppFooter from '../../components/AppFooter';
import CurrencyModal from '../../components/CurrencyModal';
import PairLineChart from '../../components/swap/PairLineChart';
import QuoteTables from '../../components/swap/QuoteTable';
import ReferralModal from '../../components/swap/Referral';
import Swap from '../../components/swap/Swap';
import TransactionSettings from '../../components/swap/Swap/TransactionSettings';

const MainDiv = styled('div')({
  marginLeft: '3%',
  marginRight: '3%',
  marginTop: '4%',
});
const Quotadiv = styled('div')({
  marginTop: '15%',
});
const Resetmorediv = styled('div')({
  marginTop: '15%',
});
const SwapPage = () => {
  const Modal: string = useSelector((state: ArticleState) => state.modal);
  return (
    <>
      <AppBar />
      <MainDiv>
        <Grid container spacing={5}>
          <Grid item sm={7}>
            <PairLineChart
              inputCurrency={null}
              outputCurrency={null}
              switchCurrencyHandler={null}
              currencyPriceInUSD={null}
              currencyPriceChangeInUSD={null}
              currencyPriceChangePercentage={null}
              pairOhlcData={null}
              currentInterval={null}
              intervalHandler={null}
            />
            <Quotadiv>
              <QuoteTables quotes={null} allowedSlippage={null} lastRefresh={null} userSelectedGasPrice={null} />
            </Quotadiv>
          </Grid>
          <Grid item sm={5}>
            {Modal === 'Transaction' ? (
              <TransactionSettings isOpen={null} />
            ) : Modal === 'SelectToken' ? (
              <CurrencyModal
                select="PayToken"
                activeList={null}
                currencySearchHandler={null}
                isOpen={null}
                actionHandler={null}
                activeTokenId={null}
              />
            ) : Modal === 'ReceiveToken' ? (
              <CurrencyModal
                select="ReceiveToken"
                activeList={null}
                currencySearchHandler={null}
                isOpen={null}
                actionHandler={null}
                activeTokenId={null}
              />
            ) : (
              <Swap btnTitle="Connect Wallet" />
            )}
            {/* <Swap btnTitle='Review Order' /> */}
            <Resetmorediv>
              <ReferralModal />
            </Resetmorediv>
          </Grid>
        </Grid>
      </MainDiv>
      <AppFooter />
    </>
  );
};

export default SwapPage;
