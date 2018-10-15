import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";

import MyPageItem from "../molecules/MyPageItem";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";
import styled from "styled-components";

const StyledTitle = styled.span`
  font-size: ${sizes.organisms.URLSubmitForm.Title.Default.Font};
  color: ${palette[colors.organisms.URLSubmitForm.Title.Font]};
  padding: ${sizes.organisms.URLSubmitForm.Title.Default.Padding};
  margin: ${sizes.organisms.URLSubmitForm.Title.Default.Margin};
`;

export default class MyPageTemplate extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <StyledTitle>My Bookmarks</StyledTitle>
          {this.props.hasLoaded &&
            this.props.user.threads.map(thread => (
              <MyPageItem key={thread.id} thread={thread} />
            ))}
        </Wrapper>
      </>
    );
  }
}
