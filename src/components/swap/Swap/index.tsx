// this is a swap index file and Provide a Swap modal layout
import styled from '@emotion/styled';
import { Button, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
//import { handleClick } from '../../../store/Actions';
import Modal from '../../Modal';
import CurrencyInput from './CurrencyInput';
import CurrencyOutput from './CurrencyOutput';
import SwapConfirmModal from './SwapConfirmModal';
import HighSlippage from './SwapConfirmModal/HighSlippage';
import TransactionCompleted from './SwapConfirmModal/TransactionCompleted';
import TransactionFailed from './SwapConfirmModal/TransactionFailed';
import TransactionWaiting from './SwapConfirmModal/TransactionWaiting';
import SwapHeader from './SwapHeader';
import SwapRouter from './SwapRouter';
import SwapTransactionDetails from './SwapTransactionDetails';

const SwapModal = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '97%',
  marginTop: '12%',
});
const OrderBtn = styled(Button)({
  margin: 15,
  width: '86%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '6%',
  marginTop: '5%',
  marginLeft: '7%',
  textTransform: 'initial',
});
const OrderBtnDisebal = styled(Button)({
  margin: 15,
  width: '86%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '6%',
  marginTop: '5%',
  marginLeft: '7%',
  textTransform: 'initial',
  opacity: 0.4,
});

const ParmitionBtn = styled(Button)({
  marginLeft: '7%',
  marginRight: 15,
  marginTop: 15,
  width: '86%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  borderRadius: '12px',
  textTransform: 'initial',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
});

const Boxs = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  width: '450px',
  height: 'auto',
  borderRadius: 10,
});
const WrongBtn = styled(Button)({
  margin: 15,
  width: '90%',
  background: 'red',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '10%',
  marginTop: '10%',
  textTransform: 'initial',
});
const Img = styled('img')({
  height: 20,
  width: 20,
  marginLeft: 20,
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
  const matches = useMediaQuery('(min-width:660px)');
  const ConnectWallet: WalletType = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ArticleState) => state.ConnectNetwork);
  const [TransactionWaitingopen, setTransactionWaitingOpen] = useState(false);
  const [TransactionCompletedopen, setTransactionCompletedOpen] = useState(false);
  const [TransactionFaildopen, setTransactionFaildopen] = useState(false);
  const [SwapConfirmModalopen, setSwapConfirmModalOpen] = useState(false);
  const [HighSlippageModalopen, setHighSlippageModalOpen] = useState(false);
  const [Parmition, SetParmition] = useState(false);

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
      <SwapModal>
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
        <Modal
          modalTitle=""
          children={
            <Boxs>
              <TransactionWaiting swapCurrency={null} receivedCurrency={null} />
            </Boxs>
          }
          isOpen={TransactionWaitingopen}
          close={() => {
            closeModel();
          }}
        />
        <Modal
          modalTitle=""
          isOpen={TransactionCompletedopen}
          close={() => {
            closeTransactionCompletedModel();
          }}
        >
          <Boxs>
            <TransactionCompleted
              handleClose={() => {
                closeTransactionCompletedModel();
              }}
              transactionUrl={null}
              watchAssetHandler={null}
            />
          </Boxs>
        </Modal>
        <Modal
          modalTitle=""
          isOpen={SwapConfirmModalopen}
          close={() => {
            closeSwapConfirmModalopenModel();
          }}
        >
          <Boxs>
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
          </Boxs>
        </Modal>
        <Modal
          modalTitle=""
          isOpen={TransactionFaildopen}
          close={() => {
            closeTransactionFaildModel();
          }}
        >
          <Boxs>
            <TransactionFailed
              handleClose={() => {
                closeTransactionFaildModel();
              }}
              transactionUrl={null}
              watchAssetHandler={null}
            />
          </Boxs>
        </Modal>
        <Modal
          modalTitle=""
          isOpen={HighSlippageModalopen}
          close={() => {
            closeHighSlippageModel();
          }}
        >
          <Boxs>
            <HighSlippage
              handleClose={() => {
                closeHighSlippageModel();
              }}
              transactionUrl={null}
              watchAssetHandler={null}
            />
          </Boxs>
        </Modal>
        {!Parmition ? (
          <ParmitionBtn
            onClick={() => {
              SetParmition(true);
            }}
          >
            Allow the Plug protocol {matches ? null : <br />} to use your ETH.
            <Img src="/images/whiteQue.png" />
          </ParmitionBtn>
        ) : null}
        {ConnectWallet?.name === '' && CoinNetwork?.name !== '' ? (
          <WrongBtn>Wrong Network</WrongBtn>
        ) : Parmition ? (
          <OrderBtn
            onClick={
              ConnectWallet?.name !== '' && CoinNetwork?.name !== ''
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
                    dispatch(null);
                    setTimeout(() => {
                      dispatch(null);
                    }, 4000);
                  }
            }
          >
            {ConnectWallet?.name !== '' && CoinNetwork?.name !== '' ? 'Swap' : props.btnTitle}
          </OrderBtn>
        ) : (
          <OrderBtnDisebal>Swap</OrderBtnDisebal>
        )}
      </SwapModal>
      {props.btnTitle === 'Connect Wallet' ? (
        ConnectWallet?.name !== '' && CoinNetwork?.name !== '' ? (
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
