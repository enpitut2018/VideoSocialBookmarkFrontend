import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import UserIcon from "../atoms/UserIcon";
import Text from "../atoms/Text";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "../molecules/DropdownMenuItem";

import { getUserIcon } from "../../actions/UserActions";

import personIcon from "../../assets/images/material-icon/baseline-person-24px.svg";
import exitIcon from "../../assets/images/material-icon/baseline-exit_to_app-24px.svg";

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  height: 58px;
`;

const StyledCard = styled(Card)`
  display: flex;
  padding-right: 18px;
`;

const StyledTextLink = styled(StyledLink)`
  ${AnkerStyle};

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const RightContentsWrapper = styled(Wrapper)`
  margin-right: 15px;
`;

const StyledUserIcon = styled(UserIcon)`
  &:hover {
    cursor: pointer;
  }
`;

const StyledIcon = styled.img`
  margin: 2px 25px;
`;

class Header extends React.Component {
  componentWillMount() {
    this.props.dispatch(getUserIcon());
  }

  render() {
    return (
      <StyledCard type="between" elevation={0}>
        <StyledLink to="/">
          <Logo />
        </StyledLink>

        {this.props.isSignedIn ? (
          <Wrapper type="right">
            <DropdownMenu
              renderHeader={() => <StyledUserIcon url={this.props.url} />}
              top="73px"
            >
              <DropdownMenuItem>
                <StyledTextLink to="/mypage">
                  <StyledIcon src={personIcon} alt="MyPage" />
                  <Text margin="0">MyPage</Text>
                </StyledTextLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <StyledTextLink to="/logout">
                  <StyledIcon src={exitIcon} alt="Logout" />
                  <Text margin="0">Logout</Text>
                </StyledTextLink>
              </DropdownMenuItem>
            </DropdownMenu>
          </Wrapper>
        ) : (
          <RightContentsWrapper type="right">
            <StyledTextLink to="/login">
              <Text margin="auto 20px">Login</Text>
            </StyledTextLink>
            <StyledTextLink to="/registration">
              <Text margin="auto 20px">登録</Text>
            </StyledTextLink>
          </RightContentsWrapper>
        )}
      </StyledCard>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.userIcon.hasLoaded,
  url: store.userIcon.url,
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Header);
