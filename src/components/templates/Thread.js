import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Form from "../molecules/Form";

import ThreadTop from "../molecules/ThreadTop";
import ThreadItem from "../molecules/ThreadItem";
import CommentSubmitForm from "../organisms/CommentSubmitForm";

export default class Thread extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.hasLoaded && (
          <>
            <ThreadTop {...this.props} />
            <Wrapper dir="column">
              {this.props.thread.bookmarks.map(bookmark => (
                <ThreadItem bookmark={bookmark} key={bookmark.id} />
              ))}
            </Wrapper>
            <Form render={props => <CommentSubmitForm />} />
          </>
        )}
        <Footer />
      </>
    );
  }
}
