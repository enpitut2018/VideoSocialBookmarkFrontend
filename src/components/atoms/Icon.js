import * as React from "react";
import IconImage from "../../assets/images/icon.svg";
import styled from "styled-components";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import sizes from "../../theme/sizes";

const StyledIcon = styled.img`
  width: ${sizes.atoms.Icon.Default.Width};
  height: ${sizes.atoms.Icon.Default.Height};
  margin: ${sizes.atoms.Icon.Default.Margin};
  padding: ${sizes.atoms.Icon.Default.Padding};
  opacity: ${palette[colors.atoms.Icon.Opacity]};
`;

class Icon extends React.Component {
  render() {
    return <StyledIcon src={IconImage} alt="Logo" />;
  }
}

export default Icon;
