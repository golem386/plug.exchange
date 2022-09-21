import { styled } from '@mui/system';
import CurrencyInput from '../CurrencyInput';
import CurrencyOutput from '../CurrencyOutput';
import { ThemeProps } from 'theme';
import Buttons from 'theme/Buttons';

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: 15,
  marginRight: 15,
});
const CloseImage = styled('img')({
  height: 15,
  width: 15,
  cursor: 'pointer',
});
const Title = styled('p')({
  fontWeight: 600,
  fontSize: 24,
});
const ETH = styled('span')((props: { theme?: ThemeProps }) => ({
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  fontWeight: 500,
}));
const ImgVarticalShort = styled('img')({
  height: '15px',
  width: '15px',
  marginLeft: 10,
  cursor: 'pointer',
});
const ShortView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
  marginTop: 5,
});
const ShortViewList = styled('div')({
  backgroundColor: '#F7F7F7',
  borderRadius: 24,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 15,
  padding: 10,
});
const ShortViewListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 3,
  marginBottom: 3,
});
const Text = styled('span')({
  color: '#b0b0b0',
  fontWeight: 500,
});
const Price = styled('span')({
  color: 'black',
  fontWeight: 500,
});

type Currency = {};
type ENUM = {};
type SWAP = {};
type ERROR = {};
type WAITING = {};
type COMPLETED = {};
export type SwapConfirmModalProps = {
  handleClose: Function;
  inputToken: Currency | null;
  outputToken: Currency | null;
  swapAmount: number | null;
  expectedOutput: number | null;
  minReceived: number | null;
  allowedSlippage: number | null;
  gasEstimateInUSD: number | null;
  priceImpact: number | null;
  swapHandler: () => void | null;
  swapTXStatus: ENUM | SWAP | ERROR | WAITING | COMPLETED | null;
};

const SwapConfirmModal = (props: SwapConfirmModalProps) => {
  return (
    <>
      <Header>
        <Title>Swap Confirmation</Title>
        <CloseImage
          src="/images/cros.png"
          onClick={() => {
            props.handleClose(false);
          }}
        />
      </Header>
      <CurrencyInput
        userInputTokenBalance={null}
        showMaxButton={null}
        inputValue={null}
        inputOnChangeHandler={() => {}}
        toggleCurrencyModal={() => {}}
        selectedCurrency={null}
        Read={false}
      />
      <CurrencyOutput
        inputOnChangeHandler={() => {}}
        inputValue={null}
        selectedCurrency={null}
        toggleCurrencyModal={() => {}}
        Read={false}
      />
      <ShortView>
        <ETH>1 ETH = 4,008.2766 USDT</ETH>
        <ImgVarticalShort src="/images/shortVartical.png" />
      </ShortView>
      <ShortViewList>
        <ShortViewListItem>
          <Text>Expected Output</Text>
          <Price>1.46 USDT</Price>
        </ShortViewListItem>
        <ShortViewListItem>
          <Text>Price Impact</Text>
          <Price>-0.01%</Price>
        </ShortViewListItem>
        <ShortViewListItem>
          <Text>Minimum Received</Text>
          <Price>1.45 USDT</Price>
        </ShortViewListItem>
        <ShortViewListItem>
          <Text>Gas Price</Text>
          <Price>76.34 - 134.45 GWEI</Price>
        </ShortViewListItem>
        <ShortViewListItem>
          <Text>Slippage Tolerance</Text>
          <Price>1%</Price>
        </ShortViewListItem>
        <ShortViewListItem>
          <Text>Transaction Cost</Text>
          <Price>~$0.02</Price>
        </ShortViewListItem>
      </ShortViewList>
      <Buttons width="100%" isActive={true} onClick={() => {}} title="Confirm Swap" />
    </>
  );
};

export default SwapConfirmModal;
