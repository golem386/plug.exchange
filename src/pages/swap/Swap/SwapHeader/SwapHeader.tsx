import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onModelOpen } from '../../../../redux/Actions';
import menu from '../../../../assets/icon/menu.png';

const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
  cursor: 'pointer',
  paddingTop: 15,
});

const Swap = styled('span')({
  fontSize: '24px',
  fontWeight: '600',
  color: 'black',
  fontFamily: 'Inter',
});
const SwapHeader = () => {
  const dispatch: any = useDispatch();
  const onModel = (article: any) => {
    dispatch(onModelOpen(article));
  };
  return (
    <SwapDiv>
      <Swap>Swap</Swap>
      <img
        src={menu}
        onClick={() => {
          onModel('Transaction');
        }}
      />
    </SwapDiv>
  );
};

export default SwapHeader;
