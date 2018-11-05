import React, { Component } from "react";
import { Helmet } from "react-helmet";
import UserTemplate from "../templates/User";

export default class User extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | ユーザー</title>
        </Helmet>
        <UserTemplate user_id={this.props.match.params.id} />
      </>
    );
  }
}
