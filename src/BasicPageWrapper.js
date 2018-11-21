import React from "react";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import ToastManager from "./components/organisms/ToastManager";
import Wrapper from "./components/atoms/Wrapper";

export default props => (
  <>
    <Header />
    <ToastManager />
    <Wrapper dir="column">{props.children}</Wrapper>
    <Footer />
  </>
);
