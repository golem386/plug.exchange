// this file is a WalletDetails file and provide a History
import styled from '@emotion/styled';
import { Box, FormControl, Menu, NativeSelect, Tab, Tabs } from '@mui/material';
import React, { useEffect } from 'react';
import Cros from '../../assets/icon/Cros.png';
import { HistoryDATA, HistorySwapDATA } from '../../contexts/HistoryDATA';
import Modal from '../Modal';
import PaginationTable from './PaginationTable';

const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
});

const HeaderText = styled('span')({
  fontWeight: 600,
  fontSize: 20,
  fontFamily: 'Inter',
});

const Image = styled('img')({
  height: 18,
  width: 18,
});

type SwapTransactionHistoryType = {
  close: Function;
  isOpen: boolean
};

const CustomButton = styled('button')({
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '600',
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
});
const CustomButtonActive = styled('button')({
  borderRadius: '50px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: 'white!important',
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
});

const BoxsModal = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  width: '60%',
  height: '90%',
  borderRadius: 10,
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
        {value === 'All' ? (
          <PaginationTable data={HistoryDATA} />
        ) : (
          <PaginationTable data={HistorySwapDATA} />
        )}
      </BoxsModal>
    </Modal>
  );
};

export default SwapTransactionHistory;
