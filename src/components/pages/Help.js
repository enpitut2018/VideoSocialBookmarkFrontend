import React, { Component } from "react";
import { Helmet } from "react-helmet";
import HelpTemplate from "../templates/Help";

export default class Help extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | ヘルプ</title>
        </Helmet>
        <HelpTemplate />
      </>
    );
  }
}
