import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./Reducers/reducer";
import rootReducer from "./Reducers/RootReducer";


export const store: Store<ArticleState, ArticleAction> & {
    dispatch: DispatchType;
  } = createStore(reducer, applyMiddleware(thunk));