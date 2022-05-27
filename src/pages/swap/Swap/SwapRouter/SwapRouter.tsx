import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';
import ShortVartical from '../../../../assets/icon/ShortVartical.png';
import trans from '../../../../assets/icon/trans.png';
import Question from '../../../../assets/icon/Question.svg';
import plus from '../../../../assets/icon/plus.png';
import TopAero from '../../../../assets/icon/TopAero.png';
import DownAero from '../../../../assets/icon/DownAero.png';
import Coin from '../../../../assets/icon/coin.png';
import Coin6 from '../../../../assets/icon/coin3.png';
import hr from '../../../../assets/icon/hr.png';
import { ComponentProps } from './Props';

const ETH = styled('p')({
  color: '#BB36FF',
});
const ImgVarticalShort = styled('img')({
  height: '15px',
  width: '15px',
  marginLeft: 10,
  cursor: 'pointer',
});
const ImgDownAero = styled('img')({
  height: '7.78px',
  width: '12.73px',
  marginRight: '5%',
  cursor: 'pointer',
});
const ShortView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
});
const MainContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const UsdtList = styled('div')({
  borderRadius: '16px',
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  borderWidth: '2px',
  borderColor: '#ededed',
  borderStyle: 'solid',
  margin: 10,
  height: '92px',
  '&:hover': {
    backgroundColor: '#ededed',
    borderColor: '#BB36FF',
  },
});
const Title = styled('p')({
  color: 'black',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: 600,
});
const TitleDisebal = styled('p')({
  color: '#a3a3a3',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: 600,
});
const CostomButtonActive = styled(Button)({
  borderRadius: '100px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '3px 10px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#FFFFFF',
  fontStyle: 'Inter',
  textTransform: 'lowercase',
  marginLeft: 15,
  marginRight: 5,
  height: '28px',
});

const MainTitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});
const Amount = styled('p')({
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: '600',
});
const AmountDisebal = styled('p')({
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: '600',
  color: '#a3a3a3',
});
const Div = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const Span = styled('span')({
  fontWeight: '500',
  fontFamily: 'Inter',
  fontSize: '14px',
  color: '#000000',
  opacity: '0.4',
});
const AutoRoute = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
});

const Icon = styled('img')({
  width: '20.5px',
  height: '18px',
  marginLeft: 5,
  marginRight: 5,
  cursor: 'pointer',
});
const IconHr = styled('img')({
  width: '20.5px',
  height: '2px',
  marginLeft: 5,
  marginRight: 5,
  cursor: 'pointer',
  padding: 5,
});

const QusetionIcon = styled('img')({
  width: '20.5px',
  height: '18px',
  marginLeft: 5,
  marginRight: 5,
  opacity: '0.4',
});
const AutoText = styled('p')({
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: 'Inter',
  color: '#BB36FF',
});
const Route = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const CoinImg = styled('img')({
  height: '24px',
  width: '24px',
  marginLeft: 15,
});
const CViewImg = styled('img')({
  height: '24px',
  width: '24px',
});
const CViewImgTow = styled('img')({
  height: '24px',
  width: '24px',
  marginLeft: -12,
});
const CViewImgThree = styled('img')({
  height: '24px',
  width: '24px',
  marginRight: 20,
});
const CostomButtonActiveCoin = styled(Button)({
  borderRadius: '100px',
  background: '#e6e6e6',
  padding: '3px 10px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#000000',
  fontStyle: 'Inter',
  textTransform: 'lowercase',
  marginLeft: 5,
  marginRight: 5,
  height: '28px',
});
const CView = styled('div')({
  display: 'flex',
  alignItems: 'center',
});


const SwapRouter = (props: ComponentProps) => {
  const [Slider, setSlider] = React.useState<Boolean>(false);
  const [AddEntey, setAddEntey] = React.useState<Boolean>(false);
  return props.btnTitle === 'Connect Wallet' ? (
    <>
      <MainContent>
        <ShortView>
          <ETH>1 ETH = 4,008.2766 USDT</ETH>
          <ImgVarticalShort src={ShortVartical} />
        </ShortView>
        <ImgDownAero
          onClick={() => {
            setSlider(!Slider);
          }}
          src={Slider === true ? TopAero : DownAero}
        />
      </MainContent>
      {Slider === true ? (
        <>
          <UsdtList>
            <MainTitleView>
              <Div>
                <Title>1inch</Title>
                <CostomButtonActive>Save $12.20</CostomButtonActive>
              </Div>
              <Amount>2442.57</Amount>
            </MainTitleView>
            <MainTitleView>
              <Span>TXN Cost 0.0161 = (~$39.51)</Span>
              <Span>~$2,451</Span>
            </MainTitleView>
          </UsdtList>
          <UsdtList>
            <MainTitleView>
              <Div>
                <TitleDisebal>1inch</TitleDisebal>
                <CostomButtonActive>Save $12.20</CostomButtonActive>
              </Div>
              <AmountDisebal>2442.57</AmountDisebal>
            </MainTitleView>
            <MainTitleView>
              <Span>TXN Cost 0.0161 = (~$39.51)</Span>
              <Span>~$2,451</Span>
            </MainTitleView>
          </UsdtList>
          <AutoRoute>
            <Div>
              <Icon src={trans} />
              <AutoText>Auto Router</AutoText>
              <QusetionIcon src={Question} />
            </Div>
            {AddEntey === true ? (
              <IconHr
                onClick={() => {
                  setAddEntey(!AddEntey);
                }}
                src={hr}
              />
            ) : (
              <Icon
                onClick={() => {
                  setAddEntey(!AddEntey);
                }}
                src={plus}
              />
            )}
          </AutoRoute>
          {AddEntey === true ? (
            <Route>
              <CView>
                <CoinImg src={Coin} />
                <CostomButtonActiveCoin>v3 - 100%</CostomButtonActiveCoin>
              </CView>
              <CView>
                <CViewImg src={Coin} />
                <CViewImgTow src={Coin6} />
                <CostomButtonActiveCoin>0.05%</CostomButtonActiveCoin>
              </CView>
              <CView>
                <CViewImgThree src={Coin6} />
              </CView>
            </Route>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </>
  ) : null;
};

export default SwapRouter;
