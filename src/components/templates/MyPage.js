import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";

import BasicPageWrapper from "../../BasicPageWrapper";
import Text from "../atoms/Text";
import UserBookmarks from "../organisms/UserBookmarks";
import Playlists from "../organisms/Playlists";
import styled from "styled-components";

const StyledText = styled(Text)`
  color: rgb(121, 121, 121);
  margin-bottom: 10px;
`;

export default class MyPageTemplate extends Component {
  render() {
    return (
      <BasicPageWrapper>
        <Wrapper dir="column">
          <StyledText level="XL">マイプレイリスト</StyledText>
          {this.props.hasLoaded && (
            <Playlists user_id={this.props.user.id} />
          )}
        </Wrapper>
        <Wrapper dir="column">
          <StyledText level="XL">マイブックマーク</StyledText>
          {this.props.hasLoaded && (
            <UserBookmarks user_id={this.props.user.id} />
          )}
        </Wrapper>
      </BasicPageWrapper>
    );
  }
}
