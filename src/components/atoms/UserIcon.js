import React, { Component } from "react";
import styled from "styled-components";
import elevate from "../../theme/shadows";
import DefaultUserIcon from "../../assets/images/material-icon/baseline-account_circle-24px.svg";
import palette from "../../theme/palette";
import colors from "../../theme/colors";

const StyledUserIcon = styled.img`
  height: 44px;
  width: 44px;
  margin: 2px;
  border-radius: 50%;
  border-width: 0;
  display: block;

  &:hover {
    ${elevate(4)};
  }
  &:active {
    ${elevate(0)};
  }
`;

export default class UserIcon extends Component {
  render() {
    return this.props.url && this.props.url.length !== 0 ? (
      <StyledUserIcon src={this.props.url} alt="User" />
    ) : (
      <DefaultUserIcon
        fill={palette[colors.organisms.Header.Icon.Fill]}
        width="32px"
        height="32px"
      />
    );
  }
}
