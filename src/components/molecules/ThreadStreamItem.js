import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";

export default class ThreadItem extends Component {
  render() {
    return (
      <Wrapper>
        <h3>{this.props.url}</h3>
      </Wrapper>
    );
  }
}
