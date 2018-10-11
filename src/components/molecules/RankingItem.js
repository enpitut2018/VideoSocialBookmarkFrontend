import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";

import colors from "../theme/colors.json";
import palette from "../theme/palette.json";
import sizes from "../theme/sizes.json";

const StyledLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  ${AnkerStyle};
`;

const StyledBookmarks = styled.span`
  font-size: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Bookmarks
    .Default.Font};
  color: ${palette[
    colors.molecules.RankingItem.StyledNumOfBookmarked.Bookmarks.Font
  ]};
`;

const StyledTitle = styled.span`
  font-size: ${sizes.molecules.RankingItem.Title.Default.Font};
  padding: ${sizes.molecules.RankingItem.Title.Default.Padding};
  margin: ${sizes.molecules.RankingItem.Title.Default.Margin};
`;

const StyledNumOfBookmarked = styled.span`
  font-size: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Default.Font};
  padding: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Default.Padding};
  margin: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Default.Margin};
`;

export default class RankingItem extends Component {
  render() {
    return (
      <StyledLink to={"/threads/" + this.props.thread.id}>
        <Wrapper>
          {String(this.props.ranking) + ". "}
          <StyledTitle>{this.props.thread.title}</StyledTitle>
        </Wrapper>
        <StyledNumOfBookmarked>
          {this.props.thread.num_of_bookmarked}
          <StyledBookmarks>Bookmarks</StyledBookmarks>
        </StyledNumOfBookmarked>
      </StyledLink>
    );
  }
}
