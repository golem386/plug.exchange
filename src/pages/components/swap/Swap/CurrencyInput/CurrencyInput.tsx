// this is a CurrencyInput file and Provide a Currency Input value and input Design 
import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onModelOpen } from '../../../../../store/Actions';
import DownArrow from '../../../../../assets/icon/DownArrow.png';
import { ComponentProps } from './Props';

const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
  cursor: 'pointer',
  paddingTop: 15,
});
const Pay = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: 'black',
  fontFamily: 'Inter',
});
const Max = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: '#BB36FF',
  fontFamily: 'Inter',
});
const MainViewInputToken = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#e8e8e8',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 16,
  paddingLeft: 10,
  height: 70,
  marginTop: 10,
});
const TextInput = styled('input')({
  width: '90%',
  borderBottom: 'none',
  border: 'none',
  height: '52px',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: 'transparent',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const SelectMain = styled('div')({
  borderRadius: '100px',
  height: '36px',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
});
const CoinImgTag = styled('img')({
  height: '36px',
  width: '36px',
});
const CoinTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  color: 'black',
  marginLeft: 10,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const CurrencyInput = (props:ComponentProps) => {
  const dispatch: any = useDispatch();
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);

  const onModel = (article: any) => {
    dispatch(onModelOpen(article));
  };
  return (
    <>
      <SwapDiv>
        <Pay>You Pay</Pay>
        <Max>{props.ETH}</Max>
      </SwapDiv>
      <MainViewInputToken>
        <TextInput placeholder="0" />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectMain
            onClick={() => {
              onModel('SelectToken');
            }}
          >
            <CoinImgTag src={CoinDetail.image} alt="Coin"/>
            <CoinTitle>{CoinDetail.name}</CoinTitle>
            <CoinDropIcon src={DownArrow} alt="DownArrow"/>
          </SelectMain>
        </FormControl>
      </MainViewInputToken>
    </>
  );
};

export default CurrencyInput;
