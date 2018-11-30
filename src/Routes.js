import * as React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Top from "./components/pages/Top";
import Entry from "./components/pages/Entry";
import MyPage from "./components/pages/MyPage";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import NotFound_404 from "./components/pages/NotFound_404";
import About from "./components/pages/About";
import Terms from "./components/pages/Terms";
import Privacy from "./components/pages/Privacy";
import Help from "./components/pages/Help";
import User from "./components/pages/User";
import { generateRequireSignInWrapper } from "redux-token-auth";
import Registration from "./components/pages/Registration";
import Playlist from "./components/pages/Playlist";
import Search from "./components/pages/Search";
import PopupVideo from "./components/organisms/PopupVideo";

const requireSignIn = generateRequireSignInWrapper({
  redirectPathIfNotSignedIn: "/login"
});
class Routes extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Top} />
            <Route exact={true} path="/entries/:id" component={Entry} />
            <Route exact={true} path="/playlist/:id" component={Playlist} />
            <Route exact={true} path="/users/:id" component={User} />
            <Route
              exact={true}
              path="/mypage"
              component={requireSignIn(MyPage)}
            />
            <Route exact={true} path="/search/:query" component={Search} />
            <Route exact={true} path="/about" component={About} />
            <Route exact={true} path="/terms" component={Terms} />
            <Route exact={true} path="/privacy" component={Privacy} />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/logout" component={Logout} />
            <Route exact={true} path="/registration" component={Registration} />
            <Route exact={true} path="/help" component={Help} />
            <Route path="*" component={NotFound_404} />
          </Switch>
        </BrowserRouter>
        <PopupVideo />
      </>
    );
  }
}

export default Routes;
