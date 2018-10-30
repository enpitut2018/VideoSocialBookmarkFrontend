import React, { Component } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import UserBookmarks from "../organisms/UserBookmarks";

export default class Entry extends Component {
  render() {
    return (
      <>
        <Header />
        <UserBookmarks user_id={this.props.user_id} />
        <Footer />
      </>
    );
  }
}
