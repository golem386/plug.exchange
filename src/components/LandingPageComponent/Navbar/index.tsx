import React, { Component } from 'react';
import { styled } from '@mui/system';

const Nav = styled('div')({
  padding: 15,
  boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Text = styled('h2')({
  marginLeft: 10,
});

const Logo = styled('h3')({
  display: 'flex',
  alignItems: 'center',
});

const Explore = styled('p')({
  color: '#666666',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#666666',
  borderRadius: '100%',
  padding: 7,
});

const Input = styled('input')({
  border: 'none',
  padding: 10,
  backgroundColor: 'transparent',
  width: '350px',
});

const Inputtype = styled('div')({
  backgroundColor: '#eeebf0',
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  paddingLeft: '2%',
  borderRadius: '12px',
});

const Img = styled('img')({
  height: '20px',
  width: '20px',
});

const ConnectBtn = styled('button')({
  backgroundColor: '#5D5FEF',
  color: 'white',
  borderRadius: '12px',
  border: 'none',
  padding: 15,
});

const Serchdiv = styled('div')({
    display:'flex',
    width:'50%',
    justifyContent:'space-between',
    alignItems:'center'
  });
  


const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/Navlogo.png" />
        <Text>Cryptoverse</Text>
      </Logo>
      <Explore>Explore</Explore>
      <Serchdiv>
        <Inputtype>
          <Img src="/images/search.png" />
          <Input type="text" placeholder="Search by Token Name, Symbol or Address" />
        </Inputtype>
        <ConnectBtn>Connect Wallet</ConnectBtn>
        <img src="/images/Switch.png" />
      </Serchdiv>
    </Nav>
  );
};

export default Navbar;
