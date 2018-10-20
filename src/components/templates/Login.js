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

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }

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
                  required
                />
                <TextInput
                  type="password"
                  placeholder="password"
                  handleChange={this.handlePasswordChange}
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
