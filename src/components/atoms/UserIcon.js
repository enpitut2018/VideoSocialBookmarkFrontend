import React, { Component } from "react";
import styled from "styled-components";

import elevate from "../../theme/shadows";

const StyledUserIcon = styled.img`
  height: 44px;
  margin: 2px;
  border-radius: 50%;
  border-width: 0;

  &:hover {
    ${elevate(4)};
  }
  &:active {
    ${elevate(0)};
  }
`;

export default class UserIcon extends Component {
  render() {
    return <StyledUserIcon src={this.props.url} alt="User" />;
  }
}
