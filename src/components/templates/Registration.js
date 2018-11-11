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
  state = { email: "", password: "", passwordConfirmation: "" };

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
              <LabeledInput
                name="passwordConfirmation"
                label={() => (
                  <Text size="S" margin="0.5rem 0 0 26px">
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
                <Text fontWeight={"bold"} color={palette["White00"]}>
                  送信
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
