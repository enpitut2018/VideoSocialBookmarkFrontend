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
            <EntryTop id={this.props.entry.id} />
            <Wrapper dir="column">
              {this.props.isSignedIn && (
                <CommentSubmitForm entryId={this.props.entry.id} />
              )}
              {this.props.entry.comments &&
                this.props.entry.comments.map(
                  comment =>
                    comment.content && (
                      <EntryItem comment={comment} key={comment.id} />
                    )
                )}
            </Wrapper>
          </>
        )}
        <Footer />
      </>
    );
  }
}
