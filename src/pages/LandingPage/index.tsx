import React from 'react'
import Navbar from '../../components/LandingPageComponent/Navbar'
import About from '../../components/LandingPageComponent/About'
import Token from '../../components/LandingPageComponent/Token'
import Exchange from '../../components/LandingPageComponent/Exchange'
import YourTrading from '../../components/LandingPageComponent/YourTrading'
import Trade from '../../components/LandingPageComponent/Trade'
import Footer from '../../components/LandingPageComponent/Footer'
import styled from '@emotion/styled'



const Div = styled('div')({
   overflowX:'hidden'
});

const LandingPage = () => {
    return (
        <Div>
            <Navbar />
            <About />
            <Token />
            <Exchange />
            <YourTrading/>
            <Trade/>
            <Footer/>
        </Div>
    )
}


export default LandingPage
