import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ModalType, toggleModal } from '.';
import { AppDispatch, AppState } from '../';

export const useToggleModal = (modal: ModalType | null) => {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(() => {
    dispatch(toggleModal(modal));
  }, []);
};

export const useOpenWalletModal = () => {
  useToggleModal(ModalType.WALLET_MODAL);
};

export const useIsModalOpen = (modal: ModalType): boolean => {
  const opened_modal = useSelector<AppState>((state) => state.app.modal);
  return modal === opened_modal;
};
