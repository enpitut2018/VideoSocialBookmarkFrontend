import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Text from "../atoms/Text";
import UserBookmarks from "../organisms/UserBookmarks";
import Playlists from "../organisms/Playlists";

export default class MyPageTemplate extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          <Text level="XL">マイプレイリスト</Text>
          {this.props.hasLoaded && (
            <Playlists userId={this.props.user.id} />
          )}
        </Wrapper>
        <Wrapper dir="column">
          <Text level="XL">マイブックマーク</Text>
          {this.props.hasLoaded && (
            <UserBookmarks userId={this.props.user.id} />
          )}
        </Wrapper>
        <Footer />
      </>
    );
  }
}
