// this is a swap index file and Provide a Swap modal layout
import styled from '@emotion/styled';
import { Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { handleClick } from '../../../store/Actions';
import CustomModal from '../../Modal/Modal';
import CurrencyInput from './CurrencyInput/CurrencyInput';
import CurrencyOutput from './CurrencyOutput/CurrencyOutput';
import SwapConfirmModal from './SwapConfirmModal';
import HighSlippage from './SwapConfirmModal/HighSlippage/HighSlippage';
import TransactionCompleted from './SwapConfirmModal/TransactionCompleted/TransactionCompleted';
import TransactionFailed from './SwapConfirmModal/TransactionFailed/TransactionFailed';
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

type WalletType = {
  name: String;
  image: String;
  Subname: String;
  Price: String;
};
type ConnectNetworkType = {
  name: String;
  image: String;
};
export type SwapProps = {
  btnTitle: String;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const Swap = (props: SwapProps) => {
  const dispatch: AppDispatch = useDispatch();
  const ConnectWallet: WalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const [TransactionWaitingopen, setTransactionWaitingOpen] = useState(false);
  const [TransactionCompletedopen, setTransactionCompletedOpen] = useState(false);
  const [TransactionFaildopen, setTransactionFaildopen] = useState(false);
  const [SwapConfirmModalopen, setSwapConfirmModalOpen] = useState(false);
  const [HighSlippageModalopen, setHighSlippageModalOpen] = useState(false);
  const closeModel = () => {
    setTransactionWaitingOpen(false);
  };
  const closeTransactionCompletedModel = () => {
    setTransactionCompletedOpen(false);
  };
  const closeSwapConfirmModalopenModel = () => {
    setSwapConfirmModalOpen(false);
  };
  const closeTransactionFaildModel = () => {
    setTransactionFaildopen(false);
  };
  const closeHighSlippageModel = () => {
    setHighSlippageModalOpen(false);
  };
  return (
    <>
      <MainDiv>
        <SwapHeader transactionSettingHandler={null} />
        <CurrencyInput
          userInputTokenBalance={null}
          showMaxButton={null}
          inputValue={null}
          inputOnChangeHandler={null}
          toggleCurrencyModal={null}
          selectedCurrency="Max 0 ETH"
        />
        <CurrencyOutput
          inputOnChangeHandler={null}
          inputValue={null}
          selectedCurrency={null}
          toggleCurrencyModal={null}
        />
        <SwapRouter btnTitle={props.btnTitle} liquiditySources={null} router={null} />
        <CustomModal
          modalTitle=""
          children={<TransactionWaiting swapCurrency={null} receivedCurrency={null} />}
          isOpen={TransactionWaitingopen}
          close={() => {
            closeModel();
          }}
        />
        <CustomModal
          modalTitle=""
          children={
            <TransactionCompleted
              handleClose={() => {
                closeTransactionCompletedModel();
              }}
              transactionUrl={null}
              watchAssetHandler={null}
            />
          }
          isOpen={TransactionCompletedopen}
          close={() => {
            closeTransactionCompletedModel();
          }}
        />
        <CustomModal
          children={
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
                closeSwapConfirmModalopenModel();
              }}
            />
          }
          modalTitle=""
          isOpen={SwapConfirmModalopen}
          close={() => {
            closeSwapConfirmModalopenModel();
          }}
        />
        <CustomModal
          children={
            <TransactionFailed
              handleClose={() => {
                closeTransactionFaildModel();
              }}
              transactionUrl={null}
              watchAssetHandler={null}
            />
          }
          modalTitle=""
          isOpen={TransactionFaildopen}
          close={() => {
            closeTransactionFaildModel();
          }}
        />
        <CustomModal
          children={
            <HighSlippage
              handleClose={() => {
                closeHighSlippageModel();
              }}
              transactionUrl={null}
              watchAssetHandler={null}
            />
          }
          modalTitle=""
          isOpen={HighSlippageModalopen}
          close={() => {
            closeHighSlippageModel();
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
                  setSwapConfirmModalOpen(true);
                  setTransactionFaildopen(true);
                  setHighSlippageModalOpen(true);
                  dispatch(handleClick({ type: 'Success', open: true, vertical: 'top', horizontal: 'right' }));
                  setTimeout(() => {
                    dispatch(handleClick({ type: 'Error', open: true, vertical: 'top', horizontal: 'right' }));
                  }, 4000);
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
