import * as actionTypes from "./actionTypes";
import Eth from "../assets/icon/Eth.png";

const initialState: ArticleState = {
  model: "abdc",
  CoinDetail: {
    name: "ETH",
    image: Eth,
  },
  receiveCoinDetail:{
    name: "ETH",
    image: Eth,
  },
};

const reducer = (
  state: ArticleState = initialState,
  action: any
): ArticleState => {
  switch (action.type) {
    case actionTypes.OPEN_MODEL:
      return {
        ...state,
        model: action.model,
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
  }
  return state;
};

export default reducer;
