import React, { Component } from "react";
import { connect } from "react-redux";
import Text from "../atoms/Text";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import TrendItem from "../molecules/TrendItem";
import { getTrend } from "../../actions/TrendActions";
import { preloadTrend } from "../../actions/EntryActions";
import LoadingIcon from "../atoms/LoadingIcon";
import Pagination from "./Pagination";

const StyledTrend = styled.div`
  padding: 0 0 20px 0;
`;

class Trend extends Component {
  componentWillMount() {
    this.props.getTrend();
    this.props.preloadTrend();
  }

  handlePageChange = (page) => {
    this.props.getTrend(page);
    this.props.preloadTrend(page);
  };

  render() {
    return (
      <StyledTrend>
        <Wrapper dir="column">
          <Text size="L" margin="10px 0 13px 0">
            急上昇
          </Text>
          <Wrapper dir="column">
            {this.props.error ? (
              <Text>データの取得に失敗しました</Text>
            ) : this.props.hasLoaded ? (
              this.props.trend.data.map(item => (
                <TrendItem entry={item} key={item.id} />
              ))
            ) : (
              <LoadingIcon />
            )}
            {this.props.trend &&
              <Pagination
                pageCount={this.props.trend.page_count}
                onPageChange={this.handlePageChange}
              />
            }
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
