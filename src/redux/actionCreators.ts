import * as actionTypes from "./actionTypes";

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

