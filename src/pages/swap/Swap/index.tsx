import styled from '@emotion/styled';
import { Box, Button, Modal } from '@mui/material';
import { padding } from '@mui/system';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { CurrencyInput } from './CurrencyInput';
import { CurrencyOutput } from './CurrencyOutput';
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
  borderRadius: 16,
  padding: 30,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

type ComponentProps = {
  btnTitle: String;
};
const Swap = (props: ComponentProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ConnectWallet: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  return (
    <>
      <MainDiv>
        <SwapHeader />
        <CurrencyInput />
        <CurrencyOutput />
        <SwapRouter btnTitle={props.btnTitle} />
        <div>
          <OrderBtn onClick={ConnectWallet.name !== '' && CoinNetwork.name !== '' ? handleOpen : () => {}}>
            {ConnectWallet.name !== '' && CoinNetwork.name !== '' ? 'Swap' : props.btnTitle}
          </OrderBtn>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Boxes>
              {/* <TransactionWaiting /> */}
              <TransactionCompleted handleClose={() =>{handleClose()}}/>
            </Boxes>
          </Modal>
        </div>
      </MainDiv>
      <SwapTransactionDetails btnTitle={props.btnTitle} />
    </>
  );
};

export default Swap;
