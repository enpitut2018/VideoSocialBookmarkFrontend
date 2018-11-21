import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";

import BasicPageWrapper from "../../BasicPageWrapper";
import Text from "../atoms/Text";
import UserBookmarks from "../organisms/UserBookmarks";
import Playlists from "../organisms/Playlists";

export default class MyPageTemplate extends Component {
  render() {
    return (
      <BasicPageWrapper>
        <Wrapper dir="column">
          <Text level="XL">マイプレイリスト</Text>
          {this.props.hasLoaded && (
            <Playlists user_id={this.props.user.id} />
          )}
        </Wrapper>
        <Wrapper dir="column">
          <Text level="XL">マイブックマーク</Text>
          {this.props.hasLoaded && (
            <UserBookmarks user_id={this.props.user.id} />
          )}
        </Wrapper>
      </BasicPageWrapper>
    );
  }
}
