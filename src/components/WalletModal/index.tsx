import React, { useEffect } from 'react';
import { ConnectNetWorkOne, ConnectWalletOne } from '../../contexts/ConnectWalletDATA';
import { Box, Button, FormControlLabel, Radio } from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Modal from '../Modal';
//import { connetNetwork, connetWallet } from '../../store/Actions';

const styleError = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 4,
  paddingTop: 1,
  height: '30%',
  borderRadius: 2,
  overFlow: 'auto',
};
const ModalCustom = styled(Modal)({
  border: 'none',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});
const Title = styled('span')({
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: '600',
  marginLeft: '5%',
});
const Title3 = styled('span')({
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: '600',
});
const ViewMainView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginLeft: '3%',
});
const ViewMain = styled('div')({
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: '3%',
  paddingRight: '3%',
  marginLeft: 15,
  padding: '12px, 18px, 12px, 16px',
  cursor: 'pointer',
});
const ViewMainBtn = styled('div')({
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: '3%',
  paddingRight: '3%',
  marginLeft: 15,
  padding: '12px, 18px, 12px, 16px',
  cursor: 'pointer',
  '@media (max-width: 660px)': {
    display: 'none',
  },
});
const ViewMainActive = styled('div')({
  position: 'relative',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: '3%',
  paddingRight: '3%',
  marginLeft: 15,
  borderColor: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '12px, 18px, 12px, 16px',
  cursor: 'pointer',
});
const Parmition = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
  marginTop: '2%',
  marginBottom: '3%',
});
const Condition = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
});
const ConditionPink = styled('span')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  color: 'transparent',
  backgroundClip: 'text',
  marginRight: 5,
  marginLeft: 5,
});
const ConnectButton = styled(Button)({
  width: '92%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
  marginLeft: '4%',
});
const ConnectButton2 = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
});
const ConnectButtonDisable = styled(Button)({
  width: '92%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 12,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
  opacity: 0.3,
  marginLeft: '4%',
});
const SelectImg = styled('img')({
  position: 'absolute',
  left: '45px',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15,
});
const ConnectWalletHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 15,
  marginBottom: 15,
  marginRight: '5%',
});
const TitleView2 = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 15,
  marginBottom: 15,
});

const Span = styled('span')({
  fontFamily: 'inter',
  fontWeight: 600,
  fontSize: 16,
  color: 'black',
});
const Warning = styled('span')({
  fontFamily: 'inter',
  fontWeight: 600,
  fontSize: 16,
  color: 'red',
});
const MainDiv = styled('div')({
  alignItems: 'center',
  display: 'flex',
  cursor: 'pointer',
});
const TitleIcon = styled('p')({
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  color: '#000000',
  opacity: 0.65,
});
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
});
const Over = styled('div')({});
const ButtonGroup = styled('div')({
  marginTop: '3%',
});
const Main = styled('div')({
  backgroundColor: '#f7f7f7',
  paddingTop: '3%',
  paddingBottom: '3%',
  marginBottom: '5%',
  '@media (max-width: 660px)': {
    paddingTop: '3%',
    paddingBottom: '3%',
    marginBottom: '5%',
  },
});
const HeaderTitle = styled('span')({
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: '600',
  marginLeft: '5%',
});
const CloseBtn = styled('img')({
  cursor: 'pointer',
});


const WalletModalDiv = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingTop: 10,
  width: '585px',
  height: '90%',
  borderRadius: 10,
  overflow: 'hidden',
  '@media (max-width: 660px)': {
    backgroundColor: 'white',
    paddingBottom: 30,
    paddingTop: 10,
    width: '585px',
    height: '90%',
    borderRadius: 0,
    overflow: 'hidden',
  },
  '&:hover': {
    overflowY: 'auto',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

type WalletModalProps = {
  onClose?: Function; //This is a Close Button Click and Modal Close
};
type DataObject = {
  name: String;
  coin: String;
};
const nullObj = {
  name: '',
  coin: '',
};

type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
const WalletModal = (props: WalletModalProps) => {
  const dispatch: AppDispatch = useDispatch();
  const [ErrorStatus, setErrorStatus] = React.useState(false);
  const [Check, setCheck] = React.useState<Boolean>(false);
  const [WalletData, setWallet] = React.useState<DataObject>(nullObj);
  const [NetworkData, setNetwork] = React.useState<DataObject>(nullObj);
  const handleOpenError = () => setErrorStatus(true);
  const handleCloseError = () => setErrorStatus(false);

  const connetWalletData = (coin: any) => {
    dispatch(null);
  };
  const connetNetworkData = (coin: any) => {
    dispatch(null);
  };
  const connetWalletFunction = (value: DataObject) => {
    setWallet(value);
  };
  const connetNetworkFunction = (value: DataObject) => {
    setNetwork(value);
  };

  const Network = () => {
    // if (WalletData.name !== '' && NetworkData.name !== '') {
    connetWalletData(WalletData);
    connetNetworkData(NetworkData);
    // }
  };

  const SelectData = () => {
    Network();
    props.onClose();
  };

  useEffect(() => {
    setNetwork(NetworkData);
    setWallet(WalletData);
  }, [NetworkData, WalletData]);
  return (
    <>
      <Modal isOpen={false} modalTitle="WalletModal" close={() => null}>
        <WalletModalDiv>
          <ConnectWalletHeader>
            <HeaderTitle>Connect Wallet</HeaderTitle>
            <CloseBtn
              src="/images/cros.png"
              onClick={() => {
                props.onClose();
              }}
              alt="Image"
            />
          </ConnectWalletHeader>
          <Over>
            <Main>
              <Title>Choose Network</Title>
              <ButtonGroup>
                <ViewMainView>
                  {ConnectNetWorkOne.map((val, i) => {
                    return NetworkData.name === val.name ? (
                      <ViewMainActive>
                        <SelectImg src="/images/select.png" alt="Select_Icon" />
                        <ImageIcon src={val.coin} alt="Coin" />
                        <TitleIcon>{val.name}</TitleIcon>
                      </ViewMainActive>
                    ) : (
                      <ViewMain
                        onClick={() => {
                          connetNetworkFunction(val);
                        }}
                      >
                        <ImageIcon src={val.coin} alt="Coin" />
                        <TitleIcon>{val.name}</TitleIcon>
                      </ViewMain>
                    );
                  })}
                </ViewMainView>
                {/* <ViewMainView>
                  <ViewMainBtn>
                    <TitleIcon
                      onClick={() => {
                        handleOpenError();
                      }}
                    >
                      Error Modal
                    </TitleIcon>
                  </ViewMainBtn>
                  <ModalCustom
                    open={ErrorStatus}
                    onClose={() => {
                      handleCloseError();
                    }}
                  >
                    <Box sx={styleError}>
                      <TitleView2>
                        <Title3>Wrong Network</Title3>
                        <CloseBtn
                          src="/images/cros.png"
                          onClick={() => {
                            handleCloseError();
                          }}
                          alt="Cros"
                        />
                      </TitleView2>
                      <MainDiv>
                        <ImageIcon src="/images/coin.png" alt="Coin" />
                        <Span>Arbitrum</Span>
                      </MainDiv>
                      <br />
                      <Warning>You select wrong network please select anothor network</Warning>
                      <br />
                      <br />
                      <ConnectButton2 variant="text" onClick={() => { }}>
                        Ok
                      </ConnectButton2>
                    </Box>
                  </ModalCustom>
                </ViewMainView> */}
              </ButtonGroup>
            </Main>

            <Title>Choose Wallet</Title>
            <ButtonGroup>
              <ViewMainView>
                {ConnectWalletOne.map((val, i) => {
                  return WalletData.name === val.name ? (
                    <ViewMainActive>
                      <SelectImg src="/images/select.png" alt="Select" />
                      <ImageIcon src={val.coin} alt="Coin" />
                      <TitleIcon>{val.name}</TitleIcon>
                    </ViewMainActive>
                  ) : (
                    <ViewMain
                      onClick={() => {
                        connetWalletFunction(val);
                      }}
                    >
                      <ImageIcon src={val.coin} alt="Coin" />
                      <TitleIcon>{val.name}</TitleIcon>
                    </ViewMain>
                  );
                })}
              </ViewMainView>
            </ButtonGroup>
          </Over>
          <Parmition>
            <FormControlLabel
              control={
                <Radio
                  onClick={() => {
                    setCheck(!Check);
                  }}
                  checked={Check ? true : false}
                />
              }
              label=""
            />
            <Condition>
              I accept the <ConditionPink>Terms of Services</ConditionPink>&<ConditionPink>Privacy Policy</ConditionPink>
            </Condition>
          </Parmition>
          {Check ? (
            <ConnectButton
              variant="text"
              onClick={() => {
                SelectData();
              }}
            >
              Connect Wallet
            </ConnectButton>
          ) : (
            <ConnectButtonDisable variant="text">Connect Wallet</ConnectButtonDisable>
          )}
        </WalletModalDiv>
      </Modal>
    </>
  );
};

export default WalletModal;
