import * as React from "react";

import Card from "./Card";
import { elevate } from "../theme/shadows";
import styled from "styled-components";

const StyledButton = styled(Card)`
  cursor: pointer;
  user-select: none;

  &:hover {
    ${props => elevate(props.elevation ? props.elevation + 2 : 4)};
  }
`;

export default class Button extends React.Component {
  render() {
    return (
      <StyledButton
        elevation={this.props.elevation ? this.props.elevation : 2}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </StyledButton>
    );
  }
}
