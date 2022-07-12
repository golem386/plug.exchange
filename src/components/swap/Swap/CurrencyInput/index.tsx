// this is a CurrencyInput file and Provide a Currency Input value and input Design
import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { onModalOpen } from '../../../../store/Actions';
import DownArrow from '../../../../assets/icon/DownArrow.png';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

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
  opacity: 0.65
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
  backgroundColor: '#f7f7f7',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 16,
  paddingLeft: 10,
  height: 52,
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
  cursor:'pointer'
});
const CoinImgTag = styled('img')({
  height: '36px',
  width: '36px',
});
const CoinTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  color: '#595959',
  marginLeft: 10,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});

export type CurrencyInputProps = {
  userInputTokenBalance: number | null;
  showMaxButton: boolean | null;
  inputValue: number | null;
  inputOnChangeHandler: () => void | null;
  toggleCurrencyModal: () => void | null;
  selectedCurrency: string | boolean | null;
};
type CoinDetailType = {
  name: String;
  image: String | string | any;
  fullName: String;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const CurrencyInput = (props: CurrencyInputProps) => {
  const dispatch: AppDispatch = useDispatch();
  const CoinDetail: CoinDetailType = useSelector((state: ArticleState) => state.CoinDetail);

  const onModal = (article: any) => {
    dispatch(onModalOpen(article));
  };
  return (
    <>
      <SwapDiv>
        <Pay>You Pay</Pay>
        <Max>{props.selectedCurrency}</Max>
      </SwapDiv>
      <MainViewInputToken>
        <TextInput placeholder="0" />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectMain
            onClick={() => {
              onModal('SelectToken');
            }}
          >
            <CoinImgTag src={CoinDetail.image} alt="Coin" />
            <CoinTitle>{CoinDetail.name}</CoinTitle>
            <CoinDropIcon src={DownArrow} alt="DownArrow" />
          </SelectMain>
        </FormControl>
      </MainViewInputToken>
    </>
  );
};

export default CurrencyInput;
