import React, { Component } from "react";

import BasicPageWrapper from "../../BasicPageWrapper";
import Text from "../atoms/Text";
import UserBookmarks from "../organisms/UserBookmarks";

export default class MyPageTemplate extends Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="L">マイブックマーク</Text>
        {this.props.hasLoaded && <UserBookmarks userId={this.props.user.id} />}
      </BasicPageWrapper>
    );
  }
}
