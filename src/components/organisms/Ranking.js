import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../atoms/Text";
import styled from "styled-components";

import Wrapper from "../atoms/Wrapper";
import RankingItem from "../molecules/RankingItem";
import { getRanking } from "../../actions/RankingActions";
import { preloadRanking } from "../../actions/EntryActions";

const StyledRanking = styled.div`
  padding: 0 0 20px 0;
`;

class Ranking extends Component {
  componentWillMount() {
    if (!this.props.hasLoaded) {
      this.props.getRanking();
      this.props.preloadRanking();
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
}),
  { getRanking, preloadRanking }
)(Ranking);
