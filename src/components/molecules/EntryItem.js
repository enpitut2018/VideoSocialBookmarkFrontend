import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import styled from "styled-components";
import { style } from "../mediaQuery";

const StyledWrapper = styled(Wrapper)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin: 16px 5px;

  ${style({
    S: `width: 95%`,
    M: `width: 90%`,
    L: `width: 90%`,
    XL: `width: 800px`
  })};
`;

const StyledInnerWrapper = styled(Wrapper)`
  align-items: flex-start;
  width: 100px;
`;

const StyledComment = styled(Text)`
  width: 100%;

  ${style({
    S: `margin-left: 10px`,
    M: `margin-left: 14px`,
    L: `margin-left: 18px`,
    XL: `margin-left: 22px`
  })};
`;

export default class EntryItem extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledInnerWrapper dir="column">
          <Text margin="0">{this.props.bookmark.user.name || "NoName"}</Text>
          <Text margin="0" level="XS">
            {this.props.bookmark.user.id}
          </Text>
        </StyledInnerWrapper>

        <StyledComment>{this.props.bookmark.comment}</StyledComment>
      </StyledWrapper>
    );
  }
}
