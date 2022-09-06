import { styled } from '@mui/system';
import { Button } from '@mui/material';
import React from 'react';
import { ThemeProps } from 'src/theme';

const ETH = styled('p')((props: { theme: ThemeProps }) => ({
  background: props.theme.palette.color.active,
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
const SwapRouterButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop:'5%'
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
const Title = styled('h3')((props:ThemeProps) =>({
  color: 'black',
  fontSize: props.theme.typography.RoutTitle,
  fontWeight: 600,
}));
const TitleDisebal = styled('h3')((props:ThemeProps) => ({
  color: '#949494',
  fontSize: props.theme.typography.RoutTitle,
  fontWeight: 600,
}));
const CustomButtonActive = styled(Button)((props: { theme: ThemeProps }) => ({
  borderRadius: '100px',
  background: props.theme.palette.color.active,
  padding: '3px 10px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#FFFFFF',
  textTransform: 'lowercase',
  marginLeft: 15,
  marginRight: 5,
  height: '28px',
}));

const UsdtListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft:'5%',
  marginRight:'5%',
  marginBottom:'3%',
  marginTop:'3%'
});
const Amount = styled('h3')((props:ThemeProps) =>({
  fontSize: props.theme.typography.RoutTitle,
  fontWeight: '600',
}));
const AmountDisebal = styled('h3')((props:ThemeProps) =>({
  fontSize: props.theme.typography.RoutTitle,
  fontWeight: '600',
  color: '#949494',
}));
const ListTile = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const RoutButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft:'5%'
});
const Span = styled('span')({
  fontWeight: '500',
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

const Icon2 = styled('img')({
  width: '20.5px',
  height: '18px',
  marginLeft: 5,
  marginRight: 5,
  cursor: 'pointer',
});
const IconHr = styled('img')((props: { theme: ThemeProps, isActive : boolean }) => ({
  width: props.isActive === true ? 27 : 25,
  height: props.isActive === true ? 13 : 25,
  marginLeft: 5,
  marginRight: '5%',
  cursor: 'pointer',
  padding: 5,
  opacity: props.isActive ? '' : '0.5',
}));

const QusetionIcon = styled('img')({
  width: '20px',
  height: '20px',
  marginLeft: 5,
  marginRight: 5,
  opacity: '0.4',
});
const AutoText = styled('p')((props: { theme: ThemeProps }) => ({
  fontSize: '16px',
  fontWeight: '600',
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
}));
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
const CustomButtonActiveCoin = styled(Button)((props: { theme: ThemeProps }) => ({
  borderRadius: '100px',
  backgroundColor: props.theme.palette.color.active,
  padding: '3px 10px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#555555',
  textTransform: 'lowercase',
  marginLeft: 5,
  marginRight: 5,
  height: '28px',
}));
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
      <SwapRouterButton>
        <ShortView>
          <ETH>1 ETH = 4,008.2766 USDT</ETH>
          <ImgVarticalShort src="/images/shortVartical.png" />
        </ShortView>
        <ImgDownArrow
          onClick={() => {
            setSlider(!Slider);
          }}
          src={Slider === true ? '/images/topArrow.png' : '/images/downArrow.png'}
          alt="Image"
        />
      </SwapRouterButton>
      {Slider === true ? (
        <>
          <UsdtList>
            <UsdtListItem>
              <ListTile>
                <Title>1inch</Title>
                <CustomButtonActive>Save $12.20</CustomButtonActive>
              </ListTile>
              <Amount>2442.57</Amount>
            </UsdtListItem>
            <UsdtListItem>
              <Span>TXN Cost 0.0161 = (~$39.51)</Span>
              <Span>~$2,451</Span>
            </UsdtListItem>
          </UsdtList>
          <UsdtList>
            <UsdtListItem>
              <ListTile>
                <TitleDisebal>1inch</TitleDisebal>
                <CustomButtonActive>Save $12.20</CustomButtonActive>
              </ListTile>
              <AmountDisebal>2442.57</AmountDisebal>
            </UsdtListItem>
            <UsdtListItem>
              <Span>TXN Cost 0.0161 = (~$39.51)</Span>
              <Span>~$2,451</Span>
            </UsdtListItem>
          </UsdtList>
          <AutoRoute>
            <RoutButton>
              <Icon2 src="/images/trans.png" alt="Image" />
              <AutoText>Auto Router</AutoText>
              <QusetionIcon src="/images/puestion.svg" alt="image" />
            </RoutButton>
              <IconHr
                isActive={AddEntey}
                onClick={() => {
                  setAddEntey(!AddEntey);
                }}
                src={AddEntey === true ? "/images/hr.png" : "/images/plus.png"}
                alt="image"
              />
          </AutoRoute>
          {AddEntey === true ? (
            <Route>
              <CView>
                <CoinImg src="/images/coin.png" alt="image" />
                <CustomButtonActiveCoin>v3 - 100%</CustomButtonActiveCoin>
              </CView>
              <CView>
                <CViewImg src="/images/coin.png" alt="image" />
                <CViewImgTow src="/images/coin3.png" alt="image" />
                <CustomButtonActiveCoin>0.05%</CustomButtonActiveCoin>
              </CView>
              <CView>
                <CViewImgThree src="/images/coin3.png" alt="image" />
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
