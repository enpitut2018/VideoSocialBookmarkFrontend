import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import styled, { css } from "styled-components";

export const textStyle = level => {
  const fontSizes = {
    XS: 8,
    S: 10,
    M: 12,
    L: 14,
    XL: 20
  };
  const fontOpacities = {
    XS: 0.75,
    S: 0.85,
    M: 1.0,
    L: 1.0,
    XL: 1.0
  };
  const fontSize = level =>
    level ? (level in fontSizes ? fontSizes[level] : fontSizes.M) : fontSizes.M;
  const fontOpacity = level =>
    level
      ? level in fontOpacities
        ? fontOpacities[level]
        : fontOpacities.M
      : fontOpacities.M;
  return css`
    font-size: ${fontSize(level)}pt;
    color: ${palette[colors.atoms.Text.Font]};
    padding: 10px 20px;
    margin: 10px 20px;
    opacity: ${fontOpacity(level)};
  `;
};

export const Text = styled.span`
  ${props => textStyle(props.level)};
`;
