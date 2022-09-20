// this is a SwapArrow file and Provide a Short Arrow Change Data
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';

const CoinChangeIcon = styled('img')({
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
type ReduxState = {
  CoinDetail: {
    name: string;
    image: string;
    fullName: string;
  };
  receiveCoinDetail: {
    name: string;
    image: string;
    fullName: string;
  };
};
// type AppDispatch = ThunkDispatch<ReduxState, string, AnyAction>;
const SwapArrow = (_props: SwapArrowProps) => {
  // const dispatch: AppDispatch = useDispatch();
  const CoinDetail: CoinDetail = useSelector((state: ReduxState) => state.CoinDetail);
  const ReceiveCoin: CoinDetail = useSelector((state: ReduxState) => state.receiveCoinDetail);
  const onSelectIcon = (_coin: CoinDetail) => {
    // dispatch(null);
  };
  const onReceiveIcon = (_coin: CoinDetail) => {
    // dispatch(null);
  };
  const onChangeToken = () => {
    onSelectIcon(ReceiveCoin);
    onReceiveIcon(CoinDetail);
  };
  return (
    <CoinChangeIcon
      src="/images/upDown.png"
      onClick={() => {
        onChangeToken();
      }}
      alt="Icon"
    />
  );
};

export default SwapArrow;
