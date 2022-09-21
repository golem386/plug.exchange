import { styled } from '@mui/system';
import { useState } from 'react';
import Modal from 'components/Modal';
import ContinuewithWallets from '../../components/Crosschain/CrosschainWallets/CrosschainWallets';
import Converting from '../../components/Crosschain/Converting/Converting';
import { ThemeProps } from 'theme';
import IconGlobalStyleComponent from 'theme/GlobalComponent/iconGlobalStyleComponent';
import Buttons from 'theme/Buttons';

const data = [
  {
    title: 'Lifinity > 1inch',
    total: '2442.57',
    tnxcost: 'TXN Cost 0.0161 = (~$39.51)',
    earn: '~$2,451',
  },
  {
    title: 'Lifinity > 1inch',
    total: '2442.57',
    tnxcost: 'TXN Cost 0.0161 = (~$39.51)',
    earn: '~$2,451',
  },
  {
    title: 'Lifinity > 1inch',
    total: '2442.57',
    tnxcost: 'TXN Cost 0.0161 = (~$39.51)',
    earn: '~$2,451',
  },
  {
    title: 'Lifinity > 1inch',
    total: '2442.57',
    tnxcost: 'TXN Cost 0.0161 = (~$39.51)',
    earn: '~$2,451',
  },
];
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
  '@media (max-width: 660px)': {
    width: '100%',
  },
});
const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const Title = styled('h2')({
  fontWeight: '600',
  marginLeft: '20px',
  marginTop: 20,
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

const FromText = styled('p')({
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

// const DroDownImg = styled('img')({
//   height: '7.78px',
//   width: '12.73px',
// });
// const DroDownImg2 = styled('img')({
//   height: '6.48px',
//   width: '10.61px',
// });
const Text = styled('h3')({
  fontWeight: 600,
  color: '#000000',
  opacity: 0.65,
});
const Text2 = styled('p')({
  fontWeight: 600,
  color: '#000000',
  opacity: 0.65,
});
const Text3 = styled('p')({
  fontWeight: 500,
  color: '#000000',
  opacity: 0.65,
});

const Max = styled('p')((props: { theme?: ThemeProps }) => ({
  fontWeight: 500,
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
}));

const Balance = styled('span')({
  fontWeight: 500,
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

const MainTitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginLeft: '5%',
  marginRight: '5%',
  marginTop: '2.5%',
});
const Amount = styled('p')((props: { theme?: ThemeProps }) => ({
  fontSize: props.theme && props.theme.typography.routeTitle.fontSize,
  fontWeight: '600',
}));
const Div = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const Span = styled('p')({
  fontWeight: '500',
  color: '#949494',
  opacity: '0.4',
});
const ShowMore = styled('p')((props: { theme?: ThemeProps }) => ({
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  fontWeight: '600',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const DownArrowImg = styled('img')({
  height: 15,
  paddingLeft: 10,
});

const Title2 = styled('p')((props: { theme?: ThemeProps }) => ({
  color: 'black',
  fontSize: props.theme && props.theme.typography.routeTitle.fontSize,
  fontWeight: 600,
}));

const DetailView = styled('div')({
  backgroundColor: '#F7F7F7',
  width: '33%',
  margin: 'auto',
  display: 'block',
  padding: 10,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  '@media (max-width: 660px)': {
    width: '100%',
  },
});
const Expected = styled('div')({
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'flex',
});
const ItemText = styled('p')({
  padding: 10,
  fontWeight: '500',
  color: 'black',
});
const ItemText2 = styled('p')({
  padding: 10,
  fontWeight: '500',
  color: '#010101',
});

const Routs = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RoutImg = styled('img')({
  height: 24,
  width: 24,
});

const Boxs = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  width: '450px',
  height: 'auto',
  borderRadius: 10,
});

const Crosschain = () => {
  const [open, setOpen] = useState(1);
  const [HighSlippageModalopen, setHighSlippageModalOpen] = useState(false);
  const [ContinueModalOpen, setContinueModalOpen] = useState(false);

  const closeHighSlippageModel = () => {
    setHighSlippageModalOpen(false);
  };
  return (
    <>
      <MainDiv>
        <Form>
          <Header>
            <Title>Swap</Title>
            {/* <Img src="/images/menu.png" /> */}
            <IconGlobalStyleComponent ml={10} mr={30} height={20} width={20} img="/images/menu.png" opecity={0.5} />
          </Header>
          <From>
            <FromText>From Chain</FromText>
            <Header>
              <Drop>
                <DropImg src="/images/coin3.png" />
                <Text>SOL</Text>
                {/* <DroDownImg src="/images/downArrow.png" /> */}
                <IconGlobalStyleComponent
                  ml={0}
                  mr={0}
                  height={8}
                  width={12}
                  img="/images/downArrow.png"
                  opecity={0.5}
                />
              </Drop>
              <Balance>Balance: 8.017</Balance>
            </Header>
            <InputMain>
              <Imput type="text" />
              <Max>Max</Max>
              <Drop2>
                <DropImg2 src="/images/coin3.png" />
                <Text2>SOL</Text2>
                <IconGlobalStyleComponent
                  ml={0}
                  mr={0}
                  height={8}
                  width={12}
                  img="/images/downArrow.png"
                  opecity={0.5}
                />
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
                    <IconGlobalStyleComponent
                      ml={0}
                      mr={0}
                      height={8}
                      width={12}
                      img="/images/downArrow.png"
                      opecity={0.5}
                    />
                  </Content>
                </Drop3>
              </CoinDrop>
              <InputMain2>
                <Imput type="text" />
                <Drop4>
                  <DropImg3 src="/images/coin3.png" />
                  <Content>
                    <Text>SOL</Text>
                    <IconGlobalStyleComponent
                      ml={0}
                      mr={0}
                      height={8}
                      width={12}
                      img="/images/downArrow.png"
                      opecity={0.5}
                    />
                  </Content>
                </Drop4>
              </InputMain2>
            </Header>
          </ToMain>
          {data.map((val, i) => {
            return open > i ? (
              <UsdtList>
                <MainTitleView>
                  <Div>
                    <Title2>{val.title}</Title2>
                    {/* <CustomButtonActive>Save $12.20</CustomButtonActive> */}
                  </Div>
                  <Amount>{val.total}</Amount>
                </MainTitleView>
                <MainTitleView>
                  <Span>{val.tnxcost}</Span>
                  <Span>{val.earn}</Span>
                </MainTitleView>
              </UsdtList>
            ) : null;
          })}

          <ShowMore
            onClick={
              data.length > open
                ? () => {
                    setOpen(open + 1);
                  }
                : () => {
                    setOpen(1);
                  }
            }
          >
            {data.length > open ? 'Show More' : 'Hide Detaiis'}
            <DownArrowImg src={data.length > open ? '/images/showMore.png' : '/images/hideDetail.png'} alt="Show" />
          </ShowMore>
          <Buttons
            width="87%"
            isActive={true}
            onClick={() => {
              setHighSlippageModalOpen(true);
              setContinueModalOpen(true);
            }}
            title="Swap"
          />
        </Form>
      </MainDiv>
      <Modal
        modalTitle=""
        isOpen={ContinueModalOpen}
        close={() => {
          setContinueModalOpen(false);
        }}
      >
        <Boxs>
          <ContinuewithWallets
            close={() => {
              setContinueModalOpen(false);
            }}
          />
        </Boxs>
      </Modal>
      <Modal
        modalTitle=""
        isOpen={HighSlippageModalopen}
        close={() => {
          closeHighSlippageModel();
        }}
      >
        <Boxs>
          <Converting
            close={() => {
              closeHighSlippageModel();
            }}
          />
        </Boxs>
      </Modal>

      <DetailView>
        <Expected>
          <ItemText>Expected Output</ItemText>
          <ItemText2>1.46 USDT</ItemText2>
        </Expected>
        <Expected>
          <ItemText>Price Impact</ItemText>
          <ItemText2>-0.01%</ItemText2>
        </Expected>
        <Expected>
          <ItemText>Route</ItemText>
          <Routs>
            <RoutImg src="/images/coin3.png" />
            <IconGlobalStyleComponent ml={10} mr={10} height={15} width={18} img="/images/leftIcon.png" opecity={0.4} />
            <RoutImg src="/images/coin6.png" />
          </Routs>
        </Expected>
        <Expected>
          <ItemText>SOL Price</ItemText>
          <ItemText2>0.000249 USDT</ItemText2>
        </Expected>
        <Expected>
          <ItemText>ETH Price</ItemText>
          <ItemText2>1.46 ETH</ItemText2>
        </Expected>
        <Expected>
          <ItemText>Slippage Tolerance</ItemText>
          <ItemText2>0.50%</ItemText2>
        </Expected>
        <Expected>
          <ItemText>Estimated Time</ItemText>
          <ItemText2>1 min</ItemText2>
        </Expected>
      </DetailView>
    </>
  );
};

export default Crosschain;
