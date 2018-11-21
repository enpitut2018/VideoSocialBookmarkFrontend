import * as React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Accordion from "../organisms/Accordion";
import { style } from "../mediaQuery";
import BasicPageWrapper from "../../BasicPageWrapper";
import terms from "../../terms";

const StyledHeader = styled(Text)`
  ${style({
    XL: `width: 900px`,
    L: `width: 90%`,
    M: `width: 90%`,
    S: `width: 95%`
  })};
  margin-bottom: 30px;
`;

export default class Terms extends React.Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="XL">利用規約</Text>
        <StyledHeader>{terms.Header}</StyledHeader>
        <Accordion items={terms.Body} />
      </BasicPageWrapper>
    );
  }
}
