import styled from '@emotion/styled';
import { Button, FormControl, Input, MenuItem, Select } from '@mui/material';
import React, { Component, useEffect } from 'react';
import menu from '../../assets/icon/menu.png';
import DownAero from '../../assets/icon/DownAero.png';
import UpDown from '../../assets/icon/UpDown.png';
import ShortVartical from '../../assets/icon/ShortVartical.png';
import trans from '../../assets/icon/trans.png';
import Question from '../../assets/icon/Question.png';
import plus from '../../assets/icon/plus.png';
import TopAero from '../../assets/icon/TopAero.png';
import Coin from '../../assets/icon/coin.png';
import Coin6 from '../../assets/icon/coin3.png';
import hr from '../../assets/icon/hr.png';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { onModelOpen, onReceiveCoin, onSelectCoin } from '../../redux/actionCreators';
import { useSelector } from 'react-redux';

const MainDiv = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
});
const SwapDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
  cursor: 'pointer',
  paddingTop: 15,
});

const Swap = styled('span')({
  fontSize: '24px',
  fontWeight: '600',
  color: 'black',
  fontFamily: 'Inter',
});
const Pay = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: 'black',
  fontFamily: 'Inter',
});
const Max = styled('span')({
  fontSize: '16px',
  fontWeight: '500',
  color: '#BB36FF',
  fontFamily: 'Inter',
});
const TextInput = styled('input')({
  width: '90%',
  borderBottom: 'none',
  border: 'none',
  height: '52px',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  backgroundColor: 'transparent',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});
const ReceiveMain = styled('div')({
  backgroundColor: '#e8e8e8',
  marginTop: '10%',
  position: 'relative',
  paddingBottom: '10%',
  paddingTop: '10px',
});
const YouReceive = styled('span')({
  padding: 20,
  fontFamily: 'inter',
  fontWeight: '500',
  fontSize: 16,
});
const UpDownImage = styled('img')({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 100,
  boxShadow: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.1))',
  position: 'absolute',
  top: -20,
  left: '40%',
  cursor: 'pointer',
});
const MainViewInputToken = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#e8e8e8',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 16,
  paddingLeft: 10,
  height: 70,
  marginTop: 10,
});
const MainViewInput = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  marginLeft: 15,
  marginRight: 15,
  borderRadius: 16,
  paddingLeft: 10,
  height: 70,
  marginTop: 10,
});
const OrderBtn = styled(Button)({
  margin: 15,
  width: '90%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '10%',
  marginTop: '10%',
  textTransform: 'initial',
});
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
const DetailView = styled('div')({
  backgroundColor: '#F7F7F7',
  width: '80%',
  margin: 'auto',
  display: 'block',
  padding: 10,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
});
const Expected = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
});
const ItemText = styled('div')({
  padding: 10,
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '500',
  color: '#000000',
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
const SelectMain = styled('div')({
  borderRadius: '100px',
  height: '36px',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
});
const SelectMainDarkCoin = styled('div')({
  borderRadius: '100px',
  height: '36px',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#d9d9d9',
  display: 'flex',
  alignItems: 'center',
});

const CoinImgTag = styled('img')({
  height: '36px',
  width: '36px',
});
const CoinTitle = styled('p')({
  fontFamily: 'Inter',
  fontWeight: '600',
  fontSize: '16px',
  color: 'black',
  marginLeft: 10,
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const CView = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

type ComponentProps = {
  btnTitle: String;
};

const Swapmodel = (props: ComponentProps) => {
  const dispatch: any = useDispatch();
  const [age, setAge] = React.useState<String>('');
  const [Token, setToken] = React.useState<String>('');
  const [Slider, setSlider] = React.useState<Boolean>(false);
  const [AddEntey, setAddEntey] = React.useState<Boolean>(false);
  const onModel = (article: any) => {
    dispatch(onModelOpen(article));
  };
  const onSelectIcon = (coin: any) => {
    dispatch(onSelectCoin(coin));
  };
  const onReceiveIcon = (coin: any) => {
    dispatch(onReceiveCoin(coin));
  };
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);
  const ReceiveCoin: any = useSelector((state: ArticleState) => state.receiveCoinDetail);
  const ConnectWallet: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const onChangeToken = () => {
    onSelectIcon(ReceiveCoin);
    onReceiveIcon(CoinDetail);
  };
  return (
    <>
      <MainDiv>
        <SwapDiv>
          <Swap>Swap</Swap>
          <img
            src={menu}
            onClick={() => {
              onModel('Transaction');
            }}
          />
        </SwapDiv>
        <SwapDiv>
          <Pay>You Pay</Pay>
          <Max>Max 0 ETH</Max>
        </SwapDiv>
        <MainViewInputToken>
          <TextInput placeholder="0" />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <SelectMain
              onClick={() => {
                onModel('SelectToken');
              }}
            >
              <CoinImgTag src={CoinDetail.image} />
              <CoinTitle>{CoinDetail.name}</CoinTitle>
              <CoinDropIcon src={DownAero} />
            </SelectMain>
          </FormControl>
        </MainViewInputToken>
        <ReceiveMain>
          <UpDownImage
            src={UpDown}
            onClick={() => {
              onChangeToken();
            }}
          />
          <YouReceive>You Receive</YouReceive>
          <MainViewInput>
            <TextInput placeholder="0" />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <SelectMainDarkCoin
                onClick={() => {
                  onModel('ReceiveToken');
                }}
              >
                <CoinImgTag src={ReceiveCoin.image} />
                <CoinTitle>{ReceiveCoin.name}</CoinTitle>
                <CoinDropIcon src={DownAero} />
              </SelectMainDarkCoin>
            </FormControl>
          </MainViewInput>
        </ReceiveMain>
        {props.btnTitle === 'Connect Wallet' ? (
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
        ) : null}
        <OrderBtn>{ConnectWallet.name !== '' && CoinNetwork.name !== '' ? 'Swap' : props.btnTitle}</OrderBtn>
      </MainDiv>
      {props.btnTitle === 'Connect Wallet' ? (
        ConnectWallet.name !== '' && CoinNetwork.name !== '' ? (
          <DetailView>
            <Expected>
              <ItemText>Expected Output</ItemText>
              <ItemText>1.46 USDT</ItemText>
            </Expected>
            <Expected>
              <ItemText>Price Impact</ItemText>
              <ItemText>-0.01%</ItemText>
            </Expected>
            <hr />
            <Expected>
              <ItemText>Minimum received after slippage (0.50%)</ItemText>
              <ItemText>1.46 USDT</ItemText>
            </Expected>
          </DetailView>
        ) : null
      ) : null}
    </>
  );
};

export default Swapmodel;
