import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import EntryTop from "../molecules/EntryTop";
import EntryItem from "../molecules/EntryItem";

export default class Entry extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.hasLoaded && (
          <>
            <Wrapper dir="column">
              {this.props.bookmarks &&
                this.props.bookmarks.map(bookmark => (
                  <EntryItem bookmark={bookmark} key={bookmark.id} />
                ))}
            </Wrapper>
          </>
        )}
        <Footer />
      </>
    );
  }
}
