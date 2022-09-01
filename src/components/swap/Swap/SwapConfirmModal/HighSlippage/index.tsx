import { styled } from '@mui/system';
import React, { useState } from 'react';
import { Button, FormControlLabel, Radio } from '@mui/material';

const Title = styled('span')({
  fontWeight: '600',
  fontSize: '24px',
  color: 'red',
  textAlign: 'center',
  margin: 'auto',
  display: 'block',
  marginTop: 20,
});
const SubTitle = styled('span')({
  fontWeight: '500',
  fontSize: '14px',
  textAlign: 'center',
  color: 'black',
  margin: 'auto',
  display: 'block',
  marginTop: 10,
});
const CompletedIcon = styled('img')({
  height: '70px',
  width: '70px',
  margin: 'auto',
  display: 'block',
});
const Buttons = styled(Button)((props:any) =>({
  borderRadius: 12,
  background: props.theme.palette.color.active,
  color: 'white',
  textTransform: 'initial',
  display: 'block',
  margin: 'auto',
  opacity: 0.4,
}));
const ButtonsActive = styled(Button)((props:any) =>({
  borderRadius: 12,
  background: props.theme.palette.color.active,
  color: 'white',
  textTransform: 'initial',
  display: 'block',
  margin: 'auto',
}));
const CloseIcon = styled('img')({
  height: '15px',
  width: '15px',
  cursor: 'pointer',
});
const CloseImage = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});
const HighSlippageModal = styled('div')({
  marginTop: 10,
});
const Parmition = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '2%',
});
const ConditionPink = styled('span')((props:any) =>({
  fontSize: '15px',
  fontWeight: '600',
  background: props.theme.palette.color.active,
  color: 'transparent',
  backgroundClip: 'text',
  marginRight: 5,
}));
const Condition = styled('p')({
  fontSize: '15px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
});
export type TransactionFailedProps = {
  handleClose: () => void;
  transactionUrl: string | null;
  watchAssetHandler: () => void | null;
};

const HighSlippage = (props: TransactionFailedProps) => {
  const [Check, setCheck] = useState(false);
  return (
    <HighSlippageModal>
      <CloseImage>
        <CloseIcon src="/images/cros.png" onClick={props.handleClose} alt="Icon" />
      </CloseImage>
      <CompletedIcon src="/images/highSlippage.png" alt="Image" />
      <Title>High Slippage Alert</Title>
      <SubTitle>Slippage is higher than normal trades. Swap results can be different than usual.</SubTitle>
      <Parmition>
        <FormControlLabel
          control={
            <Radio
              onClick={() => {
                setCheck(!Check);
              }}
              checked={Check}
            />
          }
          label=""
        />
        <Condition>
          I accept the &nbsp; <ConditionPink>Terms of Services</ConditionPink>&
          <ConditionPink>Privacy Policy</ConditionPink>
        </Condition>
      </Parmition>
      {Check ? <ButtonsActive onClick={props.handleClose}>Close</ButtonsActive> : <Buttons>Close</Buttons>}
    </HighSlippageModal>
  );
};

export default HighSlippage;
