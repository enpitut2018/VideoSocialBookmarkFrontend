import * as React from "react";
import Header from "../organisms/Header";

import Ranking from "../organisms/Ranking";
import URLSubmitForm from "../organisms/URLSubmitForm";

export default class Top extends React.Component<{}> {
  render() {
    return (
      <>
        <Header />
        <URLSubmitForm />
        <Ranking />
      </>
    );
  }
}
