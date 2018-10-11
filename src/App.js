import * as React from "react";

import { applyMiddleware, createStore } from "redux";
import colors from "./theme/colors";
import palette from "./theme/palette";

import { Provider } from "react-redux";
import Routes from "./Routes";
import { injectGlobal } from "styled-components";
import reducers from "./reducers";
import thunk from "redux-thunk";

injectGlobal`
  html {
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
`;

const initialState = {
  reduxTokenAuth: {
    reduxTokenAuth: {
      currentUser: {
        attributes: {
          firstName: null
        },
        isLoading: false,
        isSignedIn: false
      }
    }
  }
};

const devtool =
  process.env.NODE_ENV === "development" && window["devToolsExtension"]
    ? window["devToolsExtension"]()
    : f => f;
const middleware = applyMiddleware(thunk);

const store = middleware(devtool(createStore))(reducers, initialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
