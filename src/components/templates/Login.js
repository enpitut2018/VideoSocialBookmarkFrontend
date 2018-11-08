import React, { Component } from "react";

import Wrapper from "../atoms/Wrapper";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Form from "../molecules/Form";
import LabeledInput from "../molecules/LabeledInput";
import Header from "../organisms/Header";

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
          <Text size="XL" css="margin-bottom: 8px;">
            ログイン
          </Text>
          <Form
            onSubmit={submit}
            render={() => (
              <>
                <LabeledInput
                  name="email"
                  label={() => (
                    <Text size="S" margin="0.5rem 0 0 26px">
                      メールアドレス
                    </Text>
                  )}
                  input={() => (
                    <TextInput
                      placeholder="メールアドレス"
                      handleChange={this.handleEmailChange}
                      name="email"
                      value={this.state.email}
                      required
                    />
                  )}
                  value={this.state.email}
                />
                <LabeledInput
                  name="password"
                  label={() => (
                    <Text size="S" margin="0.5rem 0 0 26px">
                      パスワード
                    </Text>
                  )}
                  input={() => (
                    <TextInput
                      type="password"
                      placeholder="パスワード"
                      handleChange={this.handlePasswordChange}
                      name="password"
                      value={this.state.password}
                      required
                    />
                  )}
                  value={this.state.password}
                />
                <Button mode="Primary" type="submit">
                  送信
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
