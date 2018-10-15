import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import { Text } from "../atoms/Text";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";

const StyledLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  width: ${sizes.molecules.RankingItem.Default.Width};

  ${AnkerStyle};
`;

const StyledBookmarks = styled.span`
  font-size: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Bookmarks
    .Default.Font};
  color: ${palette[
    colors.molecules.RankingItem.StyledNumOfBookmarked.Bookmarks.Font
  ]};
`;

const StyledNumOfBookmarked = styled.span`
  font-size: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Default.Font};
  padding: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Default.Padding};
  margin: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Default.Margin};
`;

const StyledThumbnail = styled.div`
  margin: ${sizes.molecules.RankingItem.StyledThumbnail.Default.Margin};
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
