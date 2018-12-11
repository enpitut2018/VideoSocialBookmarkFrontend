import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import UserIcon from "../atoms/UserIcon";
import Text from "../atoms/Text";
import PersonIcon from "../../assets/images/material-icon/baseline-person-24px.svg";
import ExitIcon from "../../assets/images/material-icon/baseline-exit_to_app-24px.svg";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import { Link } from "react-router-dom";
import AnkerStyle from "../atoms/AnkerStyle";
import { connect } from "react-redux";
import { getUserIcon } from "../../actions/UserActions";

const UserIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  margin: 2px 22px;
`;

const StyledLink = styled(Link)`
  ${AnkerStyle};

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0;
`;

class DropdownMyMenu extends React.Component {
  componentWillMount() {
    if (!this.props.userIconHasLoaded) {
      this.props.dispatch(getUserIcon());
    }
  }
  render() {
    return (
      <DropdownMenu
        renderHeader={() => (
          <UserIconWrapper>
            {this.props.userIconHasLoaded && <UserIcon url={this.props.url} />}
          </UserIconWrapper>
        )}
        css="margin-right: 5px;"
      >
        <DropdownMenuItem>
          <StyledLink to="/mypage">
            <IconWrapper>
              <PersonIcon
                fill={palette[colors.organisms.Header.Icon.Fill]}
                height="24"
                width="24"
              />
            </IconWrapper>
            <Text margin="0">マイページ</Text>
          </StyledLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <StyledLink to="/logout">
            <IconWrapper>
              <ExitIcon fill={palette[colors.organisms.Header.Icon.Fill]} />
            </IconWrapper>
            <Text margin="0">ログアウト</Text>
          </StyledLink>
        </DropdownMenuItem>
      </DropdownMenu>
    );
  }
}

export default connect(store => ({
  userIconHasLoaded: store.userIcon.hasLoaded,
  url: store.userIcon.url
}))(DropdownMyMenu);
