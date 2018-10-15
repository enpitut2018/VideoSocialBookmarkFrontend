import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { connect } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import sizes from "../../theme/sizes";
import UserIcon from "../atoms/UserIcon";

import { getUserIcon } from "../../actions/UserActions";

const StyledLink = styled(Link)`
  padding: 0;
  margin: 0;
  height: ${sizes.organisms.Header.Default.Height};
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
      </StyledCard>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.userIcon.hasLoaded,
  url: store.userIcon.url
}))(Header);
