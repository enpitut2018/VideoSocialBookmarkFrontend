import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux-token-auth-config";
import { Redirect } from "react-router";

import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Form from "../molecules/Form";
import LabeledInput from "../molecules/LabeledInput";
import palette from "../../theme/palette";
import BasicPageWrapper from "../../BasicPageWrapper";
import { addToast } from "../../actions/ToastActions";
import { REGISTRATION_TOAST, timeout_ms } from "../organisms/ToastManager";
import store from "../../store";

class Registration extends Component {
  state = { name: "", email: "", password: "", passwordConfirmation: "" };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

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
    const { name, email, password, passwordConfirmation } = this.state;
    const submit = e => {
      e.preventDefault();
      registerUser({ name, email, password, passwordConfirmation });
    };

    if (this.props.isSignedIn) {
      store.dispatch(
        addToast(REGISTRATION_TOAST, "アカウントを作成しました", timeout_ms)
      );
    }

    return (
      <BasicPageWrapper>
        {this.props.isSignedIn && <Redirect to="/" />}
        <Text size="XL" css="margin-bottom: 8px;">
          アカウントの作成
        </Text>
        <Form
          onSubmit={submit}
          render={() => (
            <>
              <LabeledInput
                name="email"
                label={isFocused => (
                  <Text
                    size="S"
                    margin="0.5rem 0 0 26px"
                    fontSize={isFocused ? "0.7rem" : "1rem"}
                    css="transition: all 0.2s ease-in-out;"
                  >
                    メールアドレス
                  </Text>
                )}
                input={(handleFocus, handleBlur) => (
                  <TextInput
                    handleChange={this.handleEmailChange}
                    name="email"
                    value={this.state.email}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    required
                  />
                )}
                value={this.state.email}
              />
              <LabeledInput
                name="name"
                label={isFocused => (
                  <Text
                    size="S"
                    margin="0.5rem 0 0 26px"
                    fontSize={isFocused ? "0.7rem" : "1rem"}
                    css="transition: all 0.2s ease-in-out;"
                  >
                    名前
                  </Text>
                )}
                input={(handleFocus, handleBlur) => (
                  <TextInput
                    handleChange={this.handleNameChange}
                    name="name"
                    value={this.state.name}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    required
                  />
                )}
                value={this.state.name}
              />
              <LabeledInput
                name="password"
                label={isFocused => (
                  <Text
                    size="S"
                    margin="0.5rem 0 0 26px"
                    fontSize={isFocused ? "0.7rem" : "1rem"}
                    css="transition: all 0.2s ease-in-out;"
                  >
                    パスワード
                  </Text>
                )}
                input={(handleFocus, handleBlur) => (
                  <TextInput
                    type="password"
                    handleChange={this.handlePasswordChange}
                    name="password"
                    value={this.state.password}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    required
                  />
                )}
                value={this.state.password}
              />
              <LabeledInput
                name="passwordConfirmation"
                label={isFocused => (
                  <Text
                    size="S"
                    margin="0.5rem 0 0 26px"
                    fontSize={isFocused ? "0.7rem" : "1rem"}
                    css="transition: all 0.2s ease-in-out;"
                  >
                    パスワードの確認
                  </Text>
                )}
                input={(handleFocus, handleBlur) => (
                  <TextInput
                    type="password"
                    handleChange={this.handlePasswordConfirmationChange}
                    name="passwordConfirmation"
                    value={this.state.passwordConfirmation}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    required
                  />
                )}
                value={this.state.passwordConfirmation}
              />

              <Button mode="Primary" type="submit">
                <Text fontWeight={"bold"} color={palette["White00"]}>
                  登録
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
    isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
  }),
  {
    registerUser
  }
)(Registration);
