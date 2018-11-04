import * as React from "react";
import { Helmet } from "react-helmet";

import RegistrationTemplate from "../templates/Registration";

export default class Registration extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | アカウントの作成</title>
        </Helmet>
        <RegistrationTemplate />
      </>
    );
  }
}
