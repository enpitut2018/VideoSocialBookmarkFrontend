import { css } from "styled-components";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";

export default css`
  text-decoration: none;
  color: ${palette[colors.atoms.AnkerStyle.Font]};
  border-radius: 0.1rem;

  &:hover {
    color: ${palette[colors.atoms.AnkerStyle.Hover.Font]};
  }
  &:focus {
    color: ${palette[colors.atoms.AnkerStyle.Hover.Font]};
  }
`;
