import * as React from "react";

import { elevate } from "../../theme/shadows";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;

  cursor: pointer;
  user-select: none;
  outline: none;

  padding: 12px 26px;
  margin: 10px;
  border-radius: 23px;

  background-color: ${props =>
    props.mode
      ? props.mode in colors.atoms.Button
        ? palette[colors.atoms.Button[props.mode].Background]
        : palette[colors.atoms.Button.Background]
      : palette[colors.atoms.Button.Background]};
  color: ${props =>
    props.mode
      ? props.mode in colors.atoms.Button
        ? palette[colors.atoms.Button[props.mode].Font]
        : palette[colors.atoms.Button.Font]
      : palette[colors.atoms.Button.Font]};

  ${props => props.dir && "flex-direction: " + props.dir};
  ${props => (props.elevation ? elevate(props.elevation) : elevate(0))};

  &:hover {
    ${props => elevate(props.elevation ? props.elevation + 2 : 4)};
  }
  &:active {
    ${props => elevate(0)};
  }
`;

export default class Button extends React.Component {
  render() {
    return (
      <StyledButton
        mode={this.props.mode}
        elevation={this.props.elevation ? this.props.elevation : 2}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}
