// this file is a WalletDetails file and provide a History
import styled from '@emotion/styled';
import React from 'react';
import Cros from '../../assets/icon/Cros.png';
import { HistoryDATA, HistorySwapDATA } from '../../contexts/HistoryDATA';
import Modal from '../Modal';
import PaginationTable from './PaginationTable';

const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
  paddingTop: '2%',
});

const HeaderText = styled('span')({
  fontWeight: 600,
  fontSize: 24,
  fontFamily: 'Inter',
  color: 'black',
});

const Image = styled('img')({
  height: 18,
  width: 18,
});

type SwapTransactionHistoryType = {
  close: Function;
  isOpen: boolean;
};

const CustomButton = styled('button')({
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '500',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'initial',
  marginLeft: 25,
  marginRight: 5,
  fontFamily: 'Inter',
  borderWidth: 0,
  padding: 5,
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: 5,
  marginBottom: 5,
  width: '80px',
  height: '36px',
});
const CustomButtonActive = styled('button')({
  borderRadius: '50px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '500',
  color: 'white!important',
  fontStyle: 'normal',
  textTransform: 'initial',
  marginLeft: 25,
  marginRight: 5,
  fontFamily: 'Inter',
  borderWidth: 0,
  padding: 5,
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: 5,
  marginBottom: 5,
  width: '80px',
  height: '36px',
});

const TabsBtn = styled('div')({
  paddingLeft: '3%',
  paddingTop: '1%',
  paddingBottom: '1%',
});
const BoxsModal = styled('div')({
  backgroundColor: 'white',
  width: '80%',
  height: '98%',
  borderRadius: 10,
  '@media (max-width: 660px)': {
    backgroundColor: 'white',
    width: '100%',
    height: '98%',
  },
});

const SwapTransactionHistory = (props: SwapTransactionHistoryType) => {
  const [value, setValue] = React.useState('All');
  return (
    <Modal
      isOpen={props.isOpen}
      modalTitle="Transaction History"
      close={() => {
        props.close();
      }}
    >
      <BoxsModal>
        <Header>
          <HeaderText>Transaction History</HeaderText>
          <Image
            src={Cros}
            onClick={() => {
              props.close();
            }}
          />
        </Header>
        <TabsBtn>
          {value === 'All' ? (
            <CustomButtonActive>All</CustomButtonActive>
          ) : (
            <CustomButton
              onClick={() => {
                setValue('All');
              }}
            >
              All
            </CustomButton>
          )}
          {value === 'Swaps' ? (
            <CustomButtonActive>Swaps</CustomButtonActive>
          ) : (
            <CustomButton
              onClick={() => {
                setValue('Swaps');
              }}
            >
              Swaps
            </CustomButton>
          )}
        </TabsBtn>

        {value === 'All' ? <PaginationTable data={HistoryDATA} /> : <PaginationTable data={HistorySwapDATA} />}
      </BoxsModal>
    </Modal>
  );
};

export default SwapTransactionHistory;
