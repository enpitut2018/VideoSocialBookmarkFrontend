import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Wrapper from "../atoms/Wrapper";
import RankingItem from "../molecules/RankingItem";
import { getRanking } from "../../actions/RankingActions";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";

const StyledTitle = styled.span`
  font-size: ${sizes.organisms.Ranking.Title.Default.Font};
  color: ${palette[colors.organisms.Ranking.Title.Font]};
  padding: ${sizes.organisms.Ranking.Title.Default.Padding};
  margin: ${sizes.organisms.Ranking.Title.Default.Margin};
`;

class Ranking extends Component {
  static fetchData({ dispatch }) {
    return dispatch(getRanking());
  }

  componentWillMount() {
    if (!this.props.hasLoaded) {
      Ranking.fetchData({ dispatch: this.props.dispatch });
    }
  }

  render() {
    return (
      <Wrapper dir="column">
        <StyledTitle>Ranking</StyledTitle>
        <Wrapper dir="column">
          {this.props.hasLoaded &&
            this.props.ranking.map((item, i) => (
              <RankingItem
                thread={item}
                ranking={i + 1}
                key={item.id}
              />
            ))}
        </Wrapper>
      </Wrapper>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.ranking.hasLoaded,
  ranking: store.ranking.ranking
}))(Ranking);
