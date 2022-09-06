import { styled } from '@mui/system';
import { FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { onModalOpen } from '../../../../store/Actions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ThemeProps } from 'src/theme';
import IconGlobalStyleComponent from 'src/theme/iconGlobalStyleComponent';
const SwapHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
  cursor: 'pointer',
  paddingTop: '5%',
});
const HeaderTitle = styled('p')({
  fontWeight: '500',
  color: 'black',
  opacity: 0.65,
});
const Max = styled('p')((props:{theme: ThemeProps}) =>({
  fontWeight: '500',
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
}));
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
  fontWeight: 500,
  fontSize: '24px',
  backgroundColor: 'transparent',
  '&:focus-visible': {
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
  fontWeight: '600',
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
              !props.Read ? null : <IconGlobalStyleComponent
              onClick={() => {}}
              ml={20}
              mr={0}
              height={7}
              width={10}
              img='/images/downArrow.png'
              opecity={0.3} />
            }
          </SelectToken>
        </FormControl>
      </Input>
    </>
  );
};

export default CurrencyInput;
