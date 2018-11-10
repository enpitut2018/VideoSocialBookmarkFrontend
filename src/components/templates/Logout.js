import React, { Component } from "react";

import Text from "../atoms/Text";
import LoadingIcon from "../atoms/LoadingIcon";
import BasicPageWrapper from "../../BasicPageWrapper";

import { connect } from "react-redux";
import { signOutUser } from "../../redux-token-auth-config";
import { Redirect } from "react-router";

class Logout extends Component {
  componentWillMount() {
    const { signOutUser } = this.props;
    signOutUser();
  }
  render() {
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
  { signOutUser }
)(Logout);
