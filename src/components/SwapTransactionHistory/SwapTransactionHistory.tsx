// this file is a WalletDetails file and provide a History
import styled from '@emotion/styled';
import { Menu, Modal, Tab, Tabs } from '@mui/material';
import React from 'react';
import Cros from '../../assets/icon/Cros.png';
import SwapIcon from '../../assets/icon/SwapIcon.png';
import Time from '../../assets/icon/Time.png';
import Left from '../../assets/icon/Left.png';
import Right from '../../assets/icon/Right.png';
import LeftIcon from '../../assets/icon/LeftIcon.png';
import coin from '../../assets/icon/coin.png';
import coin3 from '../../assets/icon/coin3.png';
import Pending from '../../assets/icon/Pending.png'
import Faild from '../../assets/icon/Faild.png'
import Approve from '../../assets/icon/Approve.png'

const Copy = styled('div')({
  paddingLeft: '10px',
  alignItems: 'center',
  display: 'flex',
  '&:hover': {
    backgroundColor: '#f7f7f7',
  },
});
const DropPrice = styled('span')({
  fontSize: '14px',
  fontFamily: 'Inter',
  fontWeight: '600',
  color: '#d4d4d4',
  marginLeft: 10,
});
const FileCopy = styled('img')({
  height: '20px',
  width: '20px',
  paddingRight: '10px',
  cursor: 'pointer',
});
const HistoryDiv = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingLeft: 15,
});
const HistoryTitle = styled('span')({
  fontSize: '16px',
  fontFamily: 'Inter',
  fontWeight: '600',
  color: 'black',
  marginLeft: 10,
  marginBottom: 10,
  marginTop: 10,
});
const MainDiv = styled('div')({
  alignItems: 'center',
  display: 'flex',
  cursor: 'pointer',
});
const CoinPrice = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fafafa',
  padding: '0px 20px',
  fontSize: '16px',
  fontWeight: '600',
  color: 'black',
  fontStyle: 'Inter',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  borderRadius: 16,
  height: 60,
});
const Into = styled('p')({
  backgroundColor: 'white',
  padding: '10px 20px',
  borderRadius: 16,
  marginLeft: 15,
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  fontWeight: 500,
  fontSize: 14,
  fontFamily: 'Inter',
});
const ImageIconDropDown = styled('img')({
  height: '30px',
  width: '30px',
  paddingRight: '20px',
});
const CustomMenu = styled(Menu)({
  marginTop: '5%',
});
const CoinDropIcon = styled('img')({
  height: '5.19px',
  width: '8.49px',
  marginLeft: 10,
});
const Boxes = styled('div')({
  backgroundColor: 'white',
  borderRadius: 24,
  position: 'absolute',
  width: '60%',
  height: '85%',
  // padding: 25,
  top: '50%',
  left: '50%',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  transform: 'translate(-50%, -50%)',
});
const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 10,
});
const HeaderText = styled('span')({
  fontWeight: 600,
  fontSize: 24,
  fontFamily: 'Inter',
});
const Image = styled('img')({
  height: 18,
  width: 18,
});
const Footer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
});
const Count = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: 10,
  paddingRight: 10,
});
const Item = styled('span')({
  fontWeight: 500,
  fontSize: 16,
  fontFamily: 'Intel',
  color: '#b3b3b3',
});
const ImageIcon = styled('img')({
  height: 10,
  width: 8,
  backgroundColor: '#ededed',
  padding: 15,
  borderRadius: 100,
  margin: 3,
});
const Body = styled('div')({
  overflow: 'auto',
  height: '80%',
  paddingLeft: 20,
  paddingRight: 20,
});
const Main = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '7px',
});
const Maindiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const StatusImage = styled('img')({
  height: 52,
  width: 52,
});
const Div = styled('div')({
  marginLeft: 5,
});
const StatusText = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
});
const TextPink = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: 16,
  color: '#BB36FF',
});
const TimeText = styled('span')({
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: 14,
  color: '#e8e8e8',
});
const TimeImage = styled('img')({
  height: 12,
  width: 12,
  opacity: 0.2,
});
const Name = styled('p')({
  fontFamily: 'Inter',
  fontWeight: 800,
  fontSize: 14,
});
const Span = styled('span')({
  fontFamily: 'Inter',
  fontWaight: 600,
  fontSize: '16px',
  color: 'black',
  opacity: 0.65,
  alignItems: 'center',
  display: 'flex',
});
const Img = styled('img')({
  opacity: 0.65,
  marginRight: 5,
  marginLeft: 5,
});
const CoinImg = styled('img')({
  marginRight: 5,
});
const Status = styled('div')({});
const Share = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const Eth = styled('div')({});

type SwapTransactionHistoryType = {
  close: Function;
};
const CurrencySwitch = styled('div')({
  fontFamily: 'Inter',
  fontSize: 'calc(0.75em + 1vw)',
  display: 'flex',
});
const TextSpan = styled('span')({
  fontFamily: 'Inter',
  fontSize: 'calc(0.75em + 1vw)',
  opacity: '0.3',
  paddingLeft: 5,
});
const ShortIcon = styled('img')({
  height: '25px',
  width: '25px',
  marginLeft: '20px',
  marginRight: '20px',
});
const CurrencyPriceUSD = styled('span')({
  fontFamily: 'Inter',
  fontSize: '44px',
  fontWeight: '600',
});
const CurrencyPriceChange = styled('span')({
  color: '#DC7FB6',
  fontSize: '16px',
  fontWeight: '600',
  marginLeft: '1.5%',
  fontFamily: 'Inter',
});
const View = styled('div')({});
const PairData = styled('div')({
  width: '100%',
});
const CustomButton = styled(Tab)({
  borderRadius: '100px',
  padding: '5px 10px',
  fontSize: '16px',
  fontWeight: '600',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  fontFamily: 'Inter',
});
const CustomButtonActive = styled(Tab)({
  borderRadius: '100px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  fontSize: '16px',
  fontWeight: '600',
  color: 'white!important',
  fontStyle: 'normal',
  opacity: '0.65',
  textTransform: 'initial',
  marginLeft: 5,
  marginRight: 5,
  fontFamily: 'Inter',
});

const SwapTransactionHistory = (props: SwapTransactionHistoryType) => {
  const [value, setValue] = React.useState('All');
  return (
    <>
      <Header>
        <HeaderText>Transaction History</HeaderText>
        <Image
          src={Cros}
          onClick={() => {
            props.close();
          }}
        />
      </Header>
      {value === 'All' ? (
        <CustomButtonActive label="All" />
      ) : (
        <CustomButton
          label="All"
          onClick={() => {
            setValue('All');
          }}
        />
      )}
      {value === 'Swaps' ? (
        <CustomButtonActive label="Swaps" />
      ) : (
        <CustomButton
          label="Swaps"
          onClick={() => {
            setValue('Swaps');
          }}
        />
      )}
      {value === 'All' ? (
        <Body>
          <Span>January 18, 2022</Span>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={Pending} />
                <Div>
                  <StatusText>Pending</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={Approve} />
                <Div>
                  <StatusText>Approve</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={Faild} />
                <Div>
                  <StatusText>Failed</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Span>January 17, 2022</Span>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Span>January 18, 2022</Span>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
        </Body>
      ) : (
        <Body>
            <Span>January 17, 2022</Span>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Span>January 17, 2022</Span>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Span>January 18, 2022</Span>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
              <Img src={LeftIcon} height={15} width={16} />{' '}
              <Span>
                <CoinImg src={coin3} />
                570.66 USDT
              </Span>
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
          <Main>
            <Status>
              <Maindiv>
                <StatusImage src={SwapIcon} />
                <Div>
                  <StatusText>Swap</StatusText>
                  <br />
                  <TextPink>
                    0x37...0420{' '}
                    <TimeText>
                      <TimeImage src={Time} /> 9:16 PM
                    </TimeText>
                  </TextPink>
                </Div>
              </Maindiv>
            </Status>
            <Share>
              <Span>
                <CoinImg src={coin} />
                0.4543 ETH
              </Span>{' '}
            </Share>
            <Eth>
              <Span>0.2273 ETH</Span>
            </Eth>
          </Main>
        </Body>
      )}

      <Footer>
        <Count>
          <Item>Items Per Page</Item>
        </Count>
        <Count>
          <Item>2-10 of 17</Item>
          <ImageIcon src={Left} />
          <ImageIcon src={Right} />
        </Count>
      </Footer>
    </>
  );
};

export default SwapTransactionHistory;
