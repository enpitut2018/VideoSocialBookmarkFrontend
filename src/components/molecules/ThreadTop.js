import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import ThumbnailStyle from "../atoms/ThumbnailStyle";

import sizes from "../../theme/sizes.json";

const StyledA = styled.a`
  display: flex;
  flex-direction: column;

  ${AnkerStyle};
`;

const StyledThumbnail = styled.img`
  ${ThumbnailStyle};
  margin: ${sizes.molecules.RankingItem.StyledThumbnail.Default.Margin};
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
          <Wrapper dir="column">
            <h2>{this.props.thread.title}</h2>
            <StyledThumbnail
              src={this.props.thread.img}
              alt={this.props.thread.title}
            />
          </Wrapper>
        </StyledA>

        <h2>
          {this.props.thread.num_of_bookmarked + " "}
          Bookmarks
        </h2>
      </Wrapper>
    );
  }
}
