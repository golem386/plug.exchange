import { styled } from '@mui/system';
import { Button } from '@mui/material';
import React, { Children, Component } from 'react'

const OrderBtn = styled(Button)((props: string | number | boolean) => ({
    margin: 15,
    width: props.width,
    background: 'linear-gradient(90deg, #BB36FF 0%, #DC7FB6 100%)',
    color: 'white',
    borderRadius: '12px',
    marginBottom: '6%',
    marginTop: '5%',
    marginLeft: '7%',
    textTransform: 'initial',
    opacity: props.isActive ? 1 : 0.4,
    fontSize:'16px',
    fontWeight:'800',
    fontStyle:"Inter"
}));


const Buttons = (props) => {
    return (
        <OrderBtn onClick={() =>{props.onClick()}} width={props.width} isActive={props.isActive}>
            {props.title}
        </OrderBtn>
    )
}


export default Buttons
