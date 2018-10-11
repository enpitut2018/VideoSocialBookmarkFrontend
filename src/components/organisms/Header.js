import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { Link } from "react-router-dom";
import styled from "styled-components";
import sizes from "../theme/sizes";

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  height: ${sizes.organisms.Header.Default.Height};
`;
class Header extends React.Component {
  render() {
    return (
      <Card type="between">
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </Card>
    );
  }
}

export default Header;
