import { Container, Grid } from '@mui/material'
import React, { Component } from 'react'
import Buttons from 'src/theme/Buttons';
import IconGlobalStyleComponent from 'src/theme/iconGlobalStyleComponent';
import styled from 'styled-components';

const ReferModel = styled('div')({
    borderRadius: '24px',
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
    padding: '8%',
    marginBottom:'20%'
});

const ReferModel2 = styled('div')({
    borderRadius: '24px',
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
    padding: '4%',
    marginBottom:'20%'
});


const ContainerSpace = styled(Container)({
    marginTop: '10%'
});



const Title = styled("h2")({
    textAlign: 'center'
});

const Pre = styled("p")({
    fontWeight: '500',
    display: 'block',
    alignItems: 'center'
});

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    backgroundColor: '#f7f7f7',
    padding: '15px',
    borderRadius: '14px'
});

const Learn = styled('p')({
    textAlign: 'center'
});

const DetailView = styled('div')({
    margin: 'auto',
    display: 'block',
});

const Expected = styled('div')({
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
});
const ItemText = styled('p')({
    paddingTop: '10px',
    fontWeight: '500',
    color: 'black',
});
const ItemText2 = styled('p')({
    fontWeight: '500',
    color: '#010101',
    paddingTop: '12px'
});

const Routs = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const RoutImg = styled('img')({
    height: 24,
    width: 24,
});

const Vs = styled('img')({
    height: 15,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
    opacity: 0.4,
});

const Boxs = styled('div')({
    backgroundColor: 'white',
    paddingBottom: 30,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    width: '450px',
    height: 'auto',
    borderRadius: 10,
});

const Referral = () => {
    return (
        <ContainerSpace>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <ReferModel>
                        <Img src='/images/shereLogo.png' />
                        <br />
                        <Title>Refer and Earn</Title>
                        <Pre>Join the referral program and earn a portion of fees in ACX for transfers made from your unique referral link.</Pre>
                        <br />
                        <Buttons
                            width='85%'
                            isActive={true}
                            onClick={() => { }}
                            title="Connect to Get Started" />
                        <br />
                        <Learn>Learn More</Learn>
                    </ReferModel>
                </Grid>
                <Grid item xs={8}>
                    <ReferModel2>
                        <ItemText>Current referral tier</ItemText>
                        <h2>Copper</h2>
                        <DetailView>
                            <Expected>
                                <ItemText>Minimum Received</ItemText>
                                <ItemText2>440.10045</ItemText2>
                            </Expected>
                            <Expected>
                                <ItemText>Price Impact</ItemText>
                                <ItemText2>0.05606%</ItemText2>
                            </Expected>
                            <Expected>
                                <ItemText>Route</ItemText>
                                <Routs>
                                    <RoutImg src="/images/coin3.png" />
                                    <IconGlobalStyleComponent ml={10} mr={10} height={15} width={18} img='/images/leftIcon.png' opecity={0.4} />
                                    <RoutImg src="/images/coin6.png" />
                                </Routs>
                            </Expected>
                            <Expected>
                                <ItemText>SOL Price</ItemText>
                                <ItemText2>0.000249 USDT</ItemText2>
                            </Expected>
                            <Expected>
                                <ItemText>ETH Price</ItemText>
                                <ItemText2>1.46 ETH</ItemText2>
                            </Expected>
                            <Expected>
                                <ItemText>Slippage Tolerance</ItemText>
                                <ItemText2>0.50%</ItemText2>
                            </Expected>
                            <Expected>
                                <ItemText>Estimated Time</ItemText>
                                <ItemText2>1 min</ItemText2>
                            </Expected>
                        </DetailView>
                    </ReferModel2>
                </Grid>
            </Grid>
        </ContainerSpace>
    )
}


export default Referral
