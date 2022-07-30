// this is a SwapArrow file and Provide a Short Arrow Change Data
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
//import { onReceiveCoin, onSelectCoin } from '../../../../store/Actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const UpDownImage = styled('img')({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 100,
  boxShadow: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.1))',
  position: 'absolute',
  top: -20,
  left: '45%',
  cursor: 'pointer',
});
type CoinDetail = {
  name: String;
  image: String;
  fullName: String;
};
export type SwapArrowProps = {
  switchCurrencyHandler: Function | null;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const SwapArrow = (props: SwapArrowProps) => {
  const dispatch: AppDispatch = useDispatch();
  const CoinDetail: CoinDetail = useSelector((state: ArticleState) => state.CoinDetail);
  const ReceiveCoin: CoinDetail = useSelector((state: ArticleState) => state.receiveCoinDetail);
  const onSelectIcon = (coin: CoinDetail) => {
    dispatch(null);
  };
  const onReceiveIcon = (coin: CoinDetail) => {
    dispatch(null);
  };
  const onChangeToken = () => {
    onSelectIcon(ReceiveCoin);
    onReceiveIcon(CoinDetail);
  };
  return (
    <UpDownImage
      src="/images/UpDown.png"
      onClick={() => {
        onChangeToken();
      }}
      alt="Icon"
    />
  );
};

export default SwapArrow;
