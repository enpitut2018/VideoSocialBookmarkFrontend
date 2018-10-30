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
import elevate from "../../theme/shadows";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import Dropdown from "./Dropdown";
import DropdownItem from "../molecules/DropdownItem";
import URLSubmitForm from "../organisms/URLSubmitForm";

import { getUserIcon } from "../../actions/UserActions";

import PersonIcon from "../../assets/images/material-icon/baseline-person-24px.svg";
import ExitIcon from "../../assets/images/material-icon/baseline-exit_to_app-24px.svg";
import UploadIcon from "../../assets/images/material-icon/baseline-cloud_upload-24px.svg";

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

const StyledTextLink = styled(StyledLink)`
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
  })}};
`;

const StyledUserIcon = styled(UserIcon)`
  cursor: pointer;
`;

const StyledUploadIconWrapper = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;

  ${elevate(2)};

  &:hover {
    ${elevate(6)};
  }
  &:active {
    ${elevate(0)};
  }
`;

const IconWrapper = styled.div`
  margin: 2px 22px;
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
          <>
            <Wrapper type="right">
              <Dropdown
                renderHeader={onClickHandler => (
                  <StyledUploadIconWrapper>
                    {UploadIcon({
                      fill: palette[colors.organisms.Header.Icon.Fill],
                      onClick: onClickHandler,
                      width: "30px",
                      height: "30px"
                    })}
                  </StyledUploadIconWrapper>
                )}
                top="63px"
                right="30px"
                css={`
                  ${style({
                    XL: `margin-right: 35px;`,
                    L: `margin-right: 25px;`,
                    M: `margin-right: 20px;`,
                    S: `margin-right: 15px;`
                  })};
                `}
              >
                <DropdownItem
                  width="350px"
                  css={`
                    background-color: ${palette[
                      colors.organisms.Header.URLSubmitForm.Background
                    ]};
                    ${style({
                      XL: `width: 400px`,
                      L: `width: 380pxpx`,
                      M: `width: 350px`,
                      S: `width: 80vw`
                    })};
                  `}
                >
                  <URLSubmitForm />
                </DropdownItem>
              </Dropdown>

              <DropdownMenu
                renderHeader={() => <StyledUserIcon url={this.props.url} />}
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
                    <Text margin="0">MyPage</Text>
                  </StyledTextLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <StyledTextLink to="/logout">
                    <IconWrapper>
                      {ExitIcon({
                        fill: palette[colors.organisms.Header.Icon.Fill]
                      })}
                    </IconWrapper>
                    <Text margin="0">Logout</Text>
                  </StyledTextLink>
                </DropdownMenuItem>
              </DropdownMenu>
            </Wrapper>
          </>
        ) : (
          <RightContentsWrapper type="right">
            <StyledTextLink to="/login">
              <Text margin="auto 26px auto 0">Login</Text>
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
  hasLoaded: store.userIcon.hasLoaded,
  url: store.userIcon.url,
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Header);
