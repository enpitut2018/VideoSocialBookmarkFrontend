import * as React from "react";
import { Helmet } from "react-helmet";
import LoginTemplate from "../templates/Login";

export default class Login extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | ログイン</title>
        </Helmet>
        <LoginTemplate />
      </>
    );
  }
}
