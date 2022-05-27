import styled from '@emotion/styled';
import React from 'react';

const TotalText = styled('span')({
  color: '#DC7FB6',
  fontSize: '16px',
  fontWeight: '600',
  marginLeft: '1.5%',
  fontFamily: 'Inter',
});

const CurrencyPriceChange = () => {
  return <TotalText>$16.93333 (+0.41%)</TotalText>;
};

export default CurrencyPriceChange;
