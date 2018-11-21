import * as React from "react";

import colors from "./theme/colors";
import palette from "./theme/palette";

import { Provider } from "react-redux";
import Routes from "./Routes";
import { createGlobalStyle } from "styled-components";
import { verifyCredentials } from "./redux-token-auth-config";
import store from "./store";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
    font-display: swap;

    margin: 0;
    padding: 0;
    height: 100%;
    background-color: ${palette[colors.Background]};
    color: ${palette[colors.Font]};
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: ${palette[colors.Background]};
    color: ${palette[colors.Font]};
  }
  button, input, select, textarea {
    font-family : inherit;
    font-size   : 100%;
  }
`;

class App extends React.Component {
  constructor() {
    super();
    verifyCredentials(store);
  }
  render() {
    return (
      <>
        <Provider store={store}>
          <Routes />
        </Provider>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
