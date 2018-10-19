import React, { Component } from "react";

import Header from "../organisms/Header";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";

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
      <>
        {!this.props.isSignedIn && <Redirect to="/" />}
        <Header />
        <Wrapper dir="column">
          <Text level="XL">Logout</Text>
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
  { signOutUser }
)(Logout);
