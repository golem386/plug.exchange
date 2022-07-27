import styled from '@emotion/styled';
import { Modal } from '@mui/material';

const ModalCustom = styled(Modal)({
  border: 'none',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

export type CustomModalProps = {
  isOpen: boolean;
  modalTitle: string;
  children: any;
  close: Function;
};
const CustomModal = (props: CustomModalProps) => {
  return (
    <ModalCustom
      open={props.isOpen}
      onClose={() => {
        props.close(false);
      }}
    >
      {props.children}
    </ModalCustom>
  );
};

export default CustomModal;
