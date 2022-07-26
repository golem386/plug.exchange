// this file is a AppFooter file and Create a Footer bar 
import styled from '@emotion/styled';
import React, { Component } from 'react';
import discord from '../../assets/icon/discord.png';
import social from '../../assets/icon/social.png';
import teligram from '../../assets/icon/teligram.png';
import twiter from '../../assets/icon/twiter.png';
import { Button, useMediaQuery } from '@mui/material';

const MainComponent = styled('div')({
  "@media (min-width: 660px)": {
    display: 'flex',
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  }

});
const CustomButtom = styled(Button)({
  borderRadius: 100,
  margin: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
  '&:hover': {
    borderRadius: 100,
    margin: 10,
    background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    padding: '20px 0px',
    color: '#000000',
    opacity: '1',
  }
});
const NameButton = styled(Button)({
  margin: 10,
  backgroundColor: 'transparent',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
});
const CustomButtomActive = styled(Button)({
  borderRadius: 100,
  margin: 10,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '20px 0px',
  color: '#000000',
});
const BtnGroup = styled('div')({
  backgroundColor: "transparent",
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  boxShadow: '0px -9px 20px 0px #bdbdbd',
  width: '100%'
});
const ActiveBtn = styled('button')({
  background: "linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)",
  height: 36,
  paddingLeft: '10%',
  paddingRight: '10%',
  border: 'none',
  borderRadius: '100px',
  fontFamily: 'Inter',
  fontWeight: '500',
  fontSize: '16px',
  color: 'white'
});
const Div = styled('div')({
  "@media (max-width: 660px)": {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '7%'
  }
});
const Div2 = styled('div')({
  "@media (max-width: 660px)": {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

const AppFooter = () => {
  const matches = useMediaQuery('(min-width:660px)');
  return (
    <>
      <MainComponent>
        <Div>
          <CustomButtom>
            <img src={teligram} alt="teligram" />
          </CustomButtom>
          <CustomButtom>
            <img src={social} alt="social" />
          </CustomButtom>
          <CustomButtom>
            <img src={twiter} alt="twiter" />
          </CustomButtom>
          <CustomButtom>
            <img src={discord} alt="discord" />
          </CustomButtom>
        </Div>
        <Div2>
          <NameButton>FAQs</NameButton>
          <NameButton>Docs</NameButton>
          <NameButton>Careers</NameButton>
        </Div2>
      </MainComponent>
    </>

  );
};

export default AppFooter;
