import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";

const StyledLabel = styled.label`
  opacity: ${props => (props.value ? 1.0 : 0.4)};
  transition: opacity 0.2s ease-in-out;
`;

export default class LabeledInput extends Component {
  render() {
    return (
      <Wrapper
        dir="column"
        css={`
          align-items: flex-start;
          ${this.props.css && this.props.css};
        `}
      >
        <StyledLabel htmlFor={this.props.name} value={this.props.value}>
          {this.props.label()}
        </StyledLabel>
        {this.props.input()}
      </Wrapper>
    );
  }
}
