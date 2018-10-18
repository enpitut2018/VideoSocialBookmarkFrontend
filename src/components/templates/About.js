import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <Text level="XL">VSBとは</Text>
        </Wrapper>
        <Footer />
      </>
    );
  }
}
