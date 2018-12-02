import React, { Component } from "react";
import Text from "../atoms/Text";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import TrendItem from "../molecules/TrendItem";
import LoadingIcon from "../atoms/LoadingIcon";
import Pagination from "../organisms/Pagination";
import BasicPageWrapper from "../../BasicPageWrapper";

const StyledSearch = styled.div`
  padding: 0 0 20px 0;
`;

export default class SearchTemplate extends Component {
  render() {
    return (
      <BasicPageWrapper>
        <StyledSearch>
          <Wrapper dir="column">
            <Text size="L" margin="10px 0 13px 0">
              {this.props.keyword} の検索結果
            </Text>
            <Wrapper dir="column">
              {this.props.error ? (
                <Text>データの取得に失敗しました</Text>
              ) : this.props.hasLoaded ? (
                this.props.entries.data.map(item => (
                  <TrendItem entry={item} key={item.id} />
                ))
              ) : (
                <LoadingIcon />
              )}
              {this.props.hasLoaded &&
                  <Pagination
                    forcePage={this.props.entries.page}
                    pageCount={this.props.entries.page_count}
                    onPageChange={this.props.handlePageChange}
                  />
              }
            </Wrapper>
          </Wrapper>
        </StyledSearch>
      </BasicPageWrapper>
    );
  }
}
