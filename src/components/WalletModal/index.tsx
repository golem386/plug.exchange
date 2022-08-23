import React from 'react';
import { ConnectNetWorkOne, ConnectWalletOne } from '../../contexts/ConnectWalletDATA';
import { Button, FormControlLabel, Radio } from '@mui/material';
import Modal from '../Modal';
import { useIsModalOpen, useToggleModal } from '../../store/app/hooks';
import { ModalType } from 'src/store/app';
import styled from 'styled-components';


const Title = styled('div')({
  fontSize:18,
  fontWeight:'600',
  marginLeft:'5%'
});

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginLeft: '3%'
});

// const StyledButton = styled('button') <{ isActice: boolean }>`
// position: relative;
// border-width: 1.5px;
// border-style: solid;
// border-color: ${(props) => (!props.isActice ? '#e0e0e0' : 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)')};
// background: ${(props) => props.isActice && 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)'}
// display: flex;
// align-items: center;
// border-radius: 10;
// justify-content: center;
// margin: 5;
// padding-left: 3%;
// padding-right: 3%;
// margin-left: 15;
// padding: 12px, 18px, 12px, 16px;
// cursor: pointer;

// `;

const StyledButton = styled('button')((isActice: boolean) =>({
  position: 'relative',
  borderWidth: "1.5px",
  borderStyle: 'solid',
  borderColor: isActice ? '#e0e0e0' : 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  background: isActice ? "#e0e0e0" : 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: '3%',
  paddingRight: '3%',
  paddingBottom:'2%',
  paddingTop:'2%',
  marginLeft: 15,
  padding: '12px, 18px, 12px, 16px',
  cursor: 'pointer'
}));

const Checkbox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
  marginTop: '2%',
  marginBottom: '3%'
});


const TermsAndConditionText = styled('p')({
  fontSize: 15,
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  flexWrap: "wrap"
});

const TermsAndConditionPinkText = styled('span')({
  fontSize: 15,
  fontWeight: '600',
  background: "linear-gradient(90deg, #bb36ff 0%, #dc7fb6 100%)",
  color: 'transparent',
  backgroundClip: 'text',
  marginRight: 5,
  marginLeft: 5
});

// const ConnectButton = styled(Button) <{ disabled: boolean }>`
//   width: 90%;
//   background: linear-gradient(90deg, #bb36ff 0%, #dc7fb6 100%);
//   border-radius: 16;
//   padding: 7px;
//   color: white;
//   font-family: Inter;
//   font-size: 16px;
//   font-weight: 600;
//   text-transform: initial;
//   margin-left: 4%;
//   ${(props) => props.disabled && 'opacity: 0.3;'}
// `;

const ConnectButton = styled(Button)((disabled: boolean) =>({
  width: '90%',
  background: 'linear-gradient(90deg, #bb36ff 0%, #dc7fb6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
  textTransform: 'initial',
  marginLeft: '4%',
  opacity:disabled ? '0.3' : 1
}));

const SelectImg = styled('img')((isActice: boolean) =>({
  position: 'absolute',
  left: '45px',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15,
  display:isActice ? 'none' : 'block'
}));


const StyledButtonTitle = styled('p')({
  fontSize: 16,
  fontWeight: '600',
  color: '#000000',
  opacity: 0.65
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
      <Modal isOpen={true} modalTitle="Connect Wallet" close={close}>
        <WalletModalDiv>
          <Over>
            <Main>
              <Title>Choose Network</Title>
              <ButtonGroup>
                <Wrapper>
                  {ConnectNetWorkOne.map((val, i) => {
                    return (
                      <StyledButton isActice={true}>
                        <SelectImg src="/images/select.png" alt="Select_Icon" />
                        <ImageIcon src={val.coin} alt="Coin" />
                        <StyledButtonTitle>{val.name}</StyledButtonTitle>
                      </StyledButton>
                    );
                  })}
                </Wrapper>
                {/* <ViewMainView>
                  <ViewMainBtn>
                    <StyledButtonTitle
                      onClick={() => {
                        handleOpenError();
                      }}
                    >
                      Error Modal
                    </StyledButtonTitle>
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
              <Wrapper>
                {ConnectWalletOne.map((val, i) => {
                  return (
                    <StyledButton isActice={true}>
                      <SelectImg src="/images/select.png" alt="Select_Icon" />
                      <ImageIcon src={val.coin} alt="Coin" />
                      <StyledButtonTitle>{val.name}</StyledButtonTitle>
                    </StyledButton>
                  );
                })}
              </Wrapper>
            </ButtonGroup>
          </Over>
          <Checkbox>
            <FormControlLabel
              control={
                <Radio
                  onClick={() => {
                    // setCheck(!Check);
                  }}
                // checked={Check ? true : false}
                />
              }
              label=""
            />
            <TermsAndConditionText>
              I accept the <TermsAndConditionPinkText>Terms of Services</TermsAndConditionPinkText>&
              <TermsAndConditionPinkText>Privacy Policy</TermsAndConditionPinkText>
            </TermsAndConditionText>
          </Checkbox>
          {/* {Check ? ( */}
          <ConnectButton
            variant="text"
            // onClick={() => {
            //   SelectData();
            // }}
            disabled={false}
          >
            Connect Wallet
          </ConnectButton>
          {/* ) : (
            <ConnectButton disabled={true} variant="text">
              Connect Wallet
            </ConnectButton>
          )} */}
        </WalletModalDiv>
      </Modal>
    </>
  );
};

export default WalletModal;
