import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../atoms/Text";
import styled from "styled-components";

import Wrapper from "../atoms/Wrapper";
import TrendItem from "../molecules/TrendItem";
import { getTrend } from "../../actions/TrendActions";
import { preloadTrend } from "../../actions/EntryActions";

const StyledTrend = styled.div`
  padding: 0 0 20px 0;
`;

class Trend extends Component {
  componentWillMount() {
    if (!this.props.hasLoaded) {
      this.props.getTrend();
      this.props.preloadTrend();
    }
  }

  render() {
    return (
      <StyledTrend>
        <Wrapper dir="column">
          <Text level="XL">Trend</Text>
          <Wrapper dir="column">
            {this.props.error ? (
              <Text>トレンドの取得に失敗しました</Text>
            ) : this.props.hasLoaded ? (
              this.props.trend &&
              this.props.trend.map(item => (
                <TrendItem entry={item} key={item.id} />
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

export default connect(
  store => ({
    hasLoaded: store.trend.hasLoaded,
    trend: store.trend.trend,
    error: store.trend.error
  }),
  { getTrend, preloadTrend }
)(Trend);
