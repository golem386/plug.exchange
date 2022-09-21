import { styled } from '@mui/system';
import { Button } from '@mui/material';
import React from 'react';
import { ThemeProps } from 'theme';
import IconGlobalStyleComponent from 'theme/GlobalComponent/iconGlobalStyleComponent';
const ETH = styled('p')((props: { theme?: ThemeProps }) => ({
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  fontWeight: 500,
}));
const ShortView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '7%',
});
const SwapRouterButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '5%',
});
const UsdtList = styled('div')({
  borderRadius: '16px',
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  borderWidth: '2px',
  borderColor: 'rgba(0, 0, 0, 0.1)',
  borderStyle: 'solid',
  margin: 10,
  marginLeft: '5%',
  marginRight: '5%',
  height: '92px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#ededed',
    borderColor: '#BB36FF',
  },
});
const Title = styled('h3')((props: { theme?: ThemeProps }) => ({
  color: 'black',
  fontSize: props.theme && props.theme.typography.routeTitle.fontSize,
  fontWeight: 600,
}));
const TitleDisebal = styled('h3')((props: { theme?: ThemeProps }) => ({
  color: '#949494',
  fontSize: props.theme && props.theme.typography.routeTitle.fontSize,
  fontWeight: 600,
}));
const CustomButtonActive = styled(Button)((props: { isCoin: boolean; theme?: ThemeProps }) => ({
  borderRadius: '100px',
  background: props.theme && props.theme.palette.color.active,
  padding: '3px 10px',
  fontSize: '14px',
  fontWeight: '600',
  color: props.isCoin ? '#555555' : '#FFFFFF',
  textTransform: 'lowercase',
  marginLeft: 15,
  marginRight: 5,
  height: '28px',
}));
const UsdtListItem = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '5%',
  marginRight: '5%',
  marginBottom: '3%',
  marginTop: '3%',
});
const Amount = styled('h3')((props: { theme?: ThemeProps }) => ({
  fontSize: props.theme && props.theme.typography.routeTitle.fontSize,
  fontWeight: '600',
}));
const AmountDisebal = styled('h3')((props: { theme?: ThemeProps }) => ({
  fontSize: props.theme && props.theme.typography.routeTitle.fontSize,
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
  marginLeft: '5%',
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

// const QusetionIcon = styled('img')({
//   width: '20px',
//   height: '20px',
//   marginLeft: 5,
//   marginRight: 5,
//   opacity: '0.4',
// });
const AutoText = styled('p')((props: { theme?: ThemeProps }) => ({
  fontSize: '16px',
  fontWeight: '600',
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
}));
const Route = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginRight: '5%',
  marginLeft: '5%',
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
          <IconGlobalStyleComponent
            onClick={() => {}}
            ml={10}
            mr={0}
            height={15}
            width={15}
            img="/images/shortVartical.png"
            opecity={1}
          />
        </ShortView>
        <IconGlobalStyleComponent
          onClick={() => {
            setSlider(!Slider);
          }}
          ml={0}
          mr={30}
          height={8}
          width={11}
          img={Slider === true ? '/images/topArrow.png' : '/images/downArrow.png'}
          opecity={1}
        />
      </SwapRouterButton>
      {Slider === true ? (
        <>
          <UsdtList>
            <UsdtListItem>
              <ListTile>
                <Title>1inch</Title>
                <CustomButtonActive isCoin={false}>Save $12.20</CustomButtonActive>
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
                <CustomButtonActive isCoin={false}>Save $12.20</CustomButtonActive>
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
              <IconGlobalStyleComponent
                onClick={() => {}}
                ml={0}
                mr={10}
                height={20}
                width={20}
                img="/images/trans.png"
                opecity={1}
              />
              <AutoText>Auto Router</AutoText>
              {/* <QusetionIcon src="/images/puestion.svg" alt="image" /> */}
              <IconGlobalStyleComponent
                onClick={() => {}}
                ml={10}
                mr={0}
                height={20}
                width={20}
                img="/images/puestion.svg"
                opecity={0.3}
              />
            </RoutButton>
            <IconGlobalStyleComponent
              onClick={() => {
                setAddEntey(!AddEntey);
              }}
              ml={0}
              mr={20}
              height={AddEntey ? 3 : 30}
              width={AddEntey ? 15 : 30}
              img={AddEntey === true ? '/images/hr.png' : '/images/plus.png'}
              opecity={0.3}
            />
          </AutoRoute>
          {AddEntey === true ? (
            <Route>
              <CView>
                <CoinImg src="/images/coin.png" alt="image" />
                <CustomButtonActive isCoin={true}>v3 - 100%</CustomButtonActive>
              </CView>
              <CView>
                <CViewImg src="/images/coin.png" alt="image" />
                <CViewImgTow src="/images/coin3.png" alt="image" />
                <CustomButtonActive isCoin={true}>0.05%</CustomButtonActive>
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
