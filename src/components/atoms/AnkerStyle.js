import { css } from "styled-components";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";

export default css`
  text-decoration: none;
  width: ${sizes.molecules.RankingItem.Default.Width};
  color: ${palette[colors.molecules.RankingItem.Font]};

  &:hover {
    color: ${palette[colors.molecules.RankingItem.Hover.Font]};
  }
`;
