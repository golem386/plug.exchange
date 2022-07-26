import * as actionTypes from '../../actionTypes';

export function onSelectCoin(Coin: ICoin) {
    const action: CoinAction = {
      type: actionTypes.SELECT_TOKEN,
      Coin,
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }
  export function onReceiveCoin(Coin: ICoin) {
    const action: CoinAction = {
      type: actionTypes.RECEIVE_TOKEN,
      Coin,
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }

  export function handleClick(Alert: Alert) {
    const action: AlertAction = {
      type: actionTypes.ALERT,
      Alert,
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }

  export function OpenModal() {
    const action: OpenModel = {
      type: actionTypes.OPEN_MODALS,
      Data: true
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }

  export function closeModal() {
    const action: OpenModel = {
      type: actionTypes.CLOSE_MODAL,
      Data: false
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }
  
  export function Search(val:boolean) {
    const action: OpenModel = {
      type: actionTypes.SEARCH,
      Data: val
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }

  export function Menu(val:boolean) {
    const action: OpenModel = {
      type: actionTypes.MENU,
      Data: val
    };
    return (dispatch: DispatchType) => {
      dispatch(action);
    };
  }