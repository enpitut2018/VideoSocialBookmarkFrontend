import React from "react";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import toastManager from "./components/organisms/ToastManager";
import Wrapper from "./components/atoms/Wrapper";

export default props => (
  <>
    <Header />
    {toastManager.render}
    <Wrapper dir="column">{props.children}</Wrapper>
    <Footer />
  </>
);
