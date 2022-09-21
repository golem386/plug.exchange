import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { ThemeProps } from 'theme';
import IconGlobalStyleComponent from 'theme/GlobalComponent/iconGlobalStyleComponent';;

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
  marginBottom: 20,
});
const CompletedIcon = styled('img')({
  height: '70px',
  width: '70px',
  margin: 'auto',
  display: 'block',
});
const Buttons = styled(Button)((props: { theme?: ThemeProps }) => ({
  borderRadius: 12,
  background:  props.theme && props.theme.palette.color.active,
  color: 'white',
  textTransform: 'initial',
  display: 'block',
  margin: 'auto',
}));

const CloseImage = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});
const TransactionFailedModal = styled('div')({
  marginTop: 10,
});

export type TransactionFailedProps = {
  handleClose: () => void;
  transactionUrl: string | null;
  watchAssetHandler: () => void | null;
};

const TransactionFailed = (props: TransactionFailedProps) => {
  return (
    <TransactionFailedModal>
      <CloseImage>
        <IconGlobalStyleComponent
          onClick={() => { props.handleClose }}
          ml={0}
          mr={0}
          height={15}
          width={15}
          img='/images/cros.png'
          opecity={1} />
      </CloseImage>
      <CompletedIcon src="/images/Check.png" alt="Image" />
      <Title>Transaction Failed</Title>
      <SubTitle>
        This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage
        tolerance.
      </SubTitle>
      <Buttons onClick={props.handleClose}>Close</Buttons>
    </TransactionFailedModal>
  );
};

export default TransactionFailed;
