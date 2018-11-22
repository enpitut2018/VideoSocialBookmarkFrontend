import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from "../atoms/Text";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import DropdownUploadForm from "./DropwodnUploadForm";
import DropdownMyMenu from "./DropdownMyMenu";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import { style } from "../mediaQuery";

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  height: 58px;
`;

const StyledCard = styled(Card)`
  display: flex;
  padding-right: 6px;
  background-color: ${palette[colors.organisms.Header.Background]};
  z-index: 100;
  position: relative;
  margin-bottom: 1rem;
`;

export const StyledTextLink = styled(StyledLink)`
  ${AnkerStyle};

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightContentsWrapper = styled(Wrapper)`
  ${style({
    XL: `margin-right: 18px`,
    L: `margin-right: 17px`,
    M: `margin-right: 16px`,
    S: `margin-right: 10px`
  })};
`;

class Header extends React.Component {
  render() {
    return (
      <StyledCard type="between" elevation={0}>
        <StyledLink to="/">
          <Logo />
        </StyledLink>

        {this.props.isSignedIn ? (
          <>
            <Wrapper type="right">
              <DropdownUploadForm />
              <DropdownMyMenu url={this.props.url} />
            </Wrapper>
          </>
        ) : (
          <RightContentsWrapper type="right">
            <StyledTextLink to="/login">
              <Text margin="auto 26px auto 0">ログイン</Text>
            </StyledTextLink>
            <StyledTextLink to="/registration">
              <Text margin="auto 3px">登録</Text>
            </StyledTextLink>
          </RightContentsWrapper>
        )}
      </StyledCard>
    );
  }
}

export default connect(store => ({
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Header);
