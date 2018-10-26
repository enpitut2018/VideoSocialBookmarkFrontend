import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import MyPageItem from "../molecules/MyPageItem";
import Text from "../atoms/Text";

export default class MyPageTemplate extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <Text level="XL">My Bookmarks</Text>
          <Wrapper dir="column">
            {this.props.hasLoaded &&
              this.props.user &&
              this.props.user.entries &&
              this.props.user.entries.map(entry => (
                <MyPageItem key={entry.id} entry={entry} />
              ))}
          </Wrapper>
        </Wrapper>
        <Footer />
      </>
    );
  }
}
