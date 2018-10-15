import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Wrapper from "../atoms/Wrapper";
import { Text } from "../atoms/Text";

export default class Terms extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <Text level="XL">利用規約</Text>
        </Wrapper>
        <Footer />
      </>
    );
  }
}
