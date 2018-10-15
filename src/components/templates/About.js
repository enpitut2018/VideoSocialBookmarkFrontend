import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Wrapper from "../atoms/Wrapper";
import Title from "../atoms/Title";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <Title level={2}>VSBとは</Title>
        </Wrapper>
        <Footer />
      </>
    );
  }
}