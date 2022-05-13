import styled from "@emotion/styled";
import React, { Component } from "react";

const MainDiv = styled("div")({
  marginLeft: "10%",
  marginRight: "10%",
  marginTop: "4%",
});
const TextHeading = styled("p")({
  fontFamily: "Inter",
  fontSize: "24px",
});
const TextSpan = styled("span")({
  fontFamily: "Inter",
  fontSize: "24px",
  opacity: "0.3",
  paddingLeft: 5,
});
const PriceText = styled("span")({
  //   fontFamily: "Inter",
  fontSize: "44px",
  fontWeight: "600",
});
const TotalText = styled("span")({
  color: "#DC7FB6",
  fontSize: "16px",
  fontWeight: "600",
  marginLeft:'1.5%'
});
const Chart = () => {
  return (
    <MainDiv>
      <TextHeading>
        Ethereum<TextSpan>(ETH)</TextSpan>
      </TextHeading>
      <PriceText>$3,744.19</PriceText>
      <br />
      <TotalText>$16.93333 (+0.41%)</TotalText>
    </MainDiv>
  );
};

export default Chart;
