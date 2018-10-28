import React, { Component } from "react";
import styled from "styled-components";
// import Wrapper from "../atoms/Wrapper";
import Card from "../atoms/Card";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";

const StyledWrapper = styled(Card)`
  position: absolute;
  ${props => props.top && `top: ${props.top}`};
  ${props => props.right && `right: ${props.right}`};

  background-color: ${palette[colors.organisms.DropdownMenu.Background]};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDropdownMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 2px;
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
      <StyledDropdownMenu onClick={this.onClick}>
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
