import * as React from "react";
import Card from "../atoms/Card";
import Icon from "../atoms/Icon";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import { textStyle } from "../atoms/Text";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import { style, component } from "../mediaQuery";

const StyledText = styled.span`
  ${textStyle({ size: "S", margin: "10px 15px" })};
`;

const StyledLink = styled(Link)`
  ${AnkerStyle};
  ${textStyle({ size: "S", margin: "10px 15px" })};
  ${props => props.height && `height: ${props.height}`};
`;

const StyledCard = styled(Card)`
  display: flex;
  box-shadow: 0 -1px 0 0 ${palette[colors.organisms.Footer.Border.Shadow]};
  margin: 1.2rem 0 0 0;
  padding: 0;
`;

const StyledWrapper = styled.div`
  ${style({
    S: `
      display: flex;

      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      margin: 0 !important;
    `,
    M: `
      display: flex;

      align-items: center;
      justify-content: flex-end;
      flex-direction: column;
      margin: 1 !important;
    `,
    L: `
      display: flex;

      align-items: center;
      justify-content: flex-end;
      margin: 2 !important;
    `,
    XL: `
      display: flex;

      align-items: center;
      justify-content: flex-end;
      margin: 3 !important;
    `
  })};
`;

export default class Footer extends React.Component {
  render() {
    return component({
      XL: (
        <StyledCard type="center" elevation={0}>
          <StyledText>© 2018 Vimacs</StyledText>
          <StyledLink to="/" height="42px">
            <Icon />
          </StyledLink>
          <StyledWrapper>
            <StyledLink to="/about">VSBとは</StyledLink>
            <StyledLink to="/terms">利用規約</StyledLink>
            <StyledLink to="/privacy">プライバシーポリシー</StyledLink>
            <StyledLink to="/help">Help</StyledLink>
          </StyledWrapper>
        </StyledCard>
      ),
      L: (
        <StyledCard type="center" elevation={0}>
          <StyledText>© 2018 Vimacs</StyledText>
          <StyledLink to="/" height="42px">
            <Icon />
          </StyledLink>
          <StyledWrapper>
            <StyledLink to="/about">VSBとは</StyledLink>
            <StyledLink to="/terms">利用規約</StyledLink>
            <StyledLink to="/privacy">プライバシーポリシー</StyledLink>
            <StyledLink to="/help">Help</StyledLink>
          </StyledWrapper>
        </StyledCard>
      ),
      M: (
        <StyledCard type="center" elevation={0} dir="column">
          <StyledLink to="/" height="42px">
            <Icon />
          </StyledLink>
          <StyledText>© 2018 Vimacs</StyledText>
          <StyledLink to="/about">VSBとは</StyledLink>
          <StyledLink to="/terms">利用規約</StyledLink>
          <StyledLink to="/privacy">プライバシーポリシー</StyledLink>
          <StyledLink to="/help">Help</StyledLink>
        </StyledCard>
      ),
      S: (
        <StyledCard type="center" elevation={0} dir="column">
          <StyledLink to="/" height="42px">
            <Icon />
          </StyledLink>
          <StyledText>© 2018 Vimacs</StyledText>
          <StyledLink to="/about">VSBとは</StyledLink>
          <StyledLink to="/terms">利用規約</StyledLink>
          <StyledLink to="/privacy">プライバシーポリシー</StyledLink>
          <StyledLink to="/help">Help</StyledLink>
        </StyledCard>
      )
    });
  }
}
