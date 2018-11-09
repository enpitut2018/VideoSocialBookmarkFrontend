import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import styled, { css } from "styled-components";
import React, { Component } from "react";

const fontSizes = {
  XS: "0.7rem",
  S: "0.7rem",
  M: "1.0rem",
  L: "1.3rem",
  XL: "1.5rem"
};
const fontOpacities = {
  XS: 0.75,
  S: 0.85,
  M: 1.0,
  L: 1.0,
  XL: 1.0
};
const fontMargins = {
  XS: "1px 2px",
  S: "1px 4px",
  M: "4px 8px",
  L: "8px 16px",
  XL: "10px 20px"
};
const fontWeights = {
  XS: "300",
  S: "300",
  M: "300",
  L: "300",
  XL: "300"
};
const fontLineHeights = {
  XS: "1.1rem",
  S: "1.2rem",
  M: "1.5rem",
  L: "1.9rem",
  XL: "2.0rem"
};

const fontSize = size =>
  size ? (size in fontSizes ? fontSizes[size] : fontSizes.M) : fontSizes.M;
const fontOpacity = size =>
  size
    ? size in fontOpacities
      ? fontOpacities[size]
      : fontOpacities.M
    : fontOpacities.M;
const fontMargin = size =>
  size
    ? size in fontMargins
      ? fontMargins[size]
      : fontMargins.M
    : fontMargins.M;
const fontWeight = size =>
  size
    ? size in fontWeights
      ? fontWeights[size]
      : fontWeights.M
    : fontWeights.M;
const fontLineHeight = size =>
  size
    ? size in fontLineHeights
      ? fontLineHeights[size]
      : fontLineHeights.M
    : fontLineHeights.M;

export const textStyle = props => {
  return css`
    overflow: hidden;
    font-size: ${props.fontSize ? props.fontSize : fontSize(props.size)};
    color: ${props.color ? props.color : palette[colors.atoms.Text.Font]};
    margin: ${props.margin ? props.margin : fontMargin(props.size)};
    padding: ${props.padding && props.padding};
    opacity: ${props.opacity ? props.opacity : fontOpacity(props.size)};
    font-weight: ${props.fontWeight
    ? props.fontWeight
    : fontWeight(props.size)};
    ${props.height && `height: ${props.height}`};
    ${props.width && `width: ${props.width}`};
    ${props.userSelect && `user-select: ${props.userSelect};`};
    ${props.cursor && `cursor: ${props.cursor};`};
    ${props.css && props.css};
  `;
};

const StyledLine = styled.p`
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : fontLineHeight(props.size)};
  margin: 0;
`;

const StyledText = styled.div`
  ${props => textStyle(props)};
`;

// Textのchildrenは文字列のみ許される
export default class Text extends Component {
  render() {
    const children = this.props.children;
    let { size, lineHeight } = this.props;
    size = size ? size : "M";
    return (
      <StyledText {...this.props}>
        {typeof children === "string" || children instanceof String
          ? children.split("\n").map((line, i) => (
            <StyledLine key={i} size={size} lineHeight={lineHeight}>
              {line}
            </StyledLine>
          ))
          : children}
      </StyledText>
    );
  }
}
