import { styled } from '@mui/system';
import { Button } from '@mui/material';
import React from 'react';

const OrderBtn = styled(Button)((props: { width: string; isActive: boolean }) => ({
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
  fontWeight: '800',
}));

const Buttons = (props: {
  onClick: () => void;
  width: string;
  isActive: boolean;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <OrderBtn
      onClick={() => {
        props.onClick();
      }}
      width={props.width}
      isActive={props.isActive}
    >
      {props.title}
    </OrderBtn>
  );
};

export default Buttons;
