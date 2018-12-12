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

  padding: 0.8rem 1rem;
  padding-left: 0.1rem;
  width: ${props => (props.width ? props.width : "240px")};
  background-color: ${palette[colors.organisms.Header.Dropdown.Background]};
  ${props => props.css};
`;

export default class DropdownMenuItem extends Component {
  render() {
    return <StyledItem {...this.props}>{this.props.children}</StyledItem>;
  }
}
