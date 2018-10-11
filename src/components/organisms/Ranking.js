import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import RankingItem from "../molecules/RankingItem";
import { connect } from "react-redux";

import { getRanking } from "../../actions/RankingActions";

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
        <h2>Ranking</h2>
        <Wrapper dir="column">
          {this.props.hasLoaded &&
            this.props.ranking.map((item, i) => (
              <RankingItem thread={item} ranking={i + 1} />
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
