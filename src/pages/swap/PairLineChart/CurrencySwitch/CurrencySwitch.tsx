import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import ShortVartical from '../../../../assets/icon/ShortVartical.png';

const TextHeading = styled('div')({
  fontFamily: 'Inter',
  fontSize: 'calc(0.75em + 1vw)',
  display: 'flex',
});
const TextSpan = styled('span')({
  fontFamily: 'Inter',
  fontSize: 'calc(0.75em + 1vw)',
  opacity: '0.3',
  paddingLeft: 5,
});
const ShortIcon = styled('img')({
  height: '25px',
  width: '25px',
  marginLeft: '20px',
  marginRight: '20px',
});

const CurrencySwitch = () => {
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);
  const receiveCoinDetail: any = useSelector((state: ArticleState) => state.receiveCoinDetail);
  return (
    <TextHeading>
      {CoinDetail.fullName}
      <TextSpan>({CoinDetail.name})</TextSpan>
      <ShortIcon src={ShortVartical} />
      {receiveCoinDetail.fullName}
      <TextSpan>({receiveCoinDetail.name})</TextSpan>
    </TextHeading>
  );
};

export default CurrencySwitch;
