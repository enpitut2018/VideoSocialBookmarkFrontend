import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";
import styled, { css } from "styled-components";

export const textStyle = level => {
  const fontSizes = {
    XS: 0.7,
    S: 0.85,
    M: 1.0,
    L: 1.2,
    XL: 1.7
  };
  const fontOpacities = {
    XS: 0.75,
    S: 0.85,
    M: 1.0,
    L: 1.0,
    XL: 1.0
  };
  const fontSize = level =>
    level
      ? level in fontSizes
        ? sizes.atoms.Text.Default.Font * fontSizes[level]
        : sizes.atoms.Text.Default.Font * fontSizes.M
      : sizes.atoms.Text.Default.Font * fontSizes.M;
  const fontOpacity = level =>
    level
      ? level in fontOpacities
        ? fontOpacities[level]
        : fontOpacities.M
      : fontOpacities.M;
  return css`
    font-size: ${fontSize(level)}pt;
    color: ${palette[colors.atoms.Text.Font]};
    padding: ${sizes.atoms.Text.Default.Padding};
    margin: ${sizes.atoms.Text.Default.Margin};
    opacity: ${fontOpacity(level)};
  `;
};

export const Text = styled.span`
  ${props => textStyle(props.level)};
`;
