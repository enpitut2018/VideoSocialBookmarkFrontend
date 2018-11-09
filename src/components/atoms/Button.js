import * as React from "react";

import elevate from "../../theme/shadows";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import styled from "styled-components";

const paddings = {
  S: "1px 2px",
  M: "4px 9px",
  L: "12px 22px",
  XL: "18px 26px"
};
const margins = {
  S: "1px",
  M: "10px",
  L: "13px",
  XL: "16px"
};
const borderRadii = {
  S: "99999px",
  M: "99999px",
  L: "99999px",
  XL: "99999px"
};

const StyledButton = styled.button`
  overflow: hidden;
  display: inline-flex;

  cursor: pointer;
  user-select: none;
  outline: none;

  ${props => props.height && `height: ${props.height}`};

  padding: ${props =>
    props.size in paddings ? paddings[props.size] : paddings.M};
  margin: ${props => (props.size in margins ? margins[props.size] : margins.M)};
  border-radius: ${props =>
    props.size in borderRadii ? borderRadii[props.size] : borderRadii.M};
  border-width: 0;

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
  ${props =>
    props.mode !== "Light" &&
    (props.elevation ? elevate(props.elevation) : elevate(2))};
  ${props => props.css && props.css};

  &:hover {
    ${props =>
    props.mode !== "Light" &&
      elevate(props.elevation ? props.elevation + 2 : 4)};
  }
  &:active {
    ${props => props.mode !== "Light" && elevate(0)};
  }
`;

export default class Button extends React.Component {
  render() {
    return (
      <StyledButton
        mode={this.props.mode}
        elevation={this.props.elevation ? this.props.elevation : 2}
        onClick={this.props.onClick}
        {...this.props}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}
