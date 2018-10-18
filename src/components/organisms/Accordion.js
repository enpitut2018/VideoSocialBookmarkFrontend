import * as React from "react";

import styled from "styled-components";
import AccordionItem from "../molecules/AccordionItem";

import { style } from "../mediaQuery";

const StyledAccordion = styled.div`
  ${style({
    XL: `width: 900px`,
    L: `width: 90%`,
    M: `width: 90%`,
    S: `width: 95%`
  })};
  padding: 0;
  margin: 0;
`;

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItemIndex: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    this.setState({
      openedItemIndex: i === this.state.openedItemIndex ? null : i
    });
  }

  render() {
    return (
      <StyledAccordion>
        {this.props.items.map((item, i) => (
          <AccordionItem
            header={item.Header}
            body={item.Body}
            isOpen={i === this.state.openedItemIndex}
            handleClick={() => this.handleClick(i)}
          />
        ))}
      </StyledAccordion>
    );
  }
}
