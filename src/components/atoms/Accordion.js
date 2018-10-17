import * as React from "react";

import Card from "./Card";
import { elevate } from "../../theme/shadows";

import styled from "styled-components";

const StyledAccordion = styled(Card)`
  user-select: none;

  padding: 0px;
  border-radius: 10px;
  width: 800px;

  &:hover {
    ${props => elevate(props.elevation ? props.elevation + 2 : 4)};
  }
  &:active {
    ${props => elevate(0)};
  }
`;

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opens: new Array(this.props.children.length).fill(false).map((_, i) => i === 0),
    };
  }
  handleClick(idx) {
    if (this.state.opens[idx]) {
      this.setState({
        opens: new Array(this.props.children.length).fill(false).map(_ => false),
      });
    } else {
      this.setState({
        opens: new Array(this.props.children.length).fill(false).map((_, i) => i === idx),
      });
    }
  }
  render() {
    return (
      <StyledAccordion
        dir="column"
        mode={this.props.mode}
        elevation={this.props.elevation ? this.props.elevation : 2}
      >
        {React.Children.map(
          this.props.children,
          (elem, i) => React.cloneElement(elem, {
            isOpen: this.state.opens[i],
            handleClick: () => this.handleClick(i),
          })
        )}
      </StyledAccordion>
    );
  }
}
