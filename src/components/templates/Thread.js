import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";

import ThreadTop from "../molecules/ThreadTop";
import ThreadItem from "../molecules/ThreadItem";

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
                <ThreadItem bookmark={bookmark} />
              ))}
            </Wrapper>
          </>
        )}
      </>
    );
  }
}
