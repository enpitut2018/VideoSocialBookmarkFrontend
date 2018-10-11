import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";

const StyledA = styled.a`
  display: flex;
  flex-direction: column;

  ${AnkerStyle};
`;

export default class ThreadTop extends Component {
  render() {
    return (
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
    );
  }
}
