import { styled } from '@mui/system';
import { useSelector } from 'react-redux';

const SwapTransactionDetailsModal = styled('div')({
  backgroundColor: '#F7F7F7',
  width: '80%',
  margin: 'auto',
  display: 'block',
  padding: 10,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  '@media (max-width: 660px)': {
    width: '95%',
    borderRadius: 25,
  },
});

const SwapTransactionDetailsItem = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
});
const ItemText = styled('p')({
  padding: 10,
  fontWeight: '500',
  color: 'black',
  opacity: 0.65,
});
const ItemText2 = styled('p')({
  padding: 10,
  fontWeight: '500',
  color: '#010101',
});
export type SwapTransactionDetailsProps = {
  btnTitle: String;
  expectedOutput: number | null;
  priceImpact: number | null;
  minReceived: number | null;
  maxSent: number | null;
  allowedSlippage: number | null;
};

type ConnectWalletType = {
  name: String | string;
  image: String | string;
  Subname: String | string;
  Price: String | string;
};
type CoinNetworkType = {
  name: String | string;
  image: String | string;
};
type ReduxState = {
  ConnectWallet: ConnectWalletType;
  ConnectNetwork: CoinNetworkType;
};
const SwapTransactionDetails = (props: SwapTransactionDetailsProps) => {
  const ConnectWallet: ConnectWalletType = useSelector((state: ReduxState) => state.ConnectWallet);
  const CoinNetwork: CoinNetworkType = useSelector((state: ReduxState) => state.ConnectNetwork);
  return props.btnTitle === 'Connect Wallet' ? (
    ConnectWallet?.name !== '' && CoinNetwork?.name !== '' ? (
      <SwapTransactionDetailsModal>
        <SwapTransactionDetailsItem>
          <ItemText>Expected Output</ItemText>
          <ItemText2>1.46 USDT</ItemText2>
        </SwapTransactionDetailsItem>
        <SwapTransactionDetailsItem>
          <ItemText>Price Impact</ItemText>
          <ItemText2>-0.01%</ItemText2>
        </SwapTransactionDetailsItem>
        <hr />
        <SwapTransactionDetailsItem>
          <ItemText>Minimum received after</ItemText>
          <ItemText2>1.46</ItemText2>
        </SwapTransactionDetailsItem>
        <SwapTransactionDetailsItem>
          <ItemText>slippage (0.50%)</ItemText>
          <ItemText2>USDT</ItemText2>
        </SwapTransactionDetailsItem>
      </SwapTransactionDetailsModal>
    ) : null
  ) : null;
};

export default SwapTransactionDetails;
