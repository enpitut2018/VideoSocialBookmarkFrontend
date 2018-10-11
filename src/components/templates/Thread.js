import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";

export default class Thread extends Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper dir="column">
          {this.props.hasLoaded && (
            <>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.thread.url}
              >
                {this.props.thread.url}
              </a>
              <p>{this.props.thread.num_of_bookmarked}</p>
            </>
          )}
        </Wrapper>
      </>
    );
  }
}
