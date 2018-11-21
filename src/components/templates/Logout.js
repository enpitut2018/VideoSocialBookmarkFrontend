import React, { Component } from "react";
import { connect } from "react-redux";
import { signOutUser } from "../../redux-token-auth-config";
import { Redirect } from "react-router";

import Text from "../atoms/Text";
import LoadingIcon from "../atoms/LoadingIcon";
import BasicPageWrapper from "../../BasicPageWrapper";
import { addToast } from "../../actions/ToastActions";
import { LOGOUT_TOAST, timeout_ms } from "../organisms/ToastManager";
import store from "../../store";

class Logout extends Component {
  componentWillMount() {
    const { signOutUser } = this.props;
    signOutUser();
  }
  render() {
    if (!this.props.isSignedIn) {
      store.dispatch(addToast(LOGOUT_TOAST, "ログアウトしました", timeout_ms));
    }
    return (
      <BasicPageWrapper>
        {!this.props.isSignedIn && <Redirect to="/" />}
        <Text size="XL">ログアウト中…</Text>
        <LoadingIcon />
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
    signOutUser
  }
)(Logout);
