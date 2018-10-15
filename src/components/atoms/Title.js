import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";
import styled from "styled-components";

export default styled.span`
  font-size: ${sizes.atoms.Title.Default.Font};
  color: ${palette[colors.atoms.Title.Font]};
  padding: ${sizes.atoms.Title.Default.Padding};
  margin: ${sizes.atoms.Title.Default.Margin};
`;
