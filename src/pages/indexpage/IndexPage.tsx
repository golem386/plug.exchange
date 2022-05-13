import React, { Component } from "react";
import { FooterBar, NavBar } from "../../components";
import { Chart } from "../../components/Chart";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Chart />
      <FooterBar />
    </>
  );
};

export default IndexPage;
