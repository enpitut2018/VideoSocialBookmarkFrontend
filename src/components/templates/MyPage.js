import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";

import MyPageItem from "../molecules/MyPageItem";
import Title from "../atoms/Title";

export default class MyPageTemplate extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <Title>My Bookmarks</Title>
          <Wrapper dir="column">
            {this.props.hasLoaded &&
              this.props.user.threads.map(thread => (
                <MyPageItem key={thread.id} thread={thread} />
              ))}
          </Wrapper>
        </Wrapper>
      </>
    );
  }
}
