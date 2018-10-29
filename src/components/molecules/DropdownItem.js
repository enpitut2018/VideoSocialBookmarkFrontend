import React, { Component } from "react";
import styled from "styled-components";

const StyledItem = styled.div`
  width: ${props => (props.width ? props.width : "200px")};
  padding: 1px;
  ${props => props.css};
`;

export default class DropdownItem extends Component {
  render() {
    return <StyledItem {...this.props}>{this.props.children}</StyledItem>;
  }
}
