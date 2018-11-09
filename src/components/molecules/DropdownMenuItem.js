import React, { Component } from "react";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import palette from "../../theme/palette.json";
import colors from "../../theme/colors.json";

const StyledItem = styled.div`
  ${AnkerStyle};
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${props => (props.width ? props.width : "200px")};
  padding: 0.8rem 0;
  background-color: ${palette[colors.organisms.Header.Dropdown.Background]};
  ${props => props.css};
`;

export default class DropdownMenuItem extends Component {
  render() {
    return <StyledItem {...this.props}>{this.props.children}</StyledItem>;
  }
}
