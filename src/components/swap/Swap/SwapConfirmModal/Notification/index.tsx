import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';

const AlertNotification = styled('div')({
  width: '100%',
  backgroundColor: '#F7F7F7',
  borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 10,
  maxWidth: '70%',
});
const AlertTitle = styled('p')({
  marginLeft: 5,
  fontWeight: '500',
  color: 'rgba(0, 0, 0, 0.65)',
});
const AlertTitleSuccess = styled('span')({
  marginLeft: 5,
  fontWeight: '500',
  color: 'black',
});
const AlertTitleError = styled('span')({
  marginLeft: 5,
  fontWeight: '500',
  color: 'red',
});
const Btn = styled('span')({
  color: '#BB36FF',
});
const Img = styled('img')({
  marginTop: 15,
});
const Notificationdiv = styled('div')({
  display: 'flex',
  justifyContent: 'end',
});

export interface State extends SnackbarOrigin {
  open: boolean;
}

const Notification = () => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  type ReduxState = {
    Alert: {
      type: string;
    };
  };
  const Alert: any = useSelector((state: ReduxState) => state.Alert);
  //const { vertical, horizontal, open } = state;
  React.useEffect(() => {
    setState(Alert);
  }, [Alert]);
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Notificationdiv>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={false}
        autoHideDuration={6000}
        onClose={handleClose}
        key={1}
      >
        <AlertNotification>
          {Alert?.type === 'Error' ? (
            <Img height={72} width={72} src="/images/error.png" />
          ) : (
            <Img height={72} width={72} src="/images/success.png" />
          )}

          <AlertTitle>
            Swap exactly{' '}
            {Alert?.type === 'Error' ? (
              <AlertTitleError>10 USDT</AlertTitleError>
            ) : (
              <AlertTitleSuccess>10 USDT</AlertTitleSuccess>
            )}{' '}
            for{' '}
            {Alert?.type === 'Error' ? (
              <AlertTitleError>6.24578 MATIC.</AlertTitleError>
            ) : (
              <AlertTitleSuccess>6.24578 MATIC.</AlertTitleSuccess>
            )}
            <br /> <Btn>View on Explorer</Btn>
          </AlertTitle>
        </AlertNotification>
      </Snackbar>
    </Notificationdiv>
  );
};

export default Notification;
