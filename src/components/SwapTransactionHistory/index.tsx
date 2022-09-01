import { styled } from '@mui/system';
import React from 'react';
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
  color: 'black',
});

const CloseImage = styled('img')({
  height: 18,
  width: 18,
});

type SwapTransactionHistoryType = {
  close: Function;
  isOpen: boolean;
};

const Button = styled('button')({
  borderRadius: '50px',
  fontSize: '16px',
  fontWeight: '500',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'initial',
  marginLeft: 25,
  marginRight: 5,
  borderWidth: 0,
  padding: 5,
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: 5,
  marginBottom: 5,
  width: '80px',
  height: '36px',
});
const ActiveButton = styled('button')((props:string | number | boolean) =>({
  borderRadius: '50px',
  background: props.theme.palette.color.active,
  fontSize: '16px',
  fontWeight: '500',
  color: 'white!important',
  fontStyle: 'normal',
  textTransform: 'initial',
  marginLeft: 25,
  marginRight: 5,
  borderWidth: 0,
  padding: 5,
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: 5,
  marginBottom: 5,
  width: '80px',
  height: '36px',
}));

const TabsBtn = styled('div')({
  paddingLeft: '3%',
  paddingTop: '1%',
  paddingBottom: '1%',
});
const SwapTransactionHistoryModal = styled('div')({
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
      <SwapTransactionHistoryModal>
        <Header>
          <HeaderText>Transaction History</HeaderText>
          <CloseImage
            src="/images/cros.png"
            onClick={() => {
              props.close();
            }}
          />
        </Header>
        <TabsBtn>
          {value === 'All' ? (
            <ActiveButton>All</ActiveButton>
          ) : (
            <Button
              onClick={() => {
                setValue('All');
              }}
            >
              All
            </Button>
          )}
          {value === 'Swaps' ? (
            <ActiveButton>Swaps</ActiveButton>
          ) : (
            <Button
              onClick={() => {
                setValue('Swaps');
              }}
            >
              Swaps
            </Button>
          )}
        </TabsBtn>

        {value === 'All' ? <PaginationTable data={HistoryDATA} /> : <PaginationTable data={HistorySwapDATA} />}
      </SwapTransactionHistoryModal>
    </Modal>
  );
};

export default SwapTransactionHistory;
