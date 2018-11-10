import React, { Component } from "react";
import UserBookmarks from "../organisms/UserBookmarks";
import Text from "../atoms/Text";
import BasicPageWrapper from "../../BasicPageWrapper";

export default class UserTemplate extends Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="L">
          User {this.props.user_id}
          のブックマーク
        </Text>
        <UserBookmarks userId={this.props.user_id} />
      </BasicPageWrapper>
    );
  }
}
