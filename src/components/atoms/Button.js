import * as React from "react";

import Card from "./Card";
import { elevate } from "../../theme/shadows";
import colors from "../../theme/colors";
import palette from "../../theme/palette";
import styled from "styled-components";

import sizes from "../../theme/sizes";

const StyledButton = styled(Card)`
  cursor: pointer;
  user-select: none;

  padding: ${sizes.atoms.Button.Default.Padding};
  margin: ${sizes.atoms.Button.Default.Margin};
  border-radius: ${sizes.atoms.Button.Default.BorderRadius};

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
