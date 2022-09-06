import { styled } from '@mui/system';
import { Button, FormControlLabel, Radio } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from '@mui/material';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThemeProps } from 'src/theme';

const TransactionSettingsModal = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '97%',
  paddingBottom: '8%',
  marginTop:'12%',
});
const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '5%',
  paddingRight: '5%',
});
const TransactionSettingTitle = styled('h2')({
  fontWeight: '600',
  color: 'black',
});
const Slippage = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
  opacity: '0.65',
});
const SlippageText = styled('p')({
  fontWeight: '600',
  color: 'black',
  paddingTop:'3%'
});
const QuestionIcon = styled('img')({
  height: 20,
  width: 20,
  marginLeft: 5,
  marginBottom: 5,
  opacity: '0.65',
});
const AutoButtonGroup = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const CustomButtonDisebal = styled(Button)({
  borderRadius: '16px',
  background: 'Transaction',
  padding: '7px 24px',
  fontSize: '14px',
  fontWeight: '600',
  color: 'black',
  textTransform: 'initial',
  marginLeft: '5%',
  marginRight: '2.5%',
  height: '52px',
  width: '47%',
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
});
const CustomButtonActiveNumber = styled(Button)({
  borderRadius: '16px',
  background: '#f7f7f7',
  padding: '7px 24px',
  color: '#b3b3b3',
  textTransform: 'initial',
  marginRight: '5%',
  height: '52px',
  width: '47%',
  fontSize: 24,
  fontWeight: 500,
  marginLeft: '2.5%',
});
const MainInput = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingRight: 10,
  marginLeft: '5%',
  marginRight: '5%',
  borderRadius: '16px',
  height: '52px',
});
const TextInput = styled('input')({
  width: '80%',
  height: '52px',
  paddingLeft: '5%',
  backgroundColor: 'transparent',
  borderBottom: 0,
  border: 'none',
  fontWeight: 500,
  fontSize: '24px',
  '&:focus-visible': {
    outline: 'none',
  },
});
const FlexViewJustyfy = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '5%',
  marginRight: '5%',
});
const PriseText = styled('p')({
  fontWeight: '600',
  '@media (max-width: 660px)': {
    fontSize: '14px',
  },
});
const TimeText = styled('p')({
  fontWeight: '600',
  color: '#cccccc',
  display: 'flex',
  alignItems: 'center',
});
const TimeTextPink = styled('p')((props: { theme: ThemeProps }) => ({
  fontWeight: '500',
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  display: 'flex',
  alignItems: 'center',
  '@media (max-width: 660px)': {
    background: props.theme.palette.color.active,
  },
}));
const DownArrowIcon = styled('img')({
  height: '7.78px',
  width: '12.73px',
  marginLeft: 10,
  cursor: 'pointer',
});
const Settings = styled('p')({
  fontWeight: '600',
  marginLeft: '5%',
});
const FlexVIew = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const FlexRow = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '5%',
  marginRight: '5%',
});
const AutoRout = styled('p')({
  fontWeight: '500',
  color: '#b3b3b3',
  marginBottom: 5,
});
const MainRow = styled('div')({});
const MainDivs = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '5%',
  marginRight: '5%',
});
const DivForms = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '40%',
  justifyContent: 'space-between',
});
const DivFormsCustom = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '70%',
  justifyContent: 'space-between',
});
const Comper = styled('p')({
  fontWeight: '600',
  color: '#b3b3b3',
});
const GasPrice = styled('p')({
  fontWeight: '600',
  color: '#b3b3b3',
});
const Span = styled('p')({
  fontWeight: '500',
  color: '#b3b3b3',
});
const TextTypeinput = styled('input')({
  backgroundColor: '#f7f7f7',
  border: 'none',
  borderRadius: '22px',
  height: '36px',
  width: '100%',
  outline: 'none',
  padding: 3,
  paddingLeft: 15,
  fontWeight: '600',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const CloseImage = styled('img')({
  cursor: 'pointer',
});

export type TransactionSettingsProps = {
  isOpen: boolean | null;
};
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;

const TransactionSettings = (props: TransactionSettingsProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [Slider, setSlider] = React.useState<Boolean>(false);
  const onModal = (article: string | boolean) => {
    dispatch(null);
  };
  return (
    <TransactionSettingsModal>
      <Header>
        <TransactionSettingTitle>Transaction Settings</TransactionSettingTitle>
        <CloseImage
          src="/images/cros.png"
          onClick={() => {
            onModal('Swap');
          }}
          alt="Close"
        />
      </Header>
      <Slippage>
        <SlippageText>Slippage Tolerance</SlippageText>
        <QuestionIcon src="/images/puestion.svg" alt="QuestionIcon" />
      </Slippage>
      <AutoButtonGroup>
        <CustomButtonDisebal>Auto</CustomButtonDisebal>
        <CustomButtonActiveNumber>0.50 %</CustomButtonActiveNumber>
      </AutoButtonGroup>
      <Slippage>
        <SlippageText>Transaction Deadline</SlippageText>
        <QuestionIcon src="/images/puestion.svg" alt="QuestionIcon" />
      </Slippage>
      <MainInput>
        <AutoButtonGroup>
          <TextInput placeholder="0" />
          <Span>Minutes</Span>
        </AutoButtonGroup>
      </MainInput>
      <hr />
      <FlexViewJustyfy>
        <PriseText>Gas Price</PriseText>
        {Slider === false ? (
          <TimeText>
            <Span>Instant (102.73 - 140.28 GWEI)</Span>
            <DownArrowIcon
              src="/images/downArrow.png"
              onClick={() => {
                setSlider(!Slider);
              }}
              alt="DownArrow"
            />
          </TimeText>
        ) : (
          <TimeTextPink>
            Instant (102.73 - 140.28 GWEI)
            <DownArrowIcon
              onClick={() => {
                setSlider(!Slider);
              }}
              src="/images/topArrow.png"
              alt="TopArrow"
            />
          </TimeTextPink>
        )}
      </FlexViewJustyfy>
      {Slider ? (
        <>
          <MainDivs>
            <DivForms>
              <FormControlLabel value="Instant" control={<Radio />} label="Instant" />
              <Comper>{'<10Sec'}</Comper>
            </DivForms>
            <GasPrice>102.73 - 140.28 GWEI</GasPrice>
          </MainDivs>
          <MainDivs>
            <DivForms>
              <FormControlLabel value="High" control={<Radio />} label="High" />
              <Comper>{'~12Sec'}</Comper>
            </DivForms>
            <GasPrice>106.73 - 179.28 GWEI</GasPrice>
          </MainDivs>
          <MainDivs>
            <DivForms>
              <FormControlLabel value="Low" control={<Radio />} label="Low" />
              <Comper>{'≥1Min'}</Comper>
            </DivForms>
            <GasPrice>108.73 - 130.28 GWEI</GasPrice>
          </MainDivs>
          <MainDivs>
            <DivFormsCustom>
              <FormControlLabel value="Custom" control={<Radio />} label="Custom" />
              <TextTypeinput defaultValue={10} />
            </DivFormsCustom>
            <GasPrice>GWEI</GasPrice>
          </MainDivs>
        </>
      ) : (
        ''
      )}
      <Settings>Interface Settings</Settings>
      <FlexRow>
        <MainRow>
          <AutoButtonGroup>
            <AutoRout>Auto Router API</AutoRout>
            <QuestionIcon src="/images/downArrow.png" alt="Icon" />
          </AutoButtonGroup>
          <Switch defaultChecked={true} color="secondary" />
        </MainRow>
        <MainRow>
          <AutoButtonGroup>
            <AutoRout>Auto Router API</AutoRout>
            <QuestionIcon src="/images/downArrow.png" alt="Icon" />
          </AutoButtonGroup>
          <Switch color="secondary" />
        </MainRow>
      </FlexRow>
      <FlexRow>
        <MainRow>
          <AutoButtonGroup>
            <AutoRout>Auto Router API</AutoRout>
            <QuestionIcon src="/images/downArrow.png" alt="Icon" />
          </AutoButtonGroup>
          <Switch defaultChecked={true} color="secondary" />
        </MainRow>
      </FlexRow>
    </TransactionSettingsModal>
  );
};

export default TransactionSettings;
