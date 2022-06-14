// this is a swap index file and Provide a Swap model layout
import styled from '@emotion/styled';
import { Button, Modal } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { onModelOpen, onModelStatus } from '../../../store/Actions';

import { onReceiveCoin, onSelectCoin } from '../../../store/Actions';
import { CurrencyInput } from './CurrencyInput';
import { CurrencyOutput } from './CurrencyOutput';
import SwapConfirmModal from './SwapConfirmModal';
import { TransactionCompleted } from './SwapConfirmModal/TransactionCompleted';
import { TransactionWaiting } from './SwapConfirmModal/TransactionWaiting';
import { SwapHeader } from './SwapHeader';
import { SwapRouter } from './SwapRouter';
import { SwapTransactionDetails } from './SwapTransactionDetails';

const MainDiv = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
});
const OrderBtn = styled(Button)({
  margin: 15,
  width: '90%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '10%',
  marginTop: '10%',
  textTransform: 'initial',
});
const Boxes = styled('div')({
  backgroundColor: 'white',
  borderRadius: 24,
  position: 'absolute',
  width: 'auto',
  top: '50%',
  left: '50%',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  transform: 'translate(-50%, -50%)',
});
export type SwapProps = {
  btnTitle: String;
};
const Swap = (props: SwapProps) => {
  const dispatch: any = useDispatch();
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);
  const ConnectWallet: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const ReceiveCoin: any = useSelector((state: ArticleState) => state.receiveCoinDetail);
  const onModel = (article: any) => {
    dispatch(onModelOpen(article));
  };
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
    <>
      <MainDiv>
        <SwapHeader />
        <CurrencyInput ETH="Max 0 ETH" />
        <CurrencyOutput />
        <SwapRouter btnTitle={props.btnTitle} />
        <OrderBtn
          onClick={
            ConnectWallet.name !== '' && CoinNetwork.name !== ''
              ? () => {
                  dispatch(onModelStatus({ name: 'Tranjection Waiting', Model: true }));
                  setTimeout(() => {
                    dispatch(onModelStatus({ name: 'Transaction Completed', Model: true }));
                  }, 1000);
                }
              : () => {
                  dispatch(onModelStatus({ name: 'Swap ConfirmModal', Model: true }));
                }
          }
        >
          {ConnectWallet.name !== '' && CoinNetwork.name !== '' ? 'Swap' : props.btnTitle}
        </OrderBtn>
      </MainDiv>
      {props.btnTitle === 'Connect Wallet' ? (
        ConnectWallet.name !== '' && CoinNetwork.name !== '' ? (
          <SwapTransactionDetails btnTitle={props.btnTitle} />
        ) : null
      ) : null}
    </>
  );
};

export default Swap;
