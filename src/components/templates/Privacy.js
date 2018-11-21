import * as React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Accordion from "../organisms/Accordion";
import { style } from "../mediaQuery";
import BasicPageWrapper from "../../BasicPageWrapper";

import privacy from "../../privacy";

const StyledHeader = styled(Text)`
  ${style({
    XL: `width: 900px`,
    L: `width: 90%`,
    M: `width: 90%`,
    S: `width: 95%`
  })};
  margin-bottom: 30px;
`;

export default class Privacy extends React.Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="XL">プライバシーポリシー</Text>
        <StyledHeader>{privacy.Header}</StyledHeader>
        <Accordion items={privacy.Body} />
      </BasicPageWrapper>
    );
  }
}
