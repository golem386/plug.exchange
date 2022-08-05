import React from 'react';
import { ConnectNetWorkOne, ConnectWalletOne } from '../../contexts/ConnectWalletDATA';
import { Button, FormControlLabel, Radio } from '@mui/material';
import Modal from '../Modal';
import { useIsModalOpen, useToggleModal } from '../../store/app/hooks';
import { ModalType } from 'src/store/app';
import styled from 'styled-components';

const Title = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  margin-left: 5%;
`;

const Wrapper = styled.div`
  display: flex;
  alignitems: center;
  flexwrap: wrap;
  marginleft: 3%;
`;

const StyledButton = styled('button')<{ isActice: boolean }>`
position: relative;
border-width: 1.5px;
border-style: solid;
border-color: ${(props) => (!props.isActice ? '#e0e0e0' : 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)')};
background: ${(props) => props.isActice && 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)'}
display: flex;
align-items: center;
border-radius: 10;
justify-content: center;
margin: 5;
padding-left: 3%;
padding-right: 3%;
margin-left: 15;
padding: 12px, 18px, 12px, 16px;
cursor: pointer;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5%;
  margin-top: 2%;
  margin-bottom: 3%;
`;

const TermsAndConditionText = styled.p`
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const TermsAndConditionPinkText = styled.span`
  font-family: Inter;
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(90deg, #bb36ff 0%, #dc7fb6 100%);
  color: transparent;
  background-clip: text;
  margin-right: 5;
  margin-left: 5;
`;

const ConnectButton = styled(Button)<{ disabled: boolean }>`
  width: 90%;
  background: linear-gradient(90deg, #bb36ff 0%, #dc7fb6 100%);
  border-radius: 16;
  padding: 7px;
  color: white;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  text-transform: initial;
  margin-left: 4%;
  ${(props) => props.disabled && 'opacity: 0.3;'}
`;

const SelectImg = styled('img')({
  position: 'absolute',
  left: '45px',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15,
});

const StyledButtonTitle = styled.p`
fontFamily: 'Inter',
fontSize: '16px',
fontWeight: '600',
color: '#000000',
opacity: 0.65,
`;

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

const WalletModal = () => {
  // for close the wallet modal
  const close = useToggleModal(null);

  let isOpen = useIsModalOpen(ModalType.WALLET_MODAL);

  return (
    <>
      <Modal isOpen={isOpen} modalTitle="Connect Wallet" close={close}>
        <WalletModalDiv>
          <Over>
            <Main>
              <Title>Choose Network</Title>
              <ButtonGroup>
                <Wrapper>
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
                </Wrapper>
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
              I accept the <ConditionPink>Terms of Services</ConditionPink>&
              <ConditionPink>Privacy Policy</ConditionPink>
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
