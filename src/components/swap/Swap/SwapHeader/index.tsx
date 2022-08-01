import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
//import { onModalOpen } from '../../../../store/Actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const SwapCardHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
  cursor: 'pointer',
  paddingTop: '5%',
});

const SwapTitle = styled('span')({
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
  const onModal = (article: string | boolean) => {
    dispatch(null);
  };
  return (
    <SwapCardHeader>
      <SwapTitle>Swap</SwapTitle>
      <img
        src="/images/menu.png"
        onClick={() => {
          onModal('Transaction');
        }}
        alt="Menu"
        height={20}
        width={20}
      />
    </SwapCardHeader>
  );
};

export default SwapHeader;
