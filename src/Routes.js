import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Top from "./components/pages/Top";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Top} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
