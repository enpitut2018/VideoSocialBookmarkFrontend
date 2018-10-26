import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../atoms/Text";
import styled from "styled-components";

import Wrapper from "../atoms/Wrapper";
import TrendItem from "../molecules/TrendItem";
import { getTrend } from "../../actions/TrendActions";

const StyledTrend = styled.div`
  padding: 0 0 20px 0;
`;

class Trend extends Component {
  static fetchData({ dispatch }) {
    return dispatch(getTrend());
  }

  componentWillMount() {
    if (!this.props.hasLoaded) {
      Trend.fetchData({ dispatch: this.props.dispatch });
    }
  }

  render() {
    return (
      <StyledTrend>
        <Wrapper dir="column">
          <Text level="XL">Trend</Text>
          <Wrapper dir="column">
            {this.props.error ? (
              <Text>Trend取得に失敗しました</Text>
            ) : this.props.hasLoaded ? (
              this.props.trend &&
              this.props.trend.map((item, i) => (
                <TrendItem entry={item} trend={i + 1} key={item.id} />
              ))
            ) : (
              <Text>Loading</Text>
            )}
          </Wrapper>
        </Wrapper>
      </StyledTrend>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.trend.hasLoaded,
  trend: store.trend.trend,
  error: store.trend.error
}))(Trend);
