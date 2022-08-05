import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MAINNET } from '../../config/chains';

export enum ModalType {
  WALLET_MODAL,
}

export interface App {
  /** currently open popup */
  modal: ModalType | null;
  /** chainId */
  chainId: number;
}

const initialAppState: App = {
  modal: null,
  chainId: MAINNET,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    toggleModal(state, { payload }: PayloadAction<ModalType | null>) {
      // setting up new popup
      state.modal = payload;
    },
  },
});

// reterive actions
export const { toggleModal } = appSlice.actions;

export default appSlice.reducer;
