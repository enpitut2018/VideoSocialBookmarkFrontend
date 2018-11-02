import * as React from "react";

import { applyMiddleware, createStore, compose } from "redux";
import colors from "./theme/colors";
import palette from "./theme/palette";

import { Provider } from "react-redux";
import Routes from "./Routes";
import { createGlobalStyle } from "styled-components";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { verifyCredentials } from "./redux-token-auth-config";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;
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

const initialState = {
  reduxTokenAuth: {
    currentUser: {
      isLoading: false,
      isSignedIn: false,
      attributes: {}
    }
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
verifyCredentials(store);

class App extends React.Component {
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
