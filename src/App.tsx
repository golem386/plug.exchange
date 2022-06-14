import React from 'react';
import { Provider } from 'react-redux';
import { styled } from '@mui/system';
import { store } from './store/Store';
import SwapPage from './pages/swap';

const MyComponent = styled('div')({
  backgroundColor: '#FFFFFF',
  height: '100%',
  width: '100%',
});
function App() {
  return (
    <Provider store={store}>
      <MyComponent>
        <SwapPage />
      </MyComponent>
    </Provider>
  );
}

export default App;
