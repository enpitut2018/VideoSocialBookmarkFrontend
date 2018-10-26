import React, { Component } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import UserBookmark from "../organisms/UserBookmark";

export default class Entry extends Component {
  render() {
    return (
      <>
        <Header />
        <UserBookmark user_id={this.props.user_id} />
        <Footer />
      </>
    );
  }
}
