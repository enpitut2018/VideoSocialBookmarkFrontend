import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Wrapper from "../atoms/Wrapper";
import Title from "../atoms/Title";

export default class Terms extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <Title level={2}>利用規約</Title>
        </Wrapper>
        <Footer />
      </>
    );
  }
}
