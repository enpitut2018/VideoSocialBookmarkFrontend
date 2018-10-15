import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import { Text } from "../atoms/Text";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";

const StyledLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: 100%;

  ${AnkerStyle};
`;

const StyledBookmarks = styled.span`
  font-size: 0.9rem;
  color: ${palette[
    colors.molecules.RankingItem.StyledNumOfBookmarked.Bookmarks.Font
  ]};
`;

const StyledNumOfBookmarked = styled.span`
  font-size: 1.2rem;
  padding: 10px 20px;
  margin: 10px 20px;
`;

const StyledThumbnail = styled.div`
  margin: 10px 0;
`;

export default class RankingItem extends Component {
  render() {
    return (
      <StyledLink to={"/threads/" + this.props.thread.id}>
        <Wrapper>
          {this.props.ranking && (
            <Text>{String(this.props.ranking) + ". "}</Text>
          )}
          <StyledThumbnail>
            <Thumbnail
              src={this.props.thread.img}
              alt={this.props.thread.title}
            />
          </StyledThumbnail>
          <Text level="L">{this.props.thread.title}</Text>
        </Wrapper>
        <StyledNumOfBookmarked>
          {this.props.thread.num_of_bookmarked}
          <StyledBookmarks>Bookmarks</StyledBookmarks>
        </StyledNumOfBookmarked>
      </StyledLink>
    );
  }
}
