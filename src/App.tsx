import React from 'react';
import { Provider } from 'react-redux';
import { styled } from '@mui/system';
import { store } from './store/Store';
import SwapPage from './pages/swap';
import Modal from './components/Modal';
import WalletModal from './components/WalletModal';
import { useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { closeModal } from './store/Actions';

const MyComponent = styled('div')({
  backgroundColor: '#FFFFFF',
  height: '100%',
  width: '100%',
});
const BoxsToken = styled('div')({
  backgroundColor: 'white',
  paddingBottom: 30,
  paddingRight: 20,
  paddingLeft: 20,
  paddingTop: 10,
  width: '450px',
  height: '90%',
  borderRadius: 10,
});
type AppDispatch = ThunkDispatch<ArticleState, string, AnyAction>;
function App() {
  const ModalData: any = useSelector((state: ArticleState) => state.Modal);
  const dispatch: AppDispatch = useDispatch();
  return (
    
      <MyComponent>
        <SwapPage />
        <Modal
          isOpen={ModalData}
          modalTitle="WalletModal"
          close={() => {
            dispatch(closeModal())
          }}
        >
          <BoxsToken>
            <WalletModal
              Check={ModalData}
              onClose={() => {
                dispatch(closeModal())
              }}
            />
          </BoxsToken>
        </Modal>
      </MyComponent>
  );
}

export default App;
