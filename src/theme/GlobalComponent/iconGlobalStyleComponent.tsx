import React, { Component } from 'react'
import { styled } from '@mui/system';
import { ThemeProps } from '..';

const Img = styled('img')((props: StyledButtonProps) => ({
    opacity: props.opecityValue,
    cursor:'pointer',
    marginLeft:props.ml,
    marginRight:props.mr,
    height:props.height,
    width:props.width
}));

interface StyledButtonProps {
    opecity: number | string;
    theme: ThemeProps;
    ml:number;
    mr:number;
    height:number;
    width:number;
}

type Props = {
    img: string,
    opecity: number | string,
    ml:number,
    mr:number,
    height:number,
    width:number,
    onClick?:Function
}
const IconGlobalStyleComponent = (props: Props) => {
    return (
        <Img src={props.img} onClick={() =>{props.onClick()}} opecityValue={props.opecity} ml={props.ml} mr={props.mr} width={props.width} height={props.height} />
    )
}


export default IconGlobalStyleComponent
