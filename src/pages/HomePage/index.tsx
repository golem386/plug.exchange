import React, { Component } from 'react'
import { styled } from '@mui/system';

const HomePageDiv = styled('div')({
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
});

const Btn = styled('button')({
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#BB36FF',
    backgroundColor: 'transparent',
    height: '52px',
    width: '154px',
    fontWeight: '600',
    color: '#BB36FF',
    fontSize: '16px',
    '&:hover': {
        background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
        color: 'white'
    },
});

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    marginBottom: '10px',
    width: '162px',
    height: '78px'
});


const HomePage = () => {
    return (
        <HomePageDiv>
            <div>
                <Img src="/logo.png" />
                <a href='/swap'><Btn>Coming Soon</Btn></a>
            </div>
        </HomePageDiv>
    )
}


export default HomePage
