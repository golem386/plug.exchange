import styled from "@emotion/styled";
import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { Button } from "@mui/material";
import * as echarts from "echarts";

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
  fontFamily: "Inter",
  fontSize: "44px",
  fontWeight: "600",
});
const TotalText = styled("span")({
  color: "#DC7FB6",
  fontSize: "16px",
  fontWeight: "600",
  marginLeft: "1.5%",
  fontFamily: "Inter",
});
const ChartDiv = styled("div")({
  width: "100%",
});
const CostomButton = styled(Button)({
  borderRadius: 7,
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
  padding: "7px 20px",
  fontSize: "16px",
  fontWeight: "600",
  color: "white",
  fontStyle: "normal",
  opacity: "0.65",
  textTransform: "lowercase",
  marginLeft: 5,
  marginRight: 5,
  fontFamily: "Inter",
});
const ChartButtonDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
});
const Chart = () => {
  return (
    <>
      <TextHeading>
        Ethereum<TextSpan>(ETH)</TextSpan>
      </TextHeading>
      <PriceText>$3,744.19</PriceText>
      <br />
      <TotalText>$16.93333 (+0.41%)</TotalText>
      <ChartDiv>
        <ReactEcharts
          option={{
            color: ["#80FFA5", "#00DDFF", "#37A2FF", "#FF0087", "#FFBF00"],
            grid: {
              left: "0%",
              right: "0%",
              bottom: "0%",
              top: 0,
              containLabel: true,
            },
            xAxis: [
              {
                type: "category",
                boundaryGap: false,
                show: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              },
            ],
            yAxis: [
              {
                type: "value",
                show: false,
              },
            ],
            series: [
              {
                name: "Line 1",
                type: "line",
                stack: "Total",
                smooth: true,
                lineStyle: {
                  width: 2,
                  color: "#BB36FF",
                  shadowBlur: 15,
                  shadowOffsetX: 7,
                },
                showSymbol: false,
                symbolSize: 0,
                areaStyle: {
                  opacity: 0.8,
                  color: new echarts.graphic.LinearGradient(0, 0, 2, 1, [
                    {
                      offset: 0,
                      color: "rgba(93, 95, 239, 0.05)",
                    },
                    {
                      offset: 1,
                      color: "rgba(93, 95, 239, 0)",
                    },
                  ]),
                },
                emphasis: {
                  focus: "series",
                },
                data: [140, 232, 101, 264, 90, 340, 250],
              },
            ],
          }}
        />
        <ChartButtonDiv>
          <CostomButton>24H</CostomButton>
          <CostomButton>1W</CostomButton>
          <CostomButton>1M</CostomButton>
        </ChartButtonDiv>
      </ChartDiv>
    </>
  );
};

export default Chart;
