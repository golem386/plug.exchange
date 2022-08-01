import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

const Title = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '24px',
  color: 'black',
  textAlign: 'center',
});
const SubTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '16px',
  color: 'black',
  textAlign: 'center',
});

const CircularProgressIcon = styled('img')({
  margin: 'auto',
  display: 'block',
  marginTop: 20,
  height: 70,
  width: 70,
});
const TransactionWaitingModal = styled('div')({
  marginTop: 10,
});

export type TransactionWaitingProps = {
  swapCurrency: string | null;
  receivedCurrency: string | null;
};
const TransactionWaiting = (props: TransactionWaitingProps) => {
  return (
    <TransactionWaitingModal>
      {/* <CircularProgressIcon color="secondary" /> */}
      <CircularProgressIcon src="/images/loader.png" />
      <Title>Waiting for Confirmation</Title>
      <SubTitle>Swapping 0.000249 ETH for 1.46 USDT</SubTitle>
      <br />
      <SubTitle>Please confirm this transaction in your wallet.</SubTitle>
    </TransactionWaitingModal>
  );
};

export default TransactionWaiting;
