import { css } from "styled-components";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";

export default css`
  text-decoration: none;
  color: ${palette[colors.molecules.RankingItem.Font]};

  &:hover {
    color: ${palette[colors.molecules.RankingItem.Hover.Font]};
  }
`;
