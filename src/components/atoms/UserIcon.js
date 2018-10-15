import React, { Component } from "react";
import styled from "styled-components";

import { elevate } from "../../theme/shadows";

const StyledUserIcon = styled.img`
  height: 40px;
  margin: 9px 15px;
  border-radius: 50%;

  ${props => elevate(2)};

  &:hover {
    ${props => elevate(4)};
  }
  &:active {
    ${props => elevate(0)};
  }
`;

export default class UserIcon extends Component {
  render() {
    return <StyledUserIcon src={this.props.url} alt="User" />;
  }
}
