import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import Ranking from "../organisms/Ranking";
import URLSubmitForm from "../organisms/URLSubmitForm";

export default class Top extends React.Component<{}> {
  render() {
    return (
      <>
        <Header />
        <URLSubmitForm />
        <Ranking />
        <Footer />
      </>
    );
  }
}
