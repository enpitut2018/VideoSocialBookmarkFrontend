import React, { Component } from "react";
import ThreadStreamItem from "../molecules/ThreadStreamItem";
import Wrapper from "../atoms/Wrapper";

export default class ThreadStream extends Component {
  render() {
    return (
      <Wrapper>
        <ThreadStreamItem />
      </Wrapper>
    );
  }
}
