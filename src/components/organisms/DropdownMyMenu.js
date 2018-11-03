import React, { Component } from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import UserIcon from "../atoms/UserIcon";
import Text from "../atoms/Text";
import PersonIcon from "../../assets/images/material-icon/baseline-person-24px.svg";
import ExitIcon from "../../assets/images/material-icon/baseline-exit_to_app-24px.svg";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import { StyledTextLink } from "./Header";

const UserIconWrapper = styled.div`
  cursor: pointer;
`;

const IconWrapper = styled.div`
  margin: 2px 22px;
`;

export default class DropdownMyMenu extends Component {
  render() {
    return (
      <DropdownMenu
        renderHeader={() => (
          <UserIconWrapper>
            <UserIcon url={this.props.url} />
          </UserIconWrapper>
        )}
        top="63px"
        right="5px"
        css="margin-right: 5px;"
      >
        <DropdownMenuItem>
          <StyledTextLink to="/mypage">
            <IconWrapper>
              {PersonIcon({
                fill: palette[colors.organisms.Header.Icon.Fill]
              })}
            </IconWrapper>
            <Text margin="0">マイページ</Text>
          </StyledTextLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <StyledTextLink to="/logout">
            <IconWrapper>
              {ExitIcon({
                fill: palette[colors.organisms.Header.Icon.Fill]
              })}
            </IconWrapper>
            <Text margin="0">ログアウト</Text>
          </StyledTextLink>
        </DropdownMenuItem>
      </DropdownMenu>
    );
  }
}
