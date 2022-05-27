import styled from '@emotion/styled';
import React from 'react';

const PriceText = styled('span')({
  fontFamily: 'Inter',
  fontSize: '44px',
  fontWeight: '600',
});

const CurrencyPriceUSD = () => {
  return <PriceText>$3,744.19</PriceText>;
};

export default CurrencyPriceUSD;
