import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";
import styled from "styled-components";

const fontSizes = {
  0: 1.0,
  1: 1.2,
  2: 1.4,
  3: 1.6,
  4: 1.8
};

export default styled.span`
  font-size: ${props =>
    props.level
      ? Number(sizes.atoms.Title.Default.Font) * fontSizes[props.level]
      : Number(sizes.atoms.Title.Default.Font)}pt;
  color: ${palette[colors.atoms.Title.Font]};
  padding: ${sizes.atoms.Title.Default.Padding};
  margin: ${sizes.atoms.Title.Default.Margin};
`;
