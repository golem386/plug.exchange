// this is a SwapHeader file and Provide a SwapHeader
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onModalOpen } from '../../../../store/Actions';
import menu from '../../../../assets/icon/menu.png';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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
export type SwapHeaderProps = {
  transactionSettingHandler: () => void | null;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const SwapHeader = (props: SwapHeaderProps) => {
  const dispatch: AppDispatch = useDispatch();
  const onModal = (article: any) => {
    dispatch(onModalOpen(article));
  };
  return (
    <SwapDiv>
      <Swap>Swap</Swap>
      <img
        src={menu}
        onClick={() => {
          onModal('Transaction');
        }}
        alt="Menu"
      />
    </SwapDiv>
  );
};

export default SwapHeader;
