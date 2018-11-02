import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import styled, { css } from "styled-components";
import React, { Component } from "react";

const fontSizes = {
  XS: "0.7rem",
  S: "0.9rem",
  M: "1.1rem",
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
  S: "4px 7px",
  M: "5px 13px",
  L: "12px 16px",
  XL: "15px 20px"
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

const fontSize = level =>
  level ? (level in fontSizes ? fontSizes[level] : fontSizes.M) : fontSizes.M;
const fontOpacity = level =>
  level
    ? level in fontOpacities
      ? fontOpacities[level]
      : fontOpacities.M
    : fontOpacities.M;
const fontMargin = level =>
  level
    ? level in fontMargins
      ? fontMargins[level]
      : fontMargins.M
    : fontMargins.M;
const fontWeight = level =>
  level
    ? level in fontWeights
      ? fontWeights[level]
      : fontWeights.M
    : fontWeights.M;
const fontLineHeight = level =>
  level
    ? level in fontLineHeights
      ? fontLineHeights[level]
      : fontLineHeights.M
    : fontLineHeights.M;

export const textStyle = props => {
  return css`
    overflow: hidden;
    font-size: ${props.fontSize ? props.fontSize : fontSize(props.level)};
    color: ${props.color ? props.color : palette[colors.atoms.Text.Font]};
    margin: ${props.margin ? props.margin : fontMargin(props.level)};
    opacity: ${props.opacity ? props.opacity : fontOpacity(props.level)};
    font-weight: ${props.fontWeight
      ? props.fontWeight
      : fontWeight(props.level)};
    ${props.height && `height: ${props.height}`};
    ${props.width && `width: ${props.width}`};
    ${props.userSelect && `user-select: ${props.userSelect};`};
    ${props.cursor && `cursor: ${props.cursor};`};
    ${props.css && props.css};
  `;
};

const StyledLine = styled.p`
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : fontLineHeight(props.level)};
  margin: 0;
`;

const StyledText = styled.div`
  ${props => textStyle(props)};
`;

// Textのchildrenは文字列のみ許される
export default class Text extends Component {
  render() {
    const children = this.props.children;
    let { level, lineHeight } = this.props;
    level = level ? level : "M";
    return (
      <StyledText {...this.props}>
        {typeof children === "string" || children instanceof String
          ? children.split("\n").map((line, i) => (
              <StyledLine key={i} level={level} lineHeight={lineHeight}>
                {line}
              </StyledLine>
            ))
          : children}
      </StyledText>
    );
  }
}
