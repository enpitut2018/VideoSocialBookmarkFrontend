import React, { Component } from "react";

import Wrapper from "../atoms/Wrapper";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Form from "../molecules/Form";
import LabeledInput from "../molecules/LabeledInput";
import Header from "../organisms/Header";

import { connect } from "react-redux";
import { registerUser } from "../../redux-token-auth-config";
import { Redirect } from "react-router";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", passwordConfirmation: "" };
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  handlePasswordConfirmationChange = e => {
    this.setState({ passwordConfirmation: e.target.value });
  };

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
          <Text level="XL" css="margin-bottom: 8px;">
            アカウントの作成
          </Text>
          <Form
            onSubmit={submit}
            render={() => (
              <>
                <LabeledInput
                  name="email"
                  label={() => (
                    <Text level="S" margin="0.5rem 0 0 26px">
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
                    <Text level="S" margin="0.5rem 0 0 26px">
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
                <LabeledInput
                  name="passwordConfirmation"
                  label={() => (
                    <Text level="S" margin="0.5rem 0 0 26px">
                      パスワードの確認
                    </Text>
                  )}
                  input={() => (
                    <TextInput
                      type="password"
                      placeholder="パスワードの確認"
                      handleChange={this.handlePasswordConfirmationChange}
                      name="passwordConfirmation"
                      value={this.state.passwordConfirmation}
                      required
                    />
                  )}
                  value={this.state.passwordConfirmation}
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
    isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
  }),
  { registerUser }
)(Registration);
