import * as React from "react";

import Card from "./Card";
import { Text } from "./Text";
import { elevate } from "../../theme/shadows";

import styled from "styled-components";

import sizes from "../../theme/sizes";

const StyledAccordionItemHeader = styled(Card)`
  cursor: pointer;

  padding: ${sizes.atoms.AccordionItemHeader.Default.Padding};
  margin: ${sizes.atoms.AccordionItemHeader.Default.Margin}; 
  width: ${sizes.atoms.AccordionItemHeader.Default.Width};
  border-radius: ${sizes.atoms.AccordionItemHeader.Default.BorderRadius};

  &:hover {
    ${props => elevate(props.elevation ? props.elevation + 2 : 4)};
  }
  &:active {
    ${props => elevate(0)};
  }
`;

export default class AccordionItemHeader extends React.Component {
  render() {
    return (
      <StyledAccordionItemHeader
        mode={this.props.mode}
        elevation={this.props.elevation ? this.props.elevation : 2}
        onClick={this.props.onClick}
      >
        <Text level="L">{this.props.children}</Text>
      </StyledAccordionItemHeader>
    );
  }
}
