import styled from '@emotion/styled';
import React, { Component } from 'react';
import discord from '../../assets/icon/discord.png';
import social from '../../assets/icon/social.png';
import teligram from '../../assets/icon/teligram.png';
import twiter from '../../assets/icon/twiter.png';
import { Button } from '@mui/material';

const MainComponent = styled('div')({
  display: 'flex',
  paddingLeft: 10,
  alignItems: 'center',
  justifyContent: 'space-between',
});
const CoustomButtom = styled(Button)({
  borderRadius: 100,
  margin: 10,
  backgroundColor: 'rgba(0, 0, 0, 0.03)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
});
const NameButton = styled(Button)({
  margin: 10,
  backgroundColor: 'transparent',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
});
const CoustomButtomActive = styled(Button)({
  borderRadius: 100,
  margin: 10,
  background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
  padding: '20px 0px',
  color: '#000000',
  opacity: '0.65',
});
const Footerbar = () => {
  return (
    <MainComponent>
      <div>
        <CoustomButtom>
          <img src={teligram} />
        </CoustomButtom>
        <CoustomButtom>
          <img src={social} />
        </CoustomButtom>
        <CoustomButtomActive>
          <img src={twiter} />
        </CoustomButtomActive>
        <CoustomButtom>
          <img src={discord} />
        </CoustomButtom>
      </div>
      <div>
        <NameButton>FAQs</NameButton>
        <NameButton>Docs</NameButton>
        <NameButton>Careers</NameButton>
      </div>
    </MainComponent>
  );
};

export default Footerbar;
