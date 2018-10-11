import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";

import sizes from "../theme/sizes.json";

const StyledLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  ${AnkerStyle};
`;

const StyledTitle = styled.span`
  size: ${sizes.molecules.RankingItem.Title.Default.Size};
  padding: ${sizes.molecules.RankingItem.Title.Default.Padding};
  margin: ${sizes.molecules.RankingItem.Title.Default.Margin};
`;

const StyledNumOfBookmarked = styled.span`
  size: ${sizes.molecules.RankingItem.StyledNumOfBookmarked.Default.Size};
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
          {this.props.thread.num_of_bookmarked}
        </StyledNumOfBookmarked>
      </StyledLink>
    );
  }
}
