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
          <Text size="L" margin="10px 0 15px 0">
            マイプレイリスト
          </Text>
          {this.props.hasLoaded && (
            <Playlists user_id={this.props.user.id} isMine={true} />
          )}
        </Wrapper>
        <Wrapper dir="column">
          <Text size="L" margin="10px 0 15px 0">
            マイブックマーク
          </Text>
          {this.props.hasLoaded && (
            <UserBookmarks user_id={this.props.user.id} />
          )}
        </Wrapper>
      </BasicPageWrapper>
    );
  }
}
