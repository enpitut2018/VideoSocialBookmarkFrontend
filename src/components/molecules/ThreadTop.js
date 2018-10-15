import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import ThumbnailStyle from "../atoms/ThumbnailStyle";
import Title from "../atoms/Title";

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
            <Title level={2}>{this.props.thread.title}</Title>
            <StyledThumbnail
              src={this.props.thread.img}
              alt={this.props.thread.title}
            />
          </Wrapper>
        </StyledA>

        <Title level={1}>
          {this.props.thread.num_of_bookmarked + " "}
          Bookmarks
        </Title>
      </Wrapper>
    );
  }
}
