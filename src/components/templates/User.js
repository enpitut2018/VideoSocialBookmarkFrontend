import React, { Component } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import UserBookmarks from "../organisms/UserBookmarks";
import Text from "../atoms/Text";
import Wrapper from "../atoms/Wrapper";

export default class UserTemplate extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <Text level="L">
            User {this.props.user_id}
            のブックマーク
          </Text>
          <UserBookmarks userId={this.props.user_id} />
        </Wrapper>
        <Footer />
      </>
    );
  }
}
