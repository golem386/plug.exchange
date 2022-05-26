import React from "react";
import { Provider } from 'react-redux'
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { IndexPage } from "./pages";
import { store } from "./redux/Store";


const MyComponent = styled("div")({
  backgroundColor: "#FFFFFF",
  height: "100%",
  width: "100%",
});
function App() {
  return (
    <Provider store={store}>
      <MyComponent>
        <IndexPage />
      </MyComponent>
    </Provider>
  );
}

export default App;
