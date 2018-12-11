import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";

const StyledLabel = styled.label`
  transition: all 0.2s ease-in-out;
  position: relative;
  top: ${props => (props.isFocused ? "0.2rem" : "2.8rem")};
  font-size: ${props => (props.isFocused ? "12rem" : "0.5rem")} !important;
  z-index: 10000;
`;

export default class LabeledInput extends Component {
  state = { isFocused: false };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    return (
      <Wrapper
        dir="column"
        css={`
          align-items: flex-start;
          ${this.props.css && this.props.css};
        `}
      >
        <StyledLabel
          htmlFor={this.props.name}
          value={this.props.value}
          isFocused={this.props.value !== "" || this.state.isFocused}
        >
          {this.props.label(this.props.value !== "" || this.state.isFocused)}
        </StyledLabel>
        {this.props.input(this.handleFocus, this.handleBlur)}
      </Wrapper>
    );
  }
}
