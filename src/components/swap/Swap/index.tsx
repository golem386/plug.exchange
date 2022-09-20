// this is a swap index file and Provide a Swap modal layout
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
import Buttons from '../../../theme/Buttons'

const SwapModal = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '97%',
  marginTop: '12%',
});

const Boxs = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  width: '460px',
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
type ReduxState = {
  ConnectWallet: WalletType;
  CoinNetwork: ConnectNetworkType;
};
const Swap = (props: SwapProps) => {
  // const dispatch: AppDispatch = useDispatch();
  const ConnectWallet: WalletType = useSelector((state: ReduxState) => state.ConnectWallet);
  const CoinNetwork: ConnectNetworkType = useSelector((state: ReduxState) => state.CoinNetwork);
  const [TransactionWaitingopen, setTransactionWaitingOpen] = useState(false);
  const [TransactionCompletedopen, setTransactionCompletedOpen] = useState(false);
  const [TransactionFaildopen, setTransactionFaildopen] = useState(false);
  const [SwapConfirmModalopen, setSwapConfirmModalOpen] = useState(false);
  const [HighSlippageModalopen, setHighSlippageModalOpen] = useState(false);
  const [Parmition] = useState(true);

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
        <SwapHeader transactionSettingHandler={() => {}} />
        <CurrencyInput
          userInputTokenBalance={null}
          showMaxButton={null}
          inputValue={null}
          inputOnChangeHandler={() => {}}
          toggleCurrencyModal={() => {}}
          selectedCurrency="Max 0 ETH"
          Read={true}
        />
        <CurrencyOutput
          inputOnChangeHandler={() => {}}
          inputValue={null}
          selectedCurrency={null}
          toggleCurrencyModal={() => {}}
          Read={true}
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
              watchAssetHandler={() => {}}
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
              swapHandler={() => {}}
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
              watchAssetHandler={() => {}}
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
              watchAssetHandler={() => {}}
            />
          </Boxs>
        </Modal>
        {/* {!Parmition ? (
          <Buttons
            width='86%'
            isActive={true}
            onClick={() => {
              SetParmition(true);
            }}
            title={<div className='d-flex'>Allow the Plug protocol{isMobile ? null : <br />} to use your ETH.
              <IconGlobalStyleComponent
                onClick={() => { }}
                ml={0}
                mr={0}
                height={20}
                width={20}
                img='/images/whiteQue.png'
                opecity={1} />
              </div>} />

        ) : null} */}
        {ConnectWallet?.name === '' && CoinNetwork?.name !== '' ? (
          <WrongBtn>Wrong Network</WrongBtn>
        ) : (
          <>
            <Buttons
              width="86%"
              isActive={true}
              onClick={
                Parmition
                  ? ConnectWallet?.name !== '' && CoinNetwork?.name !== ''
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
                        // dispatch(null);
                        setTimeout(() => {
                          // dispatch(null);
                        }, 4000);
                      }
                  : () => {}
              }
              title={ConnectWallet?.name !== '' && CoinNetwork?.name !== '' ? 'Swap' : props.btnTitle}
            />
          </>
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
