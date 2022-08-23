import styled from '@emotion/styled';
import { Button } from '@mui/material';

const MainDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  overflow: 'auto',
});
const Form = styled('div')({
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  width: '40%',
  borderRadius: 24,
  marginTop: '5%',
});
const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const Title = styled('span')({
  fontWeight: '600',
  fontSize: '24px',
  marginLeft: '20px',
  marginTop: 20,
  marginBottom: 10,
});
const Img = styled('img')({
  height: '20px',
  width: 20,
  marginTop: 20,
  marginRight: 20,
  marginBottom: 10,
});
const From = styled('div')({
  backgroundColor: '#f7f7f7',
  padding: 20,
});
const To = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 10,
});
const ToMain = styled('div')({
  padding: 20,
});

const FromText = styled('span')({
  fontSize: 16,
  fontWeight: 500,
  color: '#000000',
  opacity: 0.65,
});
const Drop = styled('div')({
  backgroundColor: 'white',
  borderRadius: 10,
  height: 60,
  width: 175,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: 20,
});
const Drop2 = styled('div')({
  backgroundColor: '#f7f7f7',
  borderRadius: 10,
  height: 44,
  width: 153,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
});

const DropImg = styled('img')({
  borderRadius: 100,
  height: '44px',
  width: '44px',
});
const DropImg2 = styled('img')({
  borderRadius: 100,
  height: '36px',
  width: '36px',
});
const DropImg3 = styled('img')({
  borderRadius: 100,
  height: '37px',
  width: '37px',
  position: 'absolute',
  left: -3,
});

const DroDownImg = styled('img')({
  height: '7.78px',
  width: '12.73px',
});
const DroDownImg2 = styled('img')({
  height: '6.48px',
  width: '10.61px',
});
const Text = styled('span')({
  fontWeight: 600,
  fontSize: '18px',
  color: '#000000',
  opacity: 0.65,
});
const Text2 = styled('span')({
  fontWeight: 600,
  fontSize: '16px',
  color: '#000000',
  opacity: 0.65,
});
const Text3 = styled('span')({
  fontWeight: 500,
  fontSize: '16px',
  color: '#000000',
  opacity: 0.65,
});

const Max = styled('span')({
  fontWeight: 500,
  fontSize: '16px',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'transparent',
  backgroundClip: 'text',
});

const Balance = styled('span')({
  fontWeight: 500,
  fontSize: '16px',
  color: '#000000',
  opacity: 0.65,
  marginTop: 20,
});
const InputMain = styled('div')({
  borderRadius: 10,
  marginTop: 20,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: 60,
  marginBottom: 20,
});
const InputMain2 = styled('div')({
  borderRadius: 16,
  marginTop: 20,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: 60,
  marginBottom: 20,
  marginLeft: 20,
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
});
const Imput = styled('input')({
  height: 44,
  width: '50%',
  border: 'none',
  borderRadius: 5,
  fontSize: '24px',
  fontWeight: '500',
  fontStyle: 'Inter',
  color: 'black',
  '&:focus-visible': {
    border: 'none',
    outline: 'none',
  },
});

const CoinDrop = styled('div')({
  backgroundColor: '#e4e4e4',
  height: 52,
  width: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 16,
});

const Drop3 = styled('div')({
  backgroundColor: 'white',
  borderRadius: 50,
  height: 36,
  width: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  position: 'relative',
  marginLeft: 10,
  marginRight: 10,
});
const Drop4 = styled('div')({
  backgroundColor: '#e4e4e4',
  borderRadius: 50,
  height: 36,
  width: 111,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  position: 'relative',
});
const Content = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '70%',
  marginLeft: 30,
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
const TitleDisebal = styled('p')({
  color: '#949494',
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
  marginLeft: '5%',
  marginRight: '5%',
});
const Amount = styled('p')({
  fontSize: '20px',
  fontWeight: '600',
});
const Div = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const Span = styled('span')({
  fontWeight: '500',
  fontSize: '14px',
  color: '#949494',
  opacity: '0.4',
});
const ShowMore = styled('p')({
  textAlign: 'center',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'transparent',
  backgroundClip: 'text',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
});
const DownArrowImg = styled('img')({
  height: 11,
  paddingLeft: 10,
});
const OrderBtn = styled(Button)({
  margin: 15,
  width: '93%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'white',
  borderRadius: '12px',
  marginBottom: '6%',
  marginTop: '5%',
  textTransform: 'initial',
});
const Title2 = styled('p')({
  color: 'black',
  fontSize: '20px',
  fontWeight: 600,
});

const DetailView = styled('div')({
  backgroundColor: '#F7F7F7',
  width: '33%',
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
const ItemText = styled('span')({
  padding: 10,
  fontSize: '16px',
  fontWeight: '500',
  color: 'black',
});
const ItemText2 = styled('span')({
  padding: 10,
  fontSize: '16px',
  fontWeight: '500',
  color: '#010101',
});
const CustomButtom = styled(Button)({
  borderRadius: 100,
  margin: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  '&:hover': {
    borderRadius: 100,
    margin: 10,
    background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    padding: '20px 0px',
    color: '#000000',
    opacity: '1',
  },
});
const Footer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10%',
});

const Crosschain = () => {
  return (
    <>
      <MainDiv>
        <Form>
          <Header>
            <Title>Swap</Title>
            <Img src="/images/menu.png" />
          </Header>
          <From>
            <FromText>From Chain</FromText>
            <Header>
              <Drop>
                <DropImg src="/images/coin3.png" />
                <Text>SOL</Text>
                <DroDownImg src="/images/downArrow.png" />
              </Drop>
              <Balance>Balance: 8.017</Balance>
            </Header>
            <InputMain>
              <Imput type="text" />
              <Max>Max</Max>
              <Drop2>
                <DropImg2 src="/images/coin3.png" />
                <Text2>SOL</Text2>
                <DroDownImg2 src="/images/downArrow.png" />
              </Drop2>
            </InputMain>
          </From>
          <ToMain>
            <To>
              <Text3>To Chain</Text3>
              <Text3>Balance: 3.017</Text3>
            </To>
            <Header>
              <CoinDrop>
                <Drop3>
                  <DropImg3 src="/images/coin3.png" />
                  <Content>
                    <Text>SOL</Text>
                    <DroDownImg src="/images/downArrow.png" />
                  </Content>
                </Drop3>
              </CoinDrop>
              <InputMain2>
                <Imput type="text" />
                <Drop4>
                  <DropImg3 src="/images/coin3.png" />
                  <Content>
                    <Text>SOL</Text>
                    <DroDownImg src="/images/downArrow.png" />
                  </Content>
                </Drop4>
              </InputMain2>
            </Header>
          </ToMain>
          <UsdtList>
            <MainTitleView>
              <Div>
                <Title2>1inch</Title2>
                <CustomButtonActive>Save $12.20</CustomButtonActive>
              </Div>
              <Amount>2442.57</Amount>
            </MainTitleView>
            <MainTitleView>
              <Span>TXN Cost 0.0161 = (~$39.51)</Span>
              <Span>~$2,451</Span>
            </MainTitleView>
          </UsdtList>
          <ShowMore>
            Show More
            <DownArrowImg src="/images/showMore.png" alt="Show" />
          </ShowMore>
          <OrderBtn>Swap</OrderBtn>
        </Form>
      </MainDiv>
      <DetailView>
        <Expected>
          <ItemText>Expected Output</ItemText>
          <ItemText2>1.46 USDT</ItemText2>
        </Expected>
        <Expected>
          <ItemText>Price Impact</ItemText>
          <ItemText2>-0.01%</ItemText2>
        </Expected>
        <hr />
        <Expected>
          <ItemText>Minimum received after slippage (0.50%)</ItemText>
          <ItemText2>1.46 USDT</ItemText2>
        </Expected>
      </DetailView>
    </>
  );
};

export default Crosschain;
