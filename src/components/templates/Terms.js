import * as React from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import Accordion from "../organisms/Accordion";
import { style } from "../mediaQuery";

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
      <>
        <Header />
        <Wrapper dir="column">
          <Text level="XL">利用規約</Text>
          <StyledHeader>{terms.Header}</StyledHeader>
          <Accordion items={terms.Body} />
        </Wrapper>
        <Footer />
      </>
    );
  }
}
