import React, { Component } from "react";

import Header from "../organisms/Header";
import Wrapper from "../atoms/Wrapper";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

import { connect } from "react-redux";
import { signInUser } from "../../redux-token-auth-config";
import { Redirect } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { signInUser } = this.props;
    const { email, password } = this.state;
    const submit = e => {
      e.preventDefault();
      signInUser({ email, password });
    };
    return (
      <>
        {this.props.isSignedIn && <Redirect to="/" />}
        <Header />
        <Wrapper dir="column">
          <Text level="XL">Login</Text>
          <Form
            onSubmit={submit}
            render={() => (
              <>
                <TextInput
                  placeholder="email"
                  handleChange={this.handleEmailChange}
                  value={this.state.email}
                  required
                />
                <TextInput
                  type="password"
                  placeholder="password"
                  handleChange={this.handlePasswordChange}
                  value={this.state.password}
                  required
                />
                <Button mode="Primary" type="submit">
                  Submit
                </Button>
              </>
            )}
          />
        </Wrapper>
      </>
    );
  }
}

export default connect(
  store => ({
    isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn,
    isLoading: store.reduxTokenAuth.currentUser.isLoading
  }),
  { signInUser }
)(Login);
