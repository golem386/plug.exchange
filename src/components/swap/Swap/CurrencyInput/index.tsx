import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { onModalOpen } from '../../../../store/Actions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const SwapHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
  cursor: 'pointer',
  paddingTop: '5%',
});
const HeaderTitle = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: 'black',
  fontFamily: 'Inter',
  opacity: 0.65,
});
const Max = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontFamily: 'Inter',
});
const Input = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f7f7f7',
  marginLeft: '5%',
  marginRight: '5%',
  borderRadius: 16,
  paddingLeft: 10,
  height: 52,
  marginTop: 10,
});
const TextInput = styled('input')({
  width: '90%',
  borderBottom: 'none',
  border: 'none',
  height: '52px',
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '24px',
  backgroundColor: 'transparent',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const SelectToken = styled('div')({
  borderRadius: '100px',
  height: '36px',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});
const SelectTokenImage = styled('img')({
  height: '36px',
  width: '36px',
});
const SelectTokenTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  color: '#595959',
  marginLeft: 10,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});

export type CurrencyInputProps = {
  userInputTokenBalance: number | null;
  showMaxButton: boolean | null;
  inputValue: number | null;
  inputOnChangeHandler: () => void | null;
  toggleCurrencyModal: () => void | null;
  selectedCurrency: string | boolean | null;
  Read?: Boolean
};
type CoinDetailType = {
  name: String;
  image: String | string | any;
  fullName: String;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const CurrencyInput = (props: CurrencyInputProps) => {
  const dispatch: AppDispatch = useDispatch();
  const CoinDetail: CoinDetailType = useSelector((state: ArticleState) => state.CoinDetail);

  const onModal = (article: boolean | string) => {
    dispatch(null);
  };
  return (
    <>
      <SwapHeader>
        <HeaderTitle>You Pay</HeaderTitle>
        <Max>{props.selectedCurrency}</Max>
      </SwapHeader>
      <Input>
        <TextInput placeholder="0" disabled={!props.Read ? true : false} />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectToken
            onClick={() => {
              !props.Read ? null :
              onModal('SelectToken')
            }}
          >
            <SelectTokenImage src={CoinDetail?.image} alt="Coin" />
            <SelectTokenTitle>{CoinDetail?.name}</SelectTokenTitle>
            {
              !props.Read ? null : <CoinDropIcon src="/images/DownArrow.png" alt="DownArrow" />
            }
          </SelectToken>
        </FormControl>
      </Input>
    </>
  );
};

export default CurrencyInput;
