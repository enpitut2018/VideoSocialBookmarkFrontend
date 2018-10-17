import * as React from "react";

import Card from "./Card";
import { Text } from "./Text";
import { elevate } from "../../theme/shadows";

import styled from "styled-components";

import sizes from "../../theme/sizes";

const StyledAccordionItemBody = styled(Card)`
  cursor: pointer;

  padding: ${sizes.atoms.AccordionItemBody.Default.Padding};
  margin: ${sizes.atoms.AccordionItemBody.Default.Margin}; 
  width: ${sizes.atoms.AccordionItemBody.Default.Width};
  border-radius: ${sizes.atoms.AccordionItemBody.Default.BorderRadius};
  box-shadow: none;

  &:hover {
    ${props => elevate(props.elevation ? props.elevation + 2 : 4)};
  }
  &:active {
    ${props => elevate(0)};
  }
`;

export default class AccordionItemBody extends React.Component {
  render() {
    return this.props.isOpen ? (
      <StyledAccordionItemBody
        mode={this.props.mode}
        elevation={this.props.elevation ? this.props.elevation : 2}
        onClick={this.props.onClick}
      >
        <Text level="M">{this.props.children}</Text>
      </StyledAccordionItemBody>
    ) : null;
  }
}
