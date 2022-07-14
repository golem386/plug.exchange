// this is a SwapRouter file and provide a Route list
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import React from 'react';
import ShortVartical from '../../../../assets/icon/ShortVartical.png';
import trans from '../../../../assets/icon/trans.png';
import Question from '../../../../assets/icon/Question.svg';
import plus from '../../../../assets/icon/plus.png';
import TopArrow from '../../../../assets/icon/TopArrow.png';
import DownArrow from '../../../../assets/icon/DownArrow.png';
import Coin from '../../../../assets/icon/coin.png';
import Coin6 from '../../../../assets/icon/coin3.png';
import hr from '../../../../assets/icon/hr.png';

const ETH = styled('p')({
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
  color: "transparent",
  backgroundClip: "text",
  fontFamily: 'Inter',
  fontSize: 16,
  fontWeight: 500,
});
const ImgVarticalShort = styled('img')({
  height: '15px',
  width: '15px',
  marginLeft: 10,
  cursor: 'pointer',
});
const ImgDownArrow = styled('img')({
  height: '7.78px',
  width: '12.73px',
  marginRight: '7%',
  cursor: 'pointer',
});
const ShortView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '7%',
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
  borderColor: 'rgba(0, 0, 0, 0.1)',
  borderStyle: 'solid',
  margin: 10,
  marginLeft:'5%',
  marginRight:'5%',
  height: '92px',
  cursor:'pointer',
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
  color: '#949494',
  fontFamily: 'Inter',
  fontSize: '20px',
  fontWeight: 600,
});
const CustomButtonActive = styled(Button)({
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
  justifyContent: 'space-between',
  marginLeft:'5%',
  marginRight:'5%'
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
  color: '#949494',
});
const Div = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const Div2 = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft:'5%'
});
const Span = styled('span')({
  fontWeight: '500',
  fontFamily: 'Inter',
  fontSize: '14px',
  color: '#949494',
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
  width: '14px',
  height: '14px',
  marginLeft: 5,
  marginRight: '5%',
  cursor: 'pointer',
  opacity: '0.5'
});
const Icon2 = styled('img')({
  width: '14px',
  height: '14px',
  marginLeft: 5,
  marginRight: 5,
  cursor: 'pointer',
  opacity: '0.5'
});
const IconHr = styled('img')({
  width: '14px',
  height: '2px',
  marginLeft: 5,
  marginRight: '5%',
  cursor: 'pointer',
  padding: 5,
});

const QusetionIcon = styled('img')({
  width: '20px',
  height: '20px',
  marginLeft: 5,
  marginRight: 5,
  opacity: '0.4',
});
const AutoText = styled('p')({
  fontSize: '16px',
  fontWeight: '600',
  fontFamily: 'Inter',
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
  color: "transparent",
  backgroundClip: "text",
});
const Route = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight:'5%',
  marginLeft:'5%'
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
const CustomButtonActiveCoin = styled(Button)({
  borderRadius: '100px',
  backgroundColor: '#f2f2f2',
  padding: '3px 10px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#555555',
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

type RouteWithValidQuotes = {};
type BestRoute = {
  route: RouteWithValidQuotes[];
  protocol: string;
  proportion: string;
};
type LiquiditySource = {
  protocol: string;
  amountSavedInUSD: number;
  minimumReceived: number;
  minimumReceivedInUSD: number;
  gasEstimateInETH: number;
  gasEstimateInUSD: number;
};
export type SwapRouterProps = {
  btnTitle: String;
  liquiditySources: LiquiditySource[] | null;
  router: BestRoute[] | null;
};
const SwapRouter = (props: SwapRouterProps) => {
  const [Slider, setSlider] = React.useState<Boolean>(false);
  const [AddEntey, setAddEntey] = React.useState<Boolean>(false);
  return props.btnTitle === 'Connect Wallet' ? (
    <>
      <MainContent>
        <ShortView>
          <ETH>1 ETH = 4,008.2766 USDT</ETH>
          <ImgVarticalShort src={ShortVartical} />
        </ShortView>
        <ImgDownArrow
          onClick={() => {
            setSlider(!Slider);
          }}
          src={Slider === true ? TopArrow : DownArrow}
          alt="Image"
        />
      </MainContent>
      {Slider === true ? (
        <>
          <UsdtList>
            <MainTitleView>
              <Div>
                <Title>1inch</Title>
                <CustomButtonActive>Save $12.20</CustomButtonActive>
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
                <CustomButtonActive>Save $12.20</CustomButtonActive>
              </Div>
              <AmountDisebal>2442.57</AmountDisebal>
            </MainTitleView>
            <MainTitleView>
              <Span>TXN Cost 0.0161 = (~$39.51)</Span>
              <Span>~$2,451</Span>
            </MainTitleView>
          </UsdtList>
          <AutoRoute>
            <Div2>
              <Icon2 src={trans} alt="Image" />
              <AutoText>Auto Router</AutoText>
              <QusetionIcon src={Question} alt="image" />
            </Div2>
            {AddEntey === true ? (
              <IconHr
                onClick={() => {
                  setAddEntey(!AddEntey);
                }}
                src={hr}
                alt="image"
              />
            ) : (
              <Icon
                onClick={() => {
                  setAddEntey(!AddEntey);
                }}
                src={plus}
                alt="image"
              />
            )}
          </AutoRoute>
          {AddEntey === true ? (
            <Route>
              <CView>
                <CoinImg src={Coin} alt="image" />
                <CustomButtonActiveCoin>v3 - 100%</CustomButtonActiveCoin>
              </CView>
              <CView>
                <CViewImg src={Coin} alt="image" />
                <CViewImgTow src={Coin6} alt="image" />
                <CustomButtonActiveCoin>0.05%</CustomButtonActiveCoin>
              </CView>
              <CView>
                <CViewImgThree src={Coin6} alt="image" />
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
