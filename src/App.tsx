import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import { applyMiddleware, createStore, Store } from "redux";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { IndexPage } from "./pages";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, applyMiddleware(thunk));
const MyComponent = styled("div")({
  backgroundColor: "#FFFFFF",
  height: "100%",
  width: "100%",
});
function App() {
  return (
    // <Provider store={store}>
    <MyComponent>
      <IndexPage />
    </MyComponent>
    // </Provider>
  );
}

export default App;
