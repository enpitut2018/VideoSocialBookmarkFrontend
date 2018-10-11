import React, { Component } from "react";
import ThreadItem from "./ThreadItem";
import Wrapper from "../atoms/Wrapper";

export default class ThreadStream extends Component {
  render() {
    return (
      <Wrapper>
        <ThreadItem />
      </Wrapper>
    );
  }
}
