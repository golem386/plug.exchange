import * as actionTypes from '../actionTypes';
import Eth from '../../assets/icon/Eth.png';
import Coin2 from '../../assets/icon/coin2.png';

const initialState: ArticleState = {
  modal: 'abdc',
  Modal: false,
  Search:false,
  Menu:false,
  CoinDetail: {
    name: 'ETH',
    image: Eth,
    fullName: 'Ethereum',
  },
  receiveCoinDetail: {
    name: 'AVAX',
    image: Coin2,
    fullName: 'Avalanche',
  },
  ConnectWallet: {
    name: '',
    image: '',
    Subname: '',
    Price: '',
  },
  ConnectNetwork: {
    name: '',
    image: '',
  },
  Alert: {
    open: false,
    vertical: '',
    horizontal: '',
    type: '',
  },
};

const reducer = (state: ArticleState = initialState, action: any): ArticleState => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        modal: action.modal,
      };
    case actionTypes.SELECT_TOKEN:
      return {
        ...state,
        CoinDetail: action.Coin,
      };
    case actionTypes.RECEIVE_TOKEN:
      return {
        ...state,
        receiveCoinDetail: action.Coin,
      };
    case actionTypes.CONNECT_WALLET:
      return {
        ...state,
        ConnectWallet: action.Coin,
      };
    case actionTypes.CONNET_NETWORK:
      return {
        ...state,
        ConnectNetwork: action.Coin,
      };
    case actionTypes.ALERT:
      return {
        ...state,
        Alert: action.Alert,
      };
    case actionTypes.OPEN_MODALS:
      return {
        ...state,
        Modal: action.Data,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        Modal: action.Data,
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        Search: action.Data,
      };
      case actionTypes.MENU:
      return {
        ...state,
        Menu: action.Data,
      };
  }
  return state;
};

export default reducer;
