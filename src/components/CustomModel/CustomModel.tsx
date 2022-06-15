import styled from '@emotion/styled';
import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TransactionWaiting } from '../swap/Swap/SwapConfirmModal/TransactionWaiting';
import Cros from '../../assets/icon/Cros.png';
import select from '../../assets/icon/select.png';
import Coin from '../../assets/icon/coin.png';
import { TransactionCompleted } from '../swap/Swap/SwapConfirmModal/TransactionCompleted';
import SwapConfirmModal from '../swap/Swap/SwapConfirmModal';
import {
  ConnectNetWorkOne,
  ConnectNetWorkTow,
  ConnectWalletOne,
  ConnectWalletThree,
  ConnectWalletTow,
} from '../../contexts/ConnectWalletDATA';
import { Box, Button, FormControlLabel, Modal, Radio } from '@mui/material';
import { onModelStatus } from '../../store/Actions';

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
});
const ViewMainView = styled('div')({
  display: 'flex',
  alignItems: 'center',
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
  paddingLeft: 15,
  paddingRight: 15,
  borderColor: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
});
const TitleControl = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '2%',
});
const Condition = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
});
const ConditionPink = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  color: '#BB36FF',
  marginRight: 5,
  marginLeft: 5,
});
const ConnectButton = styled(Button)({
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
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
  opacity: 0.3,
});
const SelectImg = styled('img')({
  position: 'absolute',
  left: '36%',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15,
});
const TitleView = styled('div')({
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
  fontSize: '15px',
  fontWeight: '600',
});
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
});
const Over = styled('div')({});
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

export type WalletModalProps = {
  NetworkData: String;
  connetNetworkFunction: any;
  handleOpenError: any;
  handleCloseError: any;
  ErrorStatus: boolean;
  connetWalletFunction: any;
  WalletData: String;
  Check: Boolean;
  Network: any;
  satCheck: any;
  SelectData: any;
};
const CustomModel = (props: WalletModalProps) => {
  const dispatch: any = useDispatch();
  const ModelStatus: any = useSelector((state: ArticleState) => state.Model);
  return ModelStatus.name === 'Tranjection Waiting' ? (
    <TransactionWaiting swapCurrency={null} receivedCurrency={null} />
  ) : ModelStatus.name === 'Connect Wallet' ? (
    <>
      <TitleView>
        <Title>Choose Network</Title>
        <img
          src={Cros}
          onClick={() => {
            dispatch(onModelStatus({ name: '', Model: false }));
          }}
          alt="Image"
        />
      </TitleView>
      <Over>
        <ViewMainView>
          {ConnectNetWorkOne.map((val, i) => {
            return props.NetworkData === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select_Icon" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetNetworkFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          {ConnectNetWorkTow.map((val, i) => {
            return props.NetworkData === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetNetworkFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          <ViewMain>
            <TitleIcon onClick={props.handleOpenError}>Error Modal</TitleIcon>
          </ViewMain>
          <ModalCustom open={props.ErrorStatus} onClose={props.handleCloseError}>
            <Box sx={styleError}>
              <TitleView>
                <Title>Wrong Network</Title>
                <img src={Cros} onClick={props.handleCloseError} alt="Cros" />
              </TitleView>
              <MainDiv>
                <ImageIcon src={Coin} alt="Coin" />
                <Span>Arbitrum</Span>
              </MainDiv>
              <br />
              <Warning>You select wrong network please select anothor network</Warning>
              <br />
              <br />
              <ConnectButton variant="text" onClick={() => {}}>
                Ok
              </ConnectButton>
            </Box>
          </ModalCustom>
        </ViewMainView>
        <Title>Choose Wallet</Title>
        <ViewMainView>
          {ConnectWalletOne.map((val, i) => {
            return props.WalletData === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetWalletFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          {ConnectWalletTow.map((val, i) => {
            return props.WalletData === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetWalletFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
        <ViewMainView>
          {ConnectWalletThree.map((val, i) => {
            return props.WalletData === val.name ? (
              <ViewMainActive>
                <SelectImg src={select} alt="Select" />
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMainActive>
            ) : (
              <ViewMain
                onClick={() => {
                  props.connetWalletFunction(val);
                }}
              >
                <ImageIcon src={val.coin} alt="Coin" />
                <TitleIcon>{val.name}</TitleIcon>
              </ViewMain>
            );
          })}
        </ViewMainView>
      </Over>
      <TitleControl>
        <FormControlLabel control={<Radio onClick={props.satCheck} checked={props.Check ? true : false} />} label="" />
        <Condition>
          I accept the <ConditionPink>Terms of Services</ConditionPink>
          <ConditionPink>Privacy Policy</ConditionPink>
        </Condition>
      </TitleControl>
      {props.Check ? (
        <ConnectButton variant="text" onClick={props.SelectData}>
          Connect Wallet
        </ConnectButton>
      ) : (
        <ConnectButtonDisable variant="text">Connect Wallet</ConnectButtonDisable>
      )}
    </>
  ) : ModelStatus.name === 'Transaction Completed' ? (
    <TransactionCompleted
      handleClose={() => {
        dispatch(onModelStatus({ name: '', Model: false }));
      }}
      transactionUrl={null}
      watchAssetHandler={null}
    />
  ) : ModelStatus.name === 'Swap ConfirmModal' ? (
    <SwapConfirmModal
      inputToken={null}
      outputToken={null}
      swapAmount={null}
      expectedOutput={null}
      minReceived={null}
      allowedSlippage={null}
      gasEstimateInUSD={null}
      priceImpact={null}
      swapHandler={null}
      swapTXStatus={null}
      handleClose={() => {
        dispatch(onModelStatus({ name: '', Model: false }));
      }}
    />
  ) : null;
};

export default CustomModel;
