import * as React from "react";
import Header from "../organisms/Header";

import Ranking from "../organisms/Ranking";
import Form from "../molecules/Form";

export default class Top extends React.Component<{}> {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Ranking />
      </>
    );
  }
}
