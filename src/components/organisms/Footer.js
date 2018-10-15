import * as React from "react";
import Card from "../atoms/Card";
import Icon from "../atoms/Icon";

import { Link } from "react-router-dom";
import styled from "styled-components";
import sizes from "../../theme/sizes";
import colors from "../../theme/colors";
import palette from "../../theme/palette";

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  height: ${sizes.organisms.Header.Default.Height};
`;

const StyledCard = styled(Card)`
  display: flex;
  box-shadow: 0 -1px 0 0 ${palette[colors.Shadow]};
`;

export default class Header extends React.Component {
  render() {
    return (
      <StyledCard type="center" elevation={0}>
        <StyledLink to="/">
          <Icon />
        </StyledLink>
      </StyledCard>
    );
  }
}
