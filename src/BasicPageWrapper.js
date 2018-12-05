import React from "react";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import ToastManager from "./components/organisms/ToastManager";
import Wrapper from "./components/atoms/Wrapper";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled(Wrapper)`
  margin-bottom: auto;
`;

export default function BasicPageWrapper(props){
  return (
    <Root>
      <Header />
      <ToastManager />
      <Body dir="column">{props.children}</Body>
      <Footer />
    </Root>
  );
};
