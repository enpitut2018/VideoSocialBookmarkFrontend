import React, { Component } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: 200px;
  padding: 1px;
`;

export default class DropdownMenuItem extends Component {
  render() {
    return <StyledItem>{this.props.children}</StyledItem>;
  }
}
