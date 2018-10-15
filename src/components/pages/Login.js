import React, { Component } from "react";

import Header from "../organisms/Header";
import Wrapper from "../atoms/Wrapper";

export default class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>Login</Wrapper>
      </>
    );
  }
}
