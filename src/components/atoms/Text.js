import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import styled, { css } from "styled-components";

export const textStyle = props => {
  const fontSizes = {
    XS: 10,
    S: 11,
    M: 12,
    L: 16,
    XL: 20
  };
  const fontOpacities = {
    XS: 0.75,
    S: 0.85,
    M: 1.0,
    L: 1.0,
    XL: 1.0
  };
  const fontMargins = {
    XS: "2px 4px",
    S: "3px 7px",
    M: "5px 13px",
    L: "9px 25px",
    XL: "17px 49px"
  };
  const fontWeights = {
    XS: "300",
    S: "300",
    M: "300",
    L: "300",
    XL: "300"
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
  return css`
    font-size: ${props.fontSize ? props.fontSize : fontSize(props.level)}pt;
    color: ${props.color ? props.color : palette[colors.atoms.Text.Font]};
    margin: ${props.margin ? props.margin : fontMargin(props.level)};
    opacity: ${props.opacity ? props.opacity : fontOpacity(props.level)};
    font-weight: ${props.fontWeight
      ? props.fontWeight
      : fontWeight(props.level)};
  `;
};

export const Text = styled.span`
  ${props => textStyle(props)};
`;
