import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Wrapper dir="column">{this.props.render()}</Wrapper>
      </form>
    );
  }
}
