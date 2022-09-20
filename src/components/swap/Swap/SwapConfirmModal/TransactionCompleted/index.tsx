import { styled } from '@mui/system';
import Buttons from 'src/theme/Buttons';
import IconGlobalStyleComponent from 'src/theme/GlobalComponent/iconGlobalStyleComponent';;

const Title = styled('h2')({
  fontWeight: '600',
  color: 'black',
  textAlign: 'center',
  margin: 'auto',
  display: 'block',
  marginTop: 20,
});
const SubTitle = styled('p')({
  fontWeight: '500',
  textAlign: 'center',
  color: '#DC7FB6',
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
// const Buttons = styled(Button)((props: { theme: ThemeProps }) => ({
//   width: '100%',
//   borderRadius: 16,
//   background: props.theme.palette.color.active,
//   color: 'white',
//   textTransform: 'initial',
//   marginTop: 20,
// }));
const CloseImage = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});
const TransactionCompletedModal = styled('div')({
  marginTop: 10,
});

export type TransactionCompletedProps = {
  handleClose: () => void;
  transactionUrl: string | null;
  watchAssetHandler: () => void | null;
};
const TransactionCompleted = (props: TransactionCompletedProps) => {
  return (
    <TransactionCompletedModal>
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
      <CompletedIcon src="/images/completed.png" alt="Image" />
      <Title>Transaction Submitted</Title>
      <SubTitle>View on Explorer</SubTitle>
      {/* <Buttons>
        Add USDT to
        <BtnIcon src="/images/mataMask.png" alt="MataMask" />
        MetaMask
      </Buttons> */}
      <Buttons
        width='86%'
        isActive={true}
        onClick={() => { }}
        title={<div className='d-flex'>Add USDT to
          {/* <BtnIcon src="/images/coin.png" alt="MataMask" /> */}
          MetaMask</div>} />
    </TransactionCompletedModal>
  );
};

export default TransactionCompleted;
