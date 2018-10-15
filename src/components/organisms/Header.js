import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { Link } from "react-router-dom";
import styled from "styled-components";
import sizes from "../../theme/sizes";
import UserIcon from "../atoms/UserIcon";

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  height: ${sizes.organisms.Header.Default.Height};
`;

const StyledCard = styled(Card)`
  display: flex;
`;
class Header extends React.Component {
  render() {
    return (
      <StyledCard type="between" elevation={0}>
        <StyledLink to="/">
          <Logo />
        </StyledLink>

        <StyledLink to="/mypage">
          <UserIcon />
        </StyledLink>
      </StyledCard>
    );
  }
}

export default Header;
