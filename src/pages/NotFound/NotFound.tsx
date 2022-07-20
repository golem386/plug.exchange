import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import NotFoundImg from '../../assets/icon/NotFound.png'

const Div = styled('div')({
    marginLeft: '5%',
    marginTop: '6%',
    marginBottom: '6%'
});

const Img = styled('img')({
    width: '483px'
});
const Form = styled('div')({
    borderRadius: '24px',
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFFFFF',
    width: 460,
    padding: 40,
    height:'60%',
    marginTop:20
});
const Error = styled('span')({
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: '72px',
});
const Pre = styled('span')({
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '18px',
});
const CustomButtonActive = styled(Button)({
    borderRadius: 16,
    background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    fontSize: '16px',
    fontWeight: '600',
    color: '#FFFFFF',
    fontStyle: 'Inter',
    textTransform: 'initial',
    height: 52,
    width: "25%",
    marginTop:20
  });
  
const NotFound = () => {
    const Navigation = useNavigate()
    return (
        <Div>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                    <Img src={NotFoundImg} />
                </Grid>
                <Grid item xs={6}>
                    <Form>
                        <Error>404</Error>
                        <br />
                        <Pre>The page you’re looking for couldn’t be found.</Pre>
                        <CustomButtonActive onClick={() =>{Navigation('/')}}>
                            Go Back
                        </CustomButtonActive>
                    </Form>
                </Grid>
            </Grid>
        </Div>
    )
}

export default NotFound
