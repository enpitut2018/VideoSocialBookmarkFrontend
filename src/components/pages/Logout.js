import * as React from "react";
import { Helmet } from "react-helmet";
import LogoutTemplate from "../templates/Logout";

export default class Logout extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | ログアウト</title>
        </Helmet>
        <LogoutTemplate />
      </>
    );
  }
}
