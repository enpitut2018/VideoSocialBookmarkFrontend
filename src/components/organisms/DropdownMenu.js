import React, { Component } from "react";
import styled from "styled-components";
import Card from "../atoms/Card";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";

const StyledWrapper = styled(Card)`
  ${props => props.right && `right: ${props.right}`};
  z-index: 20;
  position: absolute;
  top: calc(8px + 1rem + 4px * 2 + 10px * 2);

  background-color: ${palette[colors.organisms.Header.DropdownMenu.Background]};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDropdownMenu = styled.div`
  position: relative;
  z-index: 10;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 2px;
  ${props => props.css};
`;

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }

  componentWillMount() {
    window.addEventListener("click", this.close);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.close);
  }

  onClick = e => {
    e.stopPropagation();
    this.setState(prev => ({ isExpanded: !prev.isExpanded }));
  };

  close = () => {
    this.setState({ isExpanded: false });
  };

  render() {
    return (
      <StyledDropdownMenu onClick={this.onClick} {...this.props}>
        {this.props.renderHeader()}

        {this.state.isExpanded && (
          <StyledWrapper
            top={this.props.top}
            right={this.props.right}
            dir="column"
            elevation={4}
          >
            {this.props.children}
          </StyledWrapper>
        )}
      </StyledDropdownMenu>
    );
  }
}
