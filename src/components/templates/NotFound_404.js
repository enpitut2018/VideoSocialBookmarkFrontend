import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Wrapper from "../atoms/Wrapper";

export default class NotFound_404 extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <h1>404 Not Found</h1>
        </Wrapper>
        <Footer />
      </>
    );
  }
}
