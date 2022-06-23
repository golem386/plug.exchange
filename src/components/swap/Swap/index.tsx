// this is a swap index file and Provide a Swap modal layout
import styled from '@emotion/styled';
import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import CustomModal from '../../Modal/Modal';
import CurrencyInput from './CurrencyInput/CurrencyInput';
import CurrencyOutput from './CurrencyOutput/CurrencyOutput';
import SwapConfirmModal from './SwapConfirmModal';
import TransactionCompleted from './SwapConfirmModal/TransactionCompleted/TransactionCompleted';
import TransactionWaiting from './SwapConfirmModal/TransactionWaiting/TransactionWaiting';
import SwapHeader from './SwapHeader/SwapHeader';
import SwapRouter from './SwapRouter/SwapRouter';
import SwapTransactionDetails from './SwapTransactionDetails/SwapTransactionDetails';

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
export type SwapProps = {
  btnTitle: String;
};
const Swap = (props: SwapProps) => {
  const dispatch: any = useDispatch();
  const ConnectWallet: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const [TransactionWaitingopen, setTransactionWaitingOpen] = useState(false);
  const [TransactionCompletedopen, setTransactionCompletedOpen] = useState(false);
  const [SwapConfirmModalopen, setSwapConfirmModalOpen] = useState(false);
  const closeModel = () => {
    setTransactionWaitingOpen(false);
  };
  const closeTransactionCompletedModel = () => {
    setTransactionCompletedOpen(false);
  };
  const closeSwapConfirmModalopenModel = () => {
    setSwapConfirmModalOpen(false);
  };
  return (
    <>
      <MainDiv>
        <SwapHeader transactionSettingHandler={null} />
        <CurrencyInput
          ETH="Max 0 ETH"
          userInputTokenBalance={null}
          showMaxButton={null}
          inputValue={null}
          inputOnChangeHandler={null}
          toggleCurrencyModal={null}
          selectedCurrency={null}
        />
        <CurrencyOutput
          inputOnChangeHandler={null}
          inputValue={null}
          selectedCurrency={null}
          toggleCurrencyModal={null}
        />
        <SwapRouter btnTitle={props.btnTitle} liquiditySources={null} router={null} />
        <CustomModal
          Component={<TransactionWaiting swapCurrency={null} receivedCurrency={null} />}
          Status={TransactionWaitingopen}
          Close={() => {
            closeModel();
          }}
        />
        <CustomModal
          Component={
            <TransactionCompleted
              handleClose={() => {
                closeTransactionCompletedModel();
              }}
              transactionUrl={null}
              watchAssetHandler={null}
            />
          }
          Status={TransactionCompletedopen}
          Close={() => {
            closeTransactionCompletedModel();
          }}
        />
        <CustomModal
          Component={
            <SwapConfirmModal
            inputToken={null}
            outputToken={null}
            swapAmount={null}
            expectedOutput={null}
            minReceived={null}
            allowedSlippage={null}
            gasEstimateInUSD={null}
            priceImpact={null}
            swapHandler={null}
            swapTXStatus={null}
            handleClose={() => {
              closeSwapConfirmModalopenModel()
            }}
          />
          }
          Status={SwapConfirmModalopen}
          Close={() => {
            closeSwapConfirmModalopenModel();
          }}
        />
        <OrderBtn
          onClick={
            ConnectWallet.name !== '' && CoinNetwork.name !== ''
              ? () => {
                  setTransactionWaitingOpen(true);
                  setTimeout(() => {
                    setTransactionWaitingOpen(false);
                    setTransactionCompletedOpen(true);
                  }, 1000);
                }
              : () => {
                setSwapConfirmModalOpen(true)
                }
          }
        >
          {ConnectWallet.name !== '' && CoinNetwork.name !== '' ? 'Swap' : props.btnTitle}
        </OrderBtn>
      </MainDiv>
      {props.btnTitle === 'Connect Wallet' ? (
        ConnectWallet.name !== '' && CoinNetwork.name !== '' ? (
          <SwapTransactionDetails
            btnTitle={props.btnTitle}
            expectedOutput={null}
            priceImpact={null}
            minReceived={null}
            maxSent={null}
            allowedSlippage={null}
          />
        ) : null
      ) : null}
    </>
  );
};

export default Swap;
