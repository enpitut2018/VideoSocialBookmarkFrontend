import * as React from "react";

import Card from "./Card";
import styled from "styled-components";

import sizes from "../../theme/sizes";

const StyledAccordionItem = styled(Card)`
  cursor: pointer;
  user-select: none;

  padding: ${sizes.atoms.AccordionItem.Default.Padding};
  margin: ${sizes.atoms.AccordionItem.Default.Margin};
  width: ${sizes.atoms.AccordionItem.Default.Width};
  border-radius: ${sizes.atoms.AccordionItem.Default.BorderRadius};
`;

export default class AccordionItem extends React.Component {
  render() {
    return (
      <StyledAccordionItem
        dir="column"
        mode={this.props.mode}
        elevation={this.props.elevation ? this.props.elevation : 2}
      >
        {React.Children.map(
          this.props.children,
          (elem, i) => React.cloneElement(elem, {
            isOpen: Array.isArray(this.props.children) ? this.props.isOpen : true,
            onClick: this.props.handleClick,
          })
        )}
      </StyledAccordionItem>
    );
  }
}
