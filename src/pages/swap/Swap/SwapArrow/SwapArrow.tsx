import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onReceiveCoin, onSelectCoin } from '../../../../redux/Actions';
import UpDown from '../../../../assets/icon/UpDown.png';

const UpDownImage = styled('img')({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 100,
  boxShadow: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.1))',
  position: 'absolute',
  top: -20,
  left: '40%',
  cursor: 'pointer',
});

const SwapArrow = () => {
  const dispatch: any = useDispatch();
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);
  const ReceiveCoin: any = useSelector((state: ArticleState) => state.receiveCoinDetail);
  const onSelectIcon = (coin: any) => {
    dispatch(onSelectCoin(coin));
  };
  const onReceiveIcon = (coin: any) => {
    dispatch(onReceiveCoin(coin));
  };
  const onChangeToken = () => {
    onSelectIcon(ReceiveCoin);
    onReceiveIcon(CoinDetail);
  };
  return (
    <UpDownImage
      src={UpDown}
      onClick={() => {
        onChangeToken();
      }}
    />
  );
};

export default SwapArrow;
