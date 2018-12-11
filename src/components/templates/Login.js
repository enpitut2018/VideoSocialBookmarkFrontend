import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from "../../redux-token-auth-config";
import { Redirect } from "react-router";

import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Form from "../molecules/Form";
import LabeledInput from "../molecules/LabeledInput";
import palette from "../../theme/palette";
import BasicPageWrapper from "../../BasicPageWrapper";
import { addToast } from "../../actions/ToastActions";
import { LOGIN_TOAST, timeout_ms } from "../organisms/ToastManager";
import store from "../../store";

class Login extends Component {
  state = { email: "", password: "" };

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

    if (this.props.isSignedIn) {
      store.dispatch(addToast(LOGIN_TOAST, "ログインしました", timeout_ms));
    }

    return (
      <BasicPageWrapper>
        {this.props.isSignedIn && <Redirect to="/" />}
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
                <Text fontWeight={"bold"} color={palette["White00"]}>
                  ログイン
                </Text>
              </Button>
            </>
          )}
        />
      </BasicPageWrapper>
    );
  }
}

export default connect(
  store => ({
    isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn,
    isLoading: store.reduxTokenAuth.currentUser.isLoading
  }),
  {
    signInUser
  }
)(Login);
