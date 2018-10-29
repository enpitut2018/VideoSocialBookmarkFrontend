import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";

const StyledForm = styled.form`
  ${props => props.css};
`;

export default class Form extends Component {
  render() {
    return (
      <StyledForm css={this.props.css} onSubmit={this.props.onSubmit}>
        <Wrapper dir="column">{this.props.render()}</Wrapper>
      </StyledForm>
    );
  }
}
