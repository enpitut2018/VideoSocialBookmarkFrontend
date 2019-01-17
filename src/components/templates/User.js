import React, { Component } from "react";
import UserBookmarks from "../organisms/UserBookmarks";
import Text from "../atoms/Text";
import BasicPageWrapper from "../../BasicPageWrapper";
import Playlists from "../organisms/Playlists";

export default class UserTemplate extends Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="XL">User {this.props.user_id}</Text>
        <Text size="L">プレイリスト</Text>
        <Playlists user_id={this.props.user_id} isMine={false} />
        <Text size="L">ブックマーク</Text>
        <UserBookmarks user_id={this.props.user_id} />
      </BasicPageWrapper>
    );
  }
}
