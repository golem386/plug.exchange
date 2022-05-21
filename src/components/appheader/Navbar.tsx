import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Button, FormControlLabel, Grid, Modal, Radio, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import setting from "../../assets/icon/setting.png";
import Serch from "../../assets/icon/Serch.png";
import Coin from '../../assets/icon/coin.png'
import binance from '../../assets/icon/binance.png'
import Coin2 from '../../assets/icon/coin2.png'
import Coin4 from '../../assets/icon/coin4.png'
import gnosis from '../../assets/icon/gnosis.png'
import arbitrum from '../../assets/icon/arbitrum.png'
import bsc from '../../assets/icon/bsc.png'
import metamask from '../../assets/icon/metamask.png'
import coinbase from '../../assets/icon/coinbase.png'
import wallet from '../../assets/icon/wallet.png'
import coin6 from '../../assets/icon/coin6.png'
import fortmatic from '../../assets/icon/fortmatic.png'
import arkane from '../../assets/icon/arkane.png'
import mew from '../../assets/icon/mew.png'
import select from '../../assets/icon/select.png'
import { SafetyCheck } from "@mui/icons-material";
import Cros from '../../assets/icon/Cros.png'
const MainComponent = styled("div")({
  display: "flex",
  paddingLeft: 10,
  alignItems: "center",
  justifyContent: "space-around",
});
const InputIcon = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F7F7F7",
  borderRadius: "16px",
  paddingLeft: "2%",
});

const TextInputActive = styled("input")({
  width: "100%",
  display: "flex",
  backgroundColor: "#F7F7F7",
  borderRadius: "16px",
  padding: "7px",
  borderBottom: 0,
  border: 'none',
  height: 52,
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  '&:focus-visible': {
    border: 'none',
    outline: 'none'
  }
});

const useStyles: any = makeStyles(() => ({
  textField: {
    width: "100%",
    outline: "none",
    borderBottomWidth: 0,
  },
  input: {
    color: "#000000",
    backgroundColor: "#F7F7F7",
    height: "45px",
    border: "none",
    borderBottomWidth: 0,
    fontSize: 18,
    paddingLeft: "2%",
  },
}));

const CostomButton = styled(Button)({
  borderRadius: 16,
  backgroundColor: "rgba(0, 0, 0, 0.03)",
  padding: "10px 24px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#000000",
  fontStyle: "Inter",
  opacity: "0.65",
  textTransform: "lowercase",
  marginLeft: 5,
  marginRight: 5,
});

const CostomButtonActive = styled(Button)({
  borderRadius: 16,
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
  padding: "10px 24px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
  fontStyle: "Inter",
  textTransform: "lowercase",
  marginLeft: 5,
  marginRight: 5,
});

const SettingButton = styled(Button)({
  borderRadius: 100,
  backgroundColor: "rgba(0, 0, 0, 0.03)",
  padding: "20px 0px",
  color: "#000000",
  opacity: "0.65",
});
const NotResult = styled("p")({
  padding: 30,
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  borderRadius: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
const Imgs = styled('img')({
  marginTop: '15%'
})
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  paddingLeft:4,
  paddingRight:4,
  paddingBottom:4,
  paddingTop:1,
  height: '85%',
  borderRadius: 2,
  overFlow:'auto'
};
const ModalCostom = styled(Modal)({
  border: 'none',
  borderRadius: 20,
})
const Title = styled('p')({
  fontFamily: 'Inter',
  fontSize: '18px',
  fontWeight: '600',
})
const ViewMainView = styled('div')({
  display: 'flex',
  alignItems: 'center',
})
const ViewMain = styled('div')({
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: '#e0e0e0',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 10,
  justifyContent: 'center',
  margin: 5,
  paddingLeft: 15,
  paddingRight: 15,
})
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
  borderColor: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)'

})
const ImageIcon = styled('img')({
  height: 35,
  width: 35,
  marginRight: 10,
})
const TitleIcon = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
})
const TitleControl = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '2%'
})
const Condition = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center'
})
const ConditionPink = styled('p')({
  fontFamily: 'Inter',
  fontSize: '15px',
  fontWeight: '600',
  color: '#BB36FF',
  marginRight: 5,
  marginLeft: 5
})
const ConnectButton = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial'
})
const ConnectButtonDisebal = styled(Button)({
  width: '100%',
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'initial',
  opacity: 0.3
})
const SelectImg = styled('img')({
  position: 'absolute',
  left: '36%',
  top: '70%',
  transform: 'translate(-50%, -50%)',
  height: 15,
  width: 15
})
const TitleView = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [Check, satCheck] = React.useState<Boolean>(false);
  const [filterInput, setFilterInput] = React.useState<String>('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <MainComponent>
        <Grid container spacing={4}>
          <Grid item sm={1}>
            <Imgs src={Logo} height="43px" width="90px" />
          </Grid>
          <Grid item sm={7}>
            <InputIcon>
              <img src={Serch} />
              <TextInputActive placeholder="Search by Token Name or Address" onChange={(e) => { setFilterInput(e.target.value) }} />
            </InputIcon>
            {
              filterInput !== "" ? <NotResult>No results found</NotResult> : null
            }
          </Grid>
          <Grid item sm={4}>
            <CostomButton>Buy Crypto</CostomButton>
            <CostomButtonActive onClick={() => { handleOpen() }}>Connect Wallet</CostomButtonActive>
            <SettingButton>
              <img src={setting} />
            </SettingButton>
          </Grid>
        </Grid>
      </MainComponent>
      <ModalCostom
        open={open}
        onClose={() => { handleClose() }}
      >
        <Box sx={style}>
          <TitleView>
            <Title>Choose Network</Title>
            <img src={Cros} onClick={() => { handleClose() }} />
          </TitleView>
          <ViewMainView>
            <ViewMainActive>
              <SelectImg src={select} />
              <ImageIcon src={Coin} />
              <TitleIcon>Etherum</TitleIcon>
            </ViewMainActive>
            <ViewMain>
              <ImageIcon src={Coin2} />
              <TitleIcon>Avalanche</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={binance} />
              <TitleIcon>Binance</TitleIcon>
            </ViewMain>
          </ViewMainView>
          <ViewMainView>
            <ViewMain>
              <ImageIcon src={Coin4} />
              <TitleIcon>Polygon</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={gnosis} />
              <TitleIcon>Gnosis</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={arbitrum} />
              <TitleIcon>Arbitrum</TitleIcon>
            </ViewMain>
          </ViewMainView>
          <Title>Choose Wallet</Title>
          <ViewMainView>
            <ViewMain>
              <ImageIcon src={bsc} />
              <TitleIcon>BSC</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={metamask} />
              <TitleIcon>MetaMask</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={coinbase} />
              <TitleIcon>Coinbase</TitleIcon>
            </ViewMain>
          </ViewMainView>
          <ViewMainView>
            <ViewMain>
              <ImageIcon src={wallet} />
              <TitleIcon>Wallet Connect</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={coin6} />
              <TitleIcon>1inch</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={fortmatic} />
              <TitleIcon>Formatic</TitleIcon>
            </ViewMain>
          </ViewMainView>
          <ViewMainView>
            <ViewMain>
              <ImageIcon src={arkane} />
              <TitleIcon>Arkane</TitleIcon>
            </ViewMain>
            <ViewMain>
              <ImageIcon src={mew} />
              <TitleIcon>MEW</TitleIcon>
            </ViewMain>
          </ViewMainView>
          <TitleControl><FormControlLabel control={<Radio onClick={(e: any) => { satCheck(!Check) }} checked={Check ? true : false} />} label="" /><Condition>I accept the <ConditionPink>Terms of Services</ConditionPink> & <ConditionPink>Privacy Policy</ConditionPink></Condition></TitleControl>
          {
            Check ? <ConnectButton variant="text">Connect Wallet</ConnectButton> : <ConnectButtonDisebal variant="text">Connect Wallet</ConnectButtonDisebal>
          }
        </Box>
      </ModalCostom>
    </>
  );
};

export default Navbar;
