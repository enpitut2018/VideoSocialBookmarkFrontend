import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

// import MyPageItem from "../molecules/MyPageItem";
import Text from "../atoms/Text";
import UserBookmarks from "../organisms/UserBookmarks";

export default class MyPageTemplate extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <Text level="L">My Bookmarks</Text>
          <UserBookmarks user_id={this.props.user.id} />
        </Wrapper>
        <Footer />
      </>
    );
  }
}
