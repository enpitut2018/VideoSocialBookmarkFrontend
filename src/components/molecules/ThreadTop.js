import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import { Text } from "../atoms/Text";

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
            <Text level="XL">{this.props.thread.title}</Text>
            <StyledThumbnail>
              <Thumbnail
                src={this.props.thread.img}
                alt={this.props.thread.title}
              />
            </StyledThumbnail>
          </Wrapper>
        </StyledA>

        <Text level="L">
          {this.props.thread.num_of_bookmarked + " "}
          Bookmarks
        </Text>
      </Wrapper>
    );
  }
}
