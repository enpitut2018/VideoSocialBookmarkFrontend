import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Top from "./components/pages/Top";
import Thread from "./components/pages/Thread";
import MyPage from "./components/pages/MyPage";
import NotFound_404 from "./components/pages/NotFound_404";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Top} />
          <Route exact={true} path="/threads/:id" component={Thread} />
          <Route exact={true} path="/mypage" component={MyPage} />
          <Route path="*" component={NotFound_404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
