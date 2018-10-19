import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import UserIcon from "../atoms/UserIcon";
import Text from "../atoms/Text";

import { getUserIcon } from "../../actions/UserActions";

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  height: 58px;
`;

const StyledCard = styled(Card)`
  display: flex;
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

        <StyledLink to="/mypage">
          <UserIcon url={this.props.url} />
        </StyledLink>

        {this.props.isSignedIn ? (
          <StyledLink to="/logout">
            <Text>Logout</Text>
          </StyledLink>
        ) : (
          <>
            <StyledLink to="/login">
              <Text>Login</Text>
            </StyledLink>
            <StyledLink to="/registration">
              <Text>登録</Text>
            </StyledLink>
          </>
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
