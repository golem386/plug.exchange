import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React, { Component } from "react";
import Logo from "../../assets/logo.png";
import setting from "../../assets/icon/setting.png";
import Serch from "../../assets/icon/Serch.png";

const MainComponent = styled("div")({
  display: "flex",
  paddingLeft: 10,
  alignItems: "center",
  justifyContent: "space-around",
});
const InputIcon = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F7F7F7",
  borderRadius: "16px",
  padding: "7px",
  paddingLeft: "2%",
});

const TextInputActive = styled(TextField)({
  width: "100%",
  display: "flex",
  backgroundColor: "#F7F7F7",
  borderRadius: "16px",
  padding: "7px",
  paddingLeft: "2%",
  borderBottom: 0,
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
  fontStyle: "normal",
  opacity: "0.65",
  textTransform: "lowercase",
});

const CostomButtonActive = styled(Button)({
  borderRadius: 16,
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
  padding: "10px 24px",
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
  fontStyle: "normal",
  textTransform: "lowercase",
});

const SettingButton = styled(Button)({
  borderRadius: 100,
  backgroundColor: "rgba(0, 0, 0, 0.03)",
  padding: "20px 0px",
  color: "#000000",
  opacity: "0.65",
});
const NavBar = () => {
  const classes = useStyles();
  return (
    <MainComponent>
      <img src={Logo} height="43px" width="90px" />
      <InputIcon>
        <img src={Serch} />
        <TextInputActive placeholder="Search by Token Name or Address" />
      </InputIcon>
      <CostomButton>Buy Crypto</CostomButton>
      <CostomButtonActive>Connect Wallet</CostomButtonActive>
      <SettingButton>
        <img src={setting} />
      </SettingButton>
    </MainComponent>
  );
};

export default NavBar;
