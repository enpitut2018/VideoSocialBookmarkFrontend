import * as React from "react";
import Button from "../atoms/Button";
import Header from "../organisms/Header";
import Wrapper from "../atoms/Wrapper";

export default class NotFound_404 extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <h1>404 Not Found</h1>
        </Wrapper>
      </>
    );
  }
}
