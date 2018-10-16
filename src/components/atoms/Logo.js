import * as React from "react";
import LogoImage from "../../assets/images/logo.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 40px;
  margin: 9px 10px;
  padding: 0;
`;

class Logo extends React.Component {
  render() {
    return <StyledLogo src={LogoImage} alt="Logo" />;
  }
}

export default Logo;
