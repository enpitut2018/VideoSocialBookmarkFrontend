import React, { Component } from "react";
import AboutTemplate from "../templates/About";
import { Helmet } from "react-helmet";

export default class About extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | VSBとは</title>
        </Helmet>
        <AboutTemplate />
      </>
    );
  }
}
