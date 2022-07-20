// this is a Component index file and Provide a Component
// import SwapPage from '../../components/swap';
// export { SwapPage };
import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import AppBar from '../components/AppBar';
import AppFooter from '../components/AppFooter';
import Crosschain from './Crosschain/Crosschain';
import NotFound from './NotFound/NotFound';
import Swap from './swap/Swap';

const SwapPage = () => {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Swap />} />
        <Route path="/Crosschain" element={<Crosschain />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {
        window.location.pathname === "/Crosschain" ? null : <AppFooter />
      }
    </BrowserRouter>
  );
};

export default SwapPage;
