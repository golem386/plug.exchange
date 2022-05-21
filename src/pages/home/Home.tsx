import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { FooterBar, NavBar } from "../../components";
import { Blurmodel } from "../../components/blurmodel";
import { Chart } from "../../components/chart";
import { Resetmore } from "../../components/restartmodel";
import { Selectedtoken } from "../../components/selectedtoken";
import { Selecttoken } from "../../components/selecttoken";
import { Swapmodel } from "../../components/swapmodel";
import { Transactionsetting } from "../../components/transactionsetting";

const MainDiv = styled("div")({
  marginLeft: "5%",
  marginRight: "5%",
  marginTop: "4%",
});

const IndexPage = () => {
  const Model: any = useSelector(
    (state: ArticleState) => state.model
  )
  return (
    <>
      <NavBar />
      <MainDiv>
        <Grid container spacing={5}>
          <Grid item sm={8}>
            <Chart />
          </Grid>
          <Grid item sm={4}>
            {
              Model === 'Transaction' ? <Transactionsetting /> : Model === "SelectToken" ? <Selecttoken select='PayToken' /> : Model === 'ReceiveToken' ? <Selecttoken select='ReceiveToken' /> : <Swapmodel btnTitle='Connect Wallet' />
            }
            {/* <SelectedToken /> */}
            {/* <SwapModel btnTitle='Review Order' /> */}
            {/*  */}
            {/*  */}
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={5}>
          <Grid item sm={8}>
            <Blurmodel />
          </Grid>
          <Grid item sm={4}>
            <Resetmore />
          </Grid>
        </Grid>
      </MainDiv>
      <FooterBar />
    </>
  );
};

export default IndexPage;
