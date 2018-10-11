import * as React from "react";
import LogoImage from "../../assets/images/logo.svg";
import styled from "styled-components";

import sizes from "../../theme/sizes";

const StyledLogo = styled.img`
  width: ${sizes.atoms.Logo.Default.Width};
  height: ${sizes.atoms.Logo.Default.Height};
  margin: ${sizes.atoms.Logo.Default.Margin};
  paddign: ${sizes.atoms.Logo.Default.Padding};
`;

class Logo extends React.Component {
  render() {
    return <StyledLogo src={LogoImage} alt="Logo" />;
  }
}

export default Logo;
