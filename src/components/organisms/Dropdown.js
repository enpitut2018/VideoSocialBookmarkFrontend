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

  background-color: ${palette[colors.organisms.Header.Dropdown.Background]};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 2px;
  ${props => props.css};
`;

const StyledHeader = styled.div`
  cursor: pointer;
`;

export default class Dropdown extends Component {
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
      <StyledDropdown {...this.props}>
        <StyledHeader>{this.props.renderHeader(this.onClick)}</StyledHeader>

        {this.state.isExpanded && (
          <StyledWrapper
            top={this.props.top}
            right={this.props.right}
            dir="column"
            elevation={4}
            onClick={e => e.stopPropagation()}
          >
            {this.props.children}
          </StyledWrapper>
        )}
      </StyledDropdown>
    );
  }
}
