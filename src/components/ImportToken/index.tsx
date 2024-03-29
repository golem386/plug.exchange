// this file is a ImportToken file and Provide a Token id
import { styled } from '@mui/system';
import { Button, FormControlLabel, Radio, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ThemeProps } from 'theme';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  bgcolor: 'white',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 6,
  paddingTop: 0,
  height: '85%',
  borderRadius: 5,
  overFlow: 'auto',
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '82%',
  bgcolor: 'white',
  boxShadow: 24,
  paddingLeft: 4,
  paddingRight: 4,
  paddingBottom: 6,
  paddingTop: 0,
  height: '70%',
  borderRadius: 5,
  overFlow: 'auto',
};
const ImportTokenHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const ImportTokenTitle = styled('p')({
  fontSize: '24px',
  fontWeight: 600,
});
const Token = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '5%',
  marginBottom: '4%',
});
const TokenImg = styled('img')({
  height: 36,
  width: 36,
  marginRight: 10,
});
const TokenName = styled('span')({
  fontWeight: 600,
});
const TokenCode = styled('span')({
  fontWeight: 600,
  color: '#dbdbdb',
});
const TokenKey = styled('span')({
  fontWeight: 500,
  color: '#dbdbdb',
  '@media (max-width: 660px)': {
    fontSize: 14,
    color: '#dbdbdb',
  },
});
const WarningContent = styled('div')({
  backgroundColor: '#f0f0f0',
  padding: 20,
  borderRadius: 20,
  marginTop: '10%',
  marginBottom: 15,
  paddingTop: 30,
  paddingBottom: 30,
});
const Info = styled('img')({
  height: 24,
  width: 24,
  marginRight: 10,
});
const WarningText = styled('span')({
  fontSize: 18,
  fontWeight: 600,
  color: 'red',
});
const Red = styled('div')({
  alignItems: 'center',
  display: 'flex',
  marginBottom: 15,
});
const Pre = styled('span')({
  fontSize: 14,
  fontWeight: 500,
  color: '#565656',
  lineHeight: 1.5,
});
const ParmitionText = styled('span')({
  fontWeight: 500,
  color: '#565656',
});
const ParmitionMain = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 10,
  marginBottom: 20,
});
const ImportTokenButton = styled(Button)((props: { theme?: ThemeProps; isDisabled: boolean; }) => ({
  width: '100%',
  background: props.theme && props.theme.palette.color.active,
  borderRadius: 16,
  padding: 7,
  color: 'white',
  fontWeight: 600,
  textTransform: 'initial',
  height: '52px',
  opacity: props.isDisabled ? 0.3 : 1,
}));

type Token = {};

export type ImportTokenProps = {
  handleClose: Function; // Model Close Event
  importedToken: Token[] | null;
};

const ImportToken = (props: ImportTokenProps) => {
  const [Check, setCheck] = React.useState<boolean>(false);
  const isMobile = useMediaQuery('(min-width:660px)');
  return (
    <Box sx={isMobile ? style : style2}>
      <ImportTokenHeader>
        <ImportTokenTitle>Import a Token</ImportTokenTitle>
        <img
          src="/images/cros.png"
          onClick={() => {
            props.handleClose();
          }}
          alt="image"
        />
      </ImportTokenHeader>
      <Token>
        <TokenImg src="/images/coin6.png" alt="coin" />
        <TokenName>
          Tether <TokenCode>(USDT)</TokenCode>
        </TokenName>
      </Token>
      <TokenKey>0x1ce0c2827e2ef14d5c4f29a091d735a204794041</TokenKey>
      <WarningContent>
        <Red>
          <Info src="/images/info.png" />
          <WarningText>Trade at your own risk!</WarningText>
        </Red>
        <Pre>
          &nbsp;&nbsp;&nbsp;Anyone can create a token, including creating fake versions of existing tokens that claim to
          represent proects.
        </Pre>
        <br />
        <br />
        <Pre>&nbsp;&nbsp;&nbsp;If you purchase this token, you may not be able to sell it back.</Pre>
      </WarningContent>
      <ParmitionMain>
        <FormControlLabel
          control={
            <Radio
              onClick={() => {
                setCheck(!Check);
              }}
              checked={Check ? true : false}
            />
          }
          label=""
        />
        <ParmitionText>I understand and want to proceed.</ParmitionText>
      </ParmitionMain>
      <ImportTokenButton isDisabled={Check} variant="text">
        Import Token
      </ImportTokenButton>
    </Box>
  );
};

export default ImportToken;
