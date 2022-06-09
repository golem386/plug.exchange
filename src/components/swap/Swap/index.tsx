// this is a swap index file and Provide a Swap model layout
import styled from '@emotion/styled';
import { Button, Modal } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import SwapConfirmModal from './SwapConfirmModal';
import { FormControl } from '@mui/material';
import menu from '../../../assets/icon/menu.png';
import { useDispatch } from 'react-redux';
import { onModelOpen } from '../../../store/Actions';
import DownArrow from '../../../assets/icon/DownArrow.png';
import { onReceiveCoin, onSelectCoin } from '../../../store/Actions';
import UpDown from '../../../assets/icon/UpDown.png';
import ShortVartical from '../../../assets/icon/ShortVartical.png';
import trans from '../../../assets/icon/trans.png';
import Question from '../../../assets/icon/Question.svg';
import plus from '../../../assets/icon/plus.png';
import TopArrow from '../../../assets/icon/TopArrow.png';
import Coin from '../../../assets/icon/coin.png';
import Coin6 from '../../../assets/icon/coin3.png';
import hr from '../../../assets/icon/hr.png';

const MainDiv = styled('div')({
  borderRadius: '24px',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '100%',
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
const Boxes = styled('div')({
  backgroundColor: 'white',
  borderRadius: 24,
  position: 'absolute',
  width: 'auto',
  top: '50%',
  left: '50%',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  transform: 'translate(-50%, -50%)',
});
const SwapHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 15,
  paddingRight: 15,
  cursor: 'pointer',
  paddingTop: 15,
});

const SwapTitle = styled('span')({
  fontSize: '24px',
  fontWeight: '600',
  color: 'black',
  fontFamily: 'Inter',
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
const CurrencyInput = styled('div')({
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
const SelectMain = styled('div')({
  borderRadius: '100px',
  height: '36px',
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
});
const CurrencyOutput = styled('div')({
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

const SwapArrow = styled('img')({
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 100,
  boxShadow: 'drop-shadow(0px 15px 25px rgba(0, 0, 0, 0.1))',
  position: 'absolute',
  top: -20,
  left: '40%',
  cursor: 'pointer',
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
const ImgDownArrow = styled('img')({
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
const CustomButtonActiveCoin = styled(Button)({
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
const SwapTransactionDetails = styled('div')({
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
const CView = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const SwapRouter = styled('div')({});
export type CurrencyInputProps = {
  //   userInputTokenBalance: number;
  //   showMaxButton: boolean;
  //   inputValue: number;
  //   inputOnChangeHandler: () => void;
  //   toggleCurrencyModal: () => void;
  //   selectedCurrency: any;
};
export type CurrencyOutputProps = {
  //   inputOnChangeHandler: () => void;
  //   inputValue: number;
  //   selectedCurrency: any;
  //   toggleCurrencyModal: () => void;
};
export type SwapArrowProps = {
  // switchCurrencyHandler: Function
};
export type SwapHeaderProps = {
  // transactionSettingHandler: () => void
};
type LiquiditySource = {
  protocol: string;
  amountSavedInUSD: number;
  minimumReceived: number;
  minimumReceivedInUSD: number;
  gasEstimateInETH: number;
  gasEstimateInUSD: number;
};
type RouteWithValidQuotes = {};
type BestRoute = {
  route: RouteWithValidQuotes[];
  protocol: string;
  proportion: string;
};
export type SwapRouterProps = {
  btnTitle: String;
  // liquiditySources: LiquiditySource[];
  // router: BestRoute[];
};
export type SwapTransactionDetailsProps = {
  btnTitle: String;
  // expectedOutput: number;
  // priceImpact: number;
  // minReceived: number;
  // maxSent: number;
  // allowedSlippage: number;
};
export type SwapProps = {
  btnTitle: String;
};
const Swap = (props: SwapProps) => {
  const dispatch: any = useDispatch();
  const CoinDetail: any = useSelector((state: ArticleState) => state.CoinDetail);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const ConnectWallet: any = useSelector((state: ArticleState) => state.ConnectWallet);
  const CoinNetwork: any = useSelector((state: ArticleState) => state.ConnectNetwork);
  const ReceiveCoin: any = useSelector((state: ArticleState) => state.receiveCoinDetail);
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
  const onChangeToken = () => {
    onSelectIcon(ReceiveCoin);
    onReceiveIcon(CoinDetail);
  };
  return (
    <>
      <MainDiv>
        <SwapHeader>
          <SwapTitle>Swap</SwapTitle>
          <img
            src={menu}
            onClick={() => {
              onModel('Transaction');
            }}
            alt="Menu"
          />
        </SwapHeader>
        <SwapDiv>
          <Pay>You Pay</Pay>
          <Max>Max 0 ETH</Max>
        </SwapDiv>
        <CurrencyInput>
          <TextInput placeholder="0" />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <SelectMain
              onClick={() => {
                onModel('SelectToken');
              }}
            >
              <CoinImgTag src={CoinDetail.image} alt="Coin" />
              <CoinTitle>{CoinDetail.name}</CoinTitle>
              <CoinDropIcon src={DownArrow} alt="DownArrow" />
            </SelectMain>
          </FormControl>
        </CurrencyInput>
        <CurrencyOutput>
          <SwapArrow
            src={UpDown}
            onClick={() => {
              onChangeToken();
            }}
            alt="Icon"
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
                <CoinImgTag src={ReceiveCoin.image} alt="Icon" />
                <CoinTitle>{ReceiveCoin.name}</CoinTitle>
                <CoinDropIcon src={DownArrow} alt="DownArrow" />
              </SelectMainDarkCoin>
            </FormControl>
          </MainViewInput>
        </CurrencyOutput>
        {props.btnTitle === 'Connect Wallet' ? (
          <SwapRouter>
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
                  <Div>
                    <Icon src={trans} alt="Image" />
                    <AutoText>Auto Router</AutoText>
                    <QusetionIcon src={Question} alt="image" />
                  </Div>
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
          </SwapRouter>
        ) : null}
        <div>
          <OrderBtn onClick={ConnectWallet.name !== '' && CoinNetwork.name !== '' ? handleOpen : () => {}}>
            {ConnectWallet.name !== '' && CoinNetwork.name !== '' ? 'Swap' : props.btnTitle}
          </OrderBtn>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Boxes>
              {/* <TransactionWaiting /> */}
              {/* <TransactionCompleted handleClose={() =>{handleClose()}}/> */}
              <SwapConfirmModal
                handleClose={() => {
                  handleClose();
                }}
              />
            </Boxes>
          </Modal>
        </div>
      </MainDiv>
      {props.btnTitle === 'Connect Wallet' ? (
        ConnectWallet.name !== '' && CoinNetwork.name !== '' ? (
          <SwapTransactionDetails>
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
          </SwapTransactionDetails>
        ) : null
      ) : null}
    </>
  );
};

export default Swap;
