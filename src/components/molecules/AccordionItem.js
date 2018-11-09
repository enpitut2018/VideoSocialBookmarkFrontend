import * as React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";

import palette from "../../theme/palette.json";
import colors from "../../theme/colors.json";

const StyledAccordionItem = styled.div`
  padding: 15px 0;
  margin: 0;

  border: solid 0 ${palette[colors.Border]};
  border-bottom-width: 1px;

  &:last-child {
    border-bottom-width: 0;
  }
`;

export default class AccordionItem extends React.Component {
  render() {
    const handleClick = this.props.handleClick;
    return (
      <StyledAccordionItem>
        <Text
          level="L"
          margin="5px 0"
          userSelect="none"
          onClick={handleClick}
          cursor="pointer"
        >
          {this.props.header}
        </Text>
        {this.props.isOpen && (
          <Text size="M" margin="20px 0 15px 0">
            {this.props.body}
          </Text>
        )}
      </StyledAccordionItem>
    );
  }
}
