import React, { Component } from "react";
import UserTemplate from "../templates/User";

export default class User extends Component {
  render() {
    return (
      <UserTemplate user_id={this.props.match.params.id} />
    );
  }
}
