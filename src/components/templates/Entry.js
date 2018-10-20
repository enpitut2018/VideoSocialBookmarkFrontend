import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import EntryTop from "../molecules/EntryTop";
import EntryItem from "../molecules/EntryItem";
import CommentSubmitForm from "../organisms/CommentSubmitForm";

export default class Entry extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.hasLoaded && (
          <>
            <EntryTop {...this.props} />
            <Wrapper dir="column">
              {this.props.entry.bookmarks &&
                this.props.entry.bookmarks.map(bookmark => (
                  <EntryItem bookmark={bookmark} key={bookmark.id} />
                ))}
            </Wrapper>
            <CommentSubmitForm entryId={this.props.entry.id} />
          </>
        )}
        <Footer />
      </>
    );
  }
}
