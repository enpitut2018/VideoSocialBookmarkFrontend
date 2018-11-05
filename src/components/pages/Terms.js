import React, { Component } from "react";
import { Helmet } from "react-helmet";
import TermsTemplate from "../templates/Terms";

export default class Terms extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | 利用規約</title>
        </Helmet>
        <TermsTemplate />
      </>
    );
  }
}
