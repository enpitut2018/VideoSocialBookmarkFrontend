import * as React from "react";
import IconImage from "../../assets/images/icon.svg";
import styled from "styled-components";

import colors from "../../theme/colors";
import palette from "../../theme/palette";

const StyledIcon = styled.img`
  width: 42px;
  height: 42px;
  margin: 0 10px;
  padding: 0;
  opacity: ${palette[colors.atoms.Icon.Opacity]};
`;

class Icon extends React.Component {
  render() {
    return <StyledIcon src={IconImage} alt="Logo" />;
  }
}

export default Icon;
