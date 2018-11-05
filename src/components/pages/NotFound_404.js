import * as React from "react";
import { Helmet } from "react-helmet";

import NotFoundTemplate from "../templates/NotFound_404";

export default class NotFound_404 extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | 404 Not Found</title>
        </Helmet>
        <NotFoundTemplate />
      </>
    );
  }
}
