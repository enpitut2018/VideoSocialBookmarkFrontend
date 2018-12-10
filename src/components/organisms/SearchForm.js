import React, { Component } from "react";
import styled from "styled-components";
import Form from "../molecules/Form";
import Button from "../atoms/Button";
import Wrapper from "../atoms/Wrapper";
import TextInput from "../atoms/TextInput";
import palette from "../../theme/palette";
import SearchIcon from "../../assets/images/material-icon/baseline-search-24px.svg";

const SearchButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: none;
  height: 40px;
  width: 70px;
  margin: 12px 0 8px 0;
`;

export default class SearchForm extends Component {
  state = { onFocus: false };

  render() {
    return (
      <Form
        onSubmit={this.props.submit}
        css={`
          height: 58px;

          &:hover {
            border-bottom: 2px solid ${palette["Blue00"]};
          }
          border-bottom: 2px solid ${palette["Black08"]};
          ${this.state.onFocus &&
            `border-bottom: 2px solid ${palette["Blue00"]};`}
        `}
        render={() => (
          <Wrapper dir="row">
            <TextInput
              placeholder="検索"
              name="query"
              width="calc(100% - 52px)"
              submit={this.props.submit}
              value={this.props.query}
              handleChange={this.props.handleQueryChange}
              onClick={e => e.stopPropagation()}
              onFocus={() => this.setState({ onFocus: true })}
              onBlur={() => this.setState({ onFocus: false })}
              css={`
                padding: 0.8rem 0.5rem 0.5rem;
                border-radius: 3px;
                filter: none;
                height: 100%;
                line-height: 100%;
                width: 310px;
                margin: 0px 10px;
              `}
              required
            />
            <SearchButton type="submit">
              <SearchIcon fill={palette["Black06"]} />
            </SearchButton>
          </Wrapper>
        )}
      />
    );
  }
}
