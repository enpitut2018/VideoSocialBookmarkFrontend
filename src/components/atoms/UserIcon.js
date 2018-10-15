import React, { Component } from "react";
import styled from "styled-components";

import { elevate } from "../../theme/shadows";
import sizes from "../../theme/sizes";

const StyledUserIcon = styled.img`
  width: ${sizes.atoms.UserIcon.Default.Width};
  height: ${sizes.atoms.UserIcon.Default.Height};
  margin: ${sizes.atoms.UserIcon.Default.Margin};
  border-radius: ${sizes.atoms.UserIcon.Default.BorderRadius};

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
