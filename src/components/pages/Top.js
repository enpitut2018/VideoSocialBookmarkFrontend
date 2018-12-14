import * as React from "react";
import { Helmet } from "react-helmet";
import TemplateTop from "../templates/Top";

export default class Top extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark</title>
        </Helmet>
        <TemplateTop />
      </>
    );
  }
}
