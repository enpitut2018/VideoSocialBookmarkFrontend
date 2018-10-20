import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import styled from "styled-components";

const StyledWrapper = styled(Wrapper)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 800px;
  margin: 12px 5px;
`;

const StyledInnerWrapper = styled(Wrapper)`
  width: 100px;
`;

const StyledComment = styled(Text)`
  width: 100%;
  margin-left: 24px;
`;

export default class EntryItem extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledInnerWrapper dir="column">
          <Text>{this.props.bookmark.user.name || "NoName"}</Text>
          <Text level="XS">{this.props.bookmark.user.id}</Text>
        </StyledInnerWrapper>

        <StyledComment>{this.props.bookmark.comment}</StyledComment>
      </StyledWrapper>
    );
  }
}
