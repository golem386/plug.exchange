import React, { JSXElementConstructor, ReactElement } from 'react';
import styled from '@emotion/styled';
import { Modal as MuiModal } from '@mui/material';

const ModalCustom = styled(MuiModal)({
  border: 'none',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
});

const ModalHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 15,
  marginBottom: 15,
  marginRight: '5%',
});

const HeaderTitle = styled('span')({
  fontFamily: 'Inter',
  fontSize: '24px',
  fontWeight: '600',
  marginLeft: '5%',
});

const CloseBtn = styled('img')({
  cursor: 'pointer',
});

export type ModalProps = {
  isOpen: boolean;
  modalTitle: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  close: () => void;
};

const Modal = ({ isOpen, modalTitle, children, close }: ModalProps): JSX.Element => {
  return (
    <ModalCustom open={isOpen} onClose={() => close()}>
      <>
        <ModalHeader>
          <HeaderTitle>{modalTitle}</HeaderTitle>
          <CloseBtn src="/images/cros.png" onClick={() => close()} alt="Image" />
        </ModalHeader>
        {children}
      </>
    </ModalCustom>
  );
};

export default Modal;
