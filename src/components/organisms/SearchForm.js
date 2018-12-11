import React, { Component } from "react";
import styled from "styled-components";
import Form from "../molecules/Form";
import Button from "../atoms/Button";
import Wrapper from "../atoms/Wrapper";
import TextInput from "../atoms/TextInput";
import palette from "../../theme/palette";
import SearchIcon from "../../assets/images/material-icon/baseline-search-24px.svg";
import elevate from "../../theme/shadows";

const SearchButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: none;
  height: 40px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${elevate(2)};

  &:hover {
    ${elevate(6)};
  }
  &:active {
    ${elevate(0)};
  }
`;

export default class SearchForm extends Component {
  state = { onFocus: false };

  render() {
    return (
      <Form
        onSubmit={this.props.submit}
        css={`
          height: 58px;
          background: ${palette["White00"]};

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
                padding: 0.5rem;
                border-radius: 3px;
                filter: none;
                background: ${palette["White00"]};
                width: 310px;
              `}
              required
            />
            <SearchButton
              type="submit"
              mode="Light"
              css={`
                background: ${palette["White00"]};
              `}
            >
              <IconWrapper>
                <SearchIcon fill={palette["Black06"]} />
              </IconWrapper>
            </SearchButton>
          </Wrapper>
        )}
      />
    );
  }
}
