import * as React from "react";

import elevate from "../../theme/shadows";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import styled from "styled-components";

const paddings = {
  S: "2px 4px",
  M: "10px 20px",
  L: "13px 26px",
  XL: "16px 32px"
};
const margins = {
  S: "6px",
  M: "10px",
  L: "13px",
  XL: "16px"
};
const borderRadii = {
  S: "12px",
  M: "23px",
  L: "23px",
  XL: "23px"
};
const heights = {
  S: "calc(1.1rem + 4px)",
  M: "calc(1.5rem + 20px)",
  L: "calc(1.9rem + 26px)",
  XL: "calc(2.0rem + 32px)"
};

const StyledButton = styled.button`
  overflow: hidden;
  display: inline-flex;

  cursor: pointer;
  user-select: none;
  outline: none;
  height: ${props => (props.size in heights ? heights[props.size] : heights.M)};

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
  ${props => (props.elevation ? elevate(props.elevation) : elevate(2))};

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
        {...this.props}
        mode={this.props.mode}
        elevation={this.props.elevation ? this.props.elevation : 2}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}
