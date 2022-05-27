import styled from '@emotion/styled';
import React from 'react';
import { CurrencyPriceChange } from './CurrencyPriceChange';
import { CurrencyPriceUSD } from './CurrencyPriceUSD';
import { CurrencySwitch } from './CurrencySwitch';
import { PairData } from './PairData';


const View = styled('div')({});
const PairLineChart = () => {
  return (
    <View>
      <CurrencySwitch />
      <CurrencyPriceUSD />
      <br />
      <CurrencyPriceChange />
      <PairData />
    </View>
  );
};

export default PairLineChart;
