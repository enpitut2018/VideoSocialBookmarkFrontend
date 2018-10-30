import React, { Component } from "react";
import styled from "styled-components";
import palette from "../../theme/palette.json";
import colors from "../../theme/colors.json";

const StyledItem = styled.div`
  width: ${props => (props.width ? props.width : "200px")};
  padding: 1px;
  background-color: ${palette[colors.organisms.Header.Dropdown.Background]};
  ${props => props.css};
`;

export default class DropdownMenuItem extends Component {
  render() {
    return <StyledItem {...this.props}>{this.props.children}</StyledItem>;
  }
}
