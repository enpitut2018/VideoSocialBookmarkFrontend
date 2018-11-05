import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PrivacyTemplate from "../templates/Privacy";

export default class Privacy extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | プライバシーポリシー</title>
        </Helmet>
        <PrivacyTemplate />
      </>
    );
  }
}
