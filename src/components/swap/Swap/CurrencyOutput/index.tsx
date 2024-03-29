// this is a CurrencyOutput file and Provide a Currency Output value and input Design
import { styled } from '@mui/system';
import { FormControl } from '@mui/material';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import SwapArrow from '../SwapArrow';
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';
import IconGlobalStyleComponent from 'theme/GlobalComponent/iconGlobalStyleComponent';;
const Receive = styled('div')({
  backgroundColor: '#F7F7F7',
  marginTop: '10%',
  position: 'relative',
  paddingBottom: '7%',
  paddingTop: '5%',
});
const InputTitle = styled('p')({
  paddingLeft:'5%',
  paddingTop:'2%',
  paddingBottom:'3%',
  fontWeight: '500',
  color: '#565656',
  lineHeight:0
});
const Input = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
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
  backgroundColor: '#F7F7F7',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});
const CoinImage = styled('img')({
  height: '36px',
  width: '36px',
});
const CoinTitle = styled('p')({
  fontWeight: '600',
  color: '#565656',
  marginLeft: 10,
});

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
type ReceiveCoin = {
  name: string | String;
  image: string | String | any;
  fullName: string | String;
};
// type AppDispatch = ThunkDispatch<ReduxState, string, AnyAction>;
export type CurrencyOutputProps = {
  inputOnChangeHandler: () => void | null;
  inputValue: number | null;
  selectedCurrency: string | number | null;
  toggleCurrencyModal: () => void | null;
  Read?: boolean
};
const CurrencyOutput = (props: CurrencyOutputProps) => {
  // const dispatch: AppDispatch = useDispatch();
  const ReceiveCoin: ReceiveCoin = useSelector((state: ReduxState) => state.receiveCoinDetail);

  const onModal = (_article: boolean | string) => {
    // dispatch(null);
  };
  return (
    <Receive>
      <SwapArrow switchCurrencyHandler={null} />
      <InputTitle>You Receive</InputTitle>
      <Input>
        <TextInput placeholder="0" disabled={!props.Read ? true : false} />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectToken
            onClick={() => {
              !props.Read ? null :
                onModal('ReceiveToken');
            }}
          >
            <CoinImage src={ReceiveCoin?.image} alt="Icon" />
            <CoinTitle>{ReceiveCoin?.name}</CoinTitle>
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
    </Receive>
  );
};

export default CurrencyOutput;
