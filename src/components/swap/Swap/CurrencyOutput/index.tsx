// this is a CurrencyOutput file and Provide a Currency Output value and input Design
import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { onModalOpen } from '../../../../store/Actions';
import SwapArrow from '../SwapArrow';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const Receive = styled('div')({
  backgroundColor: '#F7F7F7',
  marginTop: '10%',
  position: 'relative',
  paddingBottom: '7%',
  paddingTop: '5%',
});
const InputTitle = styled('span')({
  padding: '5%',
  fontFamily: 'inter',
  fontWeight: '500',
  fontSize: 16,
  color: '#565656',
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
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  color: '#565656',
  marginLeft: 10,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});

type ReceiveCoin = {
  name: string | String;
  image: string | String | any;
  fullName: string | String;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
export type CurrencyOutputProps = {
  inputOnChangeHandler: () => void | null;
  inputValue: number | null;
  selectedCurrency: string | number | null;
  toggleCurrencyModal: () => void | null;
  Read?: boolean
};
const CurrencyOutput = (props: CurrencyOutputProps) => {
  const dispatch: AppDispatch = useDispatch();
  const ReceiveCoin: ReceiveCoin = useSelector((state: ArticleState) => state.receiveCoinDetail);

  const onModal = (article: boolean | string) => {
    dispatch(null);
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
              !props.Read ? null : <CoinDropIcon src="/images/downArrow.png" alt="DownArrow" />
            }
          </SelectToken>
        </FormControl>
      </Input>
    </Receive>
  );
};

export default CurrencyOutput;
