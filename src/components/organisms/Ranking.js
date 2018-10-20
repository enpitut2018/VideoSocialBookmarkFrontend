import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../atoms/Text";
import styled from "styled-components";

import Wrapper from "../atoms/Wrapper";
import RankingItem from "../molecules/RankingItem";
import { getRanking } from "../../actions/RankingActions";

const StyledRanking = styled.div`
  padding: 0 0 20px 0;
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
      <StyledRanking>
        <Wrapper dir="column">
          <Text level="XL">Ranking</Text>
          <Wrapper dir="column">
            {this.props.error ? (
              <Text>ランキング取得に失敗しました</Text>
            ) : this.props.hasLoaded ? (
              this.props.ranking &&
              this.props.ranking.map((item, i) => (
                <RankingItem entry={item} ranking={i + 1} key={item.id} />
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </Wrapper>
        </Wrapper>
      </StyledRanking>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.ranking.hasLoaded,
  ranking: store.ranking.ranking,
  error: store.ranking.error
}))(Ranking);
