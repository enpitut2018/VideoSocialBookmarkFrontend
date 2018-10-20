import React, { Component } from "react";

import Header from "../organisms/Header";
import Wrapper from "../atoms/Wrapper";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

import { connect } from "react-redux";
import { registerUser } from "../../redux-token-auth-config";
import { Redirect } from "react-router";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", passwordConfirmation: "" };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePasswordConfirmationChange = this.handlePasswordConfirmationChange.bind(
      this
    );
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handlePasswordChange(password) {
    this.setState({ password });
  }

  handlePasswordConfirmationChange(passwordConfirmation) {
    this.setState({ passwordConfirmation });
  }

  render() {
    const { registerUser } = this.props;
    const { email, password, passwordConfirmation } = this.state;
    const submit = e => {
      e.preventDefault();
      registerUser({ email, password, passwordConfirmation });
    };
    return (
      <>
        {this.props.isSignedIn && <Redirect to="/" />}
        <Header />
        <Wrapper dir="column">
          <Text level="XL">Registration</Text>
          <Form
            onSubmit={submit}
            render={() => (
              <>
                <TextInput
                  placeholder="email"
                  handleChange={this.handleEmailChange}
                />
                <TextInput
                  type="password"
                  placeholder="password"
                  handleChange={this.handlePasswordChange}
                />
                <TextInput
                  type="password"
                  placeholder="password confirmation"
                  handleChange={this.handlePasswordConfirmationChange}
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
    isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
  }),
  { registerUser }
)(Registration);
