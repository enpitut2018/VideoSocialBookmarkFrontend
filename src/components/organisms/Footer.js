import * as React from "react";
import Card from "../atoms/Card";
import Icon from "../atoms/Icon";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import { textStyle } from "../atoms/Text";

import colors from "../../theme/colors";
import palette from "../../theme/palette";

const StyledText = styled.span`
  padding: 0;
  margin: 0 10px;
  ${textStyle("S")};
`;

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0 10px;
  ${AnkerStyle};
  ${textStyle("S")};
`;

const StyledCard = styled(Card)`
  display: flex;
  box-shadow: 0 -1px 0 0 ${palette[colors.Shadow]};
  margin: 0;
  padding: 0;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <StyledCard type="center" elevation={0}>
        <StyledText>© 2018 Vimacs</StyledText>
        <StyledLink to="/">
          <Icon />
        </StyledLink>
        <StyledLink to="/about">VSBとは</StyledLink>
        <StyledLink to="/terms">利用規約</StyledLink>
        <StyledLink to="/help">Help</StyledLink>
      </StyledCard>
    );
  }
}
