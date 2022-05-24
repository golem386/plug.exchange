import * as actionTypes from './actionTypes';

export function onModelOpen(model: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.OPEN_MODEL,
    model,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

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

export function connetWallet(Coin: ICoin) {
  const action: CoinAction = {
    type: actionTypes.CONNECT_WALLET,
    Coin,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function connetNetwork(Coin: ICoin) {
  const action: CoinAction = {
    type: actionTypes.CONNET_NETWORK,
    Coin,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
