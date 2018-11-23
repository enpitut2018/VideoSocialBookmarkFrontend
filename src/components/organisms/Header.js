import * as React from "react";
import Card from "../atoms/Card";
import Logo from "../atoms/Logo";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Text from "../atoms/Text";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import DropdownUploadForm from "./DropwodnUploadForm";
import DropdownMyMenu from "./DropdownMyMenu";

import { getUserIcon } from "../../actions/UserActions";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import { style } from "../mediaQuery";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";

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

const SearchButton = styled(Button)`
  display: block;
  width: 80px;
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
  constructor(props){
    super(props);
    this.state = {
      query: ""
    };
  }
  componentWillMount() {
    this.props.dispatch(getUserIcon());
  }

  submit = e => {
    if (e) {
      e.preventDefault();
      e.target.reset();
    }
    this.props.history.push(`/search/${this.state.query}`);
  };

  handleQueryChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <StyledCard type="between" elevation={0}>
        <StyledLink to="/">
          <Logo />
        </StyledLink>

        <Form
          onSubmit={this.submit}
          css=""
          render={() => (
            <Wrapper dir="row">
              <TextInput
                placeholder=""
                name="query"
                width="calc(100% - 52px)"
                submit={this.submit}
                value={this.state.query}
                handleChange={this.handleQueryChange}
                onClick={e => e.stopPropagation()}
                css={`
                    margin: 0;
                    padding: 0.5rem;
                    border-radius: 3px;
                  `}
                required
              />
              <SearchButton mode="Primary" type="submit">
                <Text fontWeight={"bold"} color={palette["White00"]}>
                  検索
                </Text>
              </SearchButton>
            </Wrapper>
          )}
        />

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

export default withRouter(connect(store => ({
  hasLoaded: store.userIcon.hasLoaded,
  url: store.userIcon.url,
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Header));
