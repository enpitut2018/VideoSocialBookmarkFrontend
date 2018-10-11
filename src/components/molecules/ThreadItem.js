import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";

export default class ThreadItem extends Component {
  render() {
    return <Wrapper>{this.props.bookmark.comment}</Wrapper>;
  }
}
