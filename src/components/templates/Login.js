import React, { Component } from "react";

import Header from "../organisms/Header";
import Wrapper from "../atoms/Wrapper";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

import { connect } from "react-redux";
import { signInUser } from "../../redux-token-auth-config";

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
    const submit = () => {
      signInUser({ email, password });
    };
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <Text level="XL">Login</Text>
          <Form
            render={() => (
              <>
                <TextInput
                  placeholder="email"
                  handleChange={this.handleEmailChange}
                />
                <TextInput
                  placeholder="password"
                  handleChange={this.handlePasswordChange}
                />
                <Button mode="Primary" onClick={submit}>
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
  null,
  { signInUser }
)(Login);
