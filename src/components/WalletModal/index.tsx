import React, { useState } from 'react';
import { ConnectNetWorkOne, ConnectWalletOne } from '../../contexts/ConnectWalletDATA';
import { FormControlLabel, Radio } from '@mui/material';
import Modal from '../Modal';
import { useToggleModal } from '../../store/app/hooks';
import { styled } from '@mui/system';
import Buttons from '../../theme/Buttons';
import { ThemeProps } from 'theme';
import IconGlobalStyleComponent from '../../theme/GlobalComponent/iconGlobalStyleComponent';

const Title = styled('p')({
  fontWeight: '600',
  marginLeft: '5%',
});

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginLeft: '3%',
});

const StyledButtons = styled('button')((props: { theme?: ThemeProps; isActive: boolean }) => ({
  position: 'relative',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: props.isActive && props.theme ? props.theme.palette.color.active : '#e0e0e0',
  background: props.isActive && props.theme ? props.theme.palette.color.active : '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: '3%',
  paddingRight: '3%',
  paddingBottom: '2%',
  paddingTop: '2%',
  marginLeft: 15,
  padding: '12px, 18px, 12px, 16px',
  cursor: 'pointer',
}));

const Checkbox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '5%',
  marginTop: '2%',
  marginBottom: '3%',
});

const TermsAndConditionText = styled('p')({
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const TermsAndConditionPinkText = styled('p')((props: { theme?: ThemeProps }) => ({
  fontWeight: '600',
  background: props.theme && props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  marginRight: 5,
  marginLeft: 5,
}));

const SelectImg = styled('img')(() => ({
  position: 'absolute',
  left: '45px',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15,
}));

const StyledButtonTitle = styled('p')({
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
});

const Header = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const Heading = styled('h2')({
  fontWeight: '600',
  marginLeft: 27,
  marginBottom: 10,
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
    borderRadius: 0,
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
  const [WallerSelect, setWallerSelect] = useState(false);
  const [parmition, setParmition] = useState(false);
  const [Wallet, setWallet] = useState('');
  const [Network, setNetwork] = useState('');
  const close = useToggleModal(null);

  // let isOpen = useIsModalOpen(ModalType.WALLET_MODAL);

  return (
    <>
      <Modal isOpen={false} modalTitle="" close={close} >
        <WalletModalDiv>
          <Header>
            <Heading>Connect Wallet</Heading>
            <IconGlobalStyleComponent ml={10} mr={30} height={20} width={20} img="/images/cros.png" opecity={0.5} />
          </Header>
          <Over>
            <Main>
              <Title>Choose Network</Title>
              <ButtonGroup>
                <Wrapper>
                  {ConnectNetWorkOne.map((val) => {
                    return (
                      <StyledButtons
                        isActive={Network === val.name ? WallerSelect : false}
                        onClick={() => {
                          setWallerSelect(true);
                          setNetwork(val.name);
                        }}
                      >
                        {Network === val.name && <SelectImg src="/images/select.png" alt="Select_Icon" />}
                        <ImageIcon src={val.coin} alt="Coin" />
                        <StyledButtonTitle>{val.name}</StyledButtonTitle>
                      </StyledButtons>
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
                {ConnectWalletOne.map((val) => {
                  return (
                    <StyledButtons
                      isActive={Wallet === val.name ? WallerSelect : false}
                      onClick={() => {
                        setWallerSelect(true);
                        setWallet(val.name);
                      }}
                    >
                      {Network === val.name && <SelectImg src="/images/select.png" alt="Select_Icon" />}
                      <ImageIcon src={val.coin} alt="Coin" />
                      <StyledButtonTitle>{val.name}</StyledButtonTitle>
                    </StyledButtons>
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
                    setParmition(!parmition);
                  }}
                  checked={parmition}
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
          <Buttons width="87%" isActive={parmition} onClick={() => {}} title="Connect Wallet" />
        </WalletModalDiv>
      </Modal>
    </>
  );
};

export default WalletModal;
