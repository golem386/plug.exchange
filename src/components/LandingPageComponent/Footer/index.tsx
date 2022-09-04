import styled from '@emotion/styled';
import { Grid } from '@material-ui/core';
import React, { Component } from 'react'


const FooterDiv = styled('div')({
    marginTop: '10%',
    padding: '1%',
    backgroundColor: '#edebf0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
});
const H2 = styled('h2')({
    color: '#200440'
});


const Div = styled('div')({
    display: 'flex',
    alignItems: 'end',
    justifyContent:'end'
});

const Title = styled('p')({
    fontWeight: '700',
    color: '#666666',
    marginLeft: 10,
    marginRight: 10
});

const Imgs = styled('img')({
    height: '52px',
    width: '52px',
    marginLeft: 10,
    marginRight: 10
});


const Grid1 = styled(Grid)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
});


const Footer = () => {
    return (
        <FooterDiv>
            <Grid1 container>
                <Grid item sm={4}>
                    <H2>Cryptoverse</H2>
                </Grid>
                <Grid item sm={4}>
                    <Div>
                        <Title>Buy Crypto</Title>
                        <Title>Blog</Title>
                        <Title>Help</Title>
                        <Title>Terms</Title>
                        <Title>Privacy</Title>
                    </Div>
                </Grid>
                <Grid item sm={4}>
                    <Div>
                        <Imgs src="/images/TelegramW.png" />
                        <Imgs src="/images/TwitterW.png" />
                        <Imgs src="/images/DisW.png" />
                    </Div>
                </Grid>
            </Grid1>
        </FooterDiv>
    )
}


export default Footer
