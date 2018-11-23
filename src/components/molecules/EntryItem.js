import React, { Component } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import styled from "styled-components";
import { style } from "../mediaQuery";
import AnkerStyle from "../atoms/AnkerStyle";
import UserIcon from "../atoms/UserIcon";

const StyledWrapper = styled(Wrapper)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin: 16px 5px;

  &:last-child {
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

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
  margin-left: 10px;
  ${AnkerStyle};
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

const UserIconWrapper = styled.div`
  cursor: pointer;
`;

export default class EntryItem extends Component {
  render() {
    return (
      <StyledWrapper>
        <Link to={`/users/${this.props.comment.user.id}`}>
          <UserIconWrapper>
            <UserIcon url={this.props.comment.user.avatar} />
          </UserIconWrapper>
        </Link>
        <StyledInnerWrapper dir="column">
          <Text margin="0">
            {this.props.comment.user.name || "NoName"}
          </Text>
        </StyledInnerWrapper>

        <StyledComment>{this.props.comment.content}</StyledComment>
      </StyledWrapper>
    );
  }
}
