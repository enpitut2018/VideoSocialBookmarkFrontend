import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Header from "../organisms/Header";
import styled from "styled-components";

const StyledA = styled.a`
  display: flex;
  flex-direction: column;
`;

export default class Thread extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.hasLoaded && (
          <Wrapper dir="column">
            <StyledA
              target="_blank"
              rel="noopener noreferrer"
              href={this.props.thread.url}
            >
              <h2>{this.props.thread.title}</h2>
              <img src={this.props.thread.img} alt={this.props.thread.title} />
            </StyledA>
            <h2>
              {this.props.thread.num_of_bookmarked + " "}
              Bookmarks
            </h2>
          </Wrapper>
        )}
      </>
    );
  }
}
