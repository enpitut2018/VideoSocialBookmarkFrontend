import React, { Component } from "react";

import Header from "../organisms/Header";
import Wrapper from "../atoms/Wrapper";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Title from "../atoms/Title";

export default class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <Title>Login</Title>
          <Form
            render={() => (
              <>
                <TextInput placeholder="email" />
                <TextInput placeholder="password" />
                <Button mode="Primary">Submit</Button>
              </>
            )}
          />
        </Wrapper>
      </>
    );
  }
}
