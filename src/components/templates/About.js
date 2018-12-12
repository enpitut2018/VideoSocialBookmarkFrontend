import * as React from "react";
import styled from "styled-components";
import Text from "../atoms/Text";
import Accordion from "../organisms/Accordion";
import { style } from "../mediaQuery";
import BasicPageWrapper from "../../BasicPageWrapper";
//import privacy from "../../about";
import SampleImage from "../../assets/images/sample.png";
import about from "../../about";
const StyledHeader = styled(Text)`
  ${style({
    XL: `width: 500px`,
    L: `width: 90%`,
    M: `width: 90%`,
    S: `width: 95%`
  })};
  margin-bottom: 30px;
`;


export default class About extends React.Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="XL">VSBとは</Text>
        
        <StyledHeader>{about.Header}</StyledHeader>

        <Accordion items={about.Body} />
        <img src={SampleImage} alt="Sample" width="500" />;
      </BasicPageWrapper>
    );
  }
}
