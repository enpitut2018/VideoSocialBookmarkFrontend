import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";

export default class EntryItem extends Component {
  render() {
    return <Wrapper>{this.props.bookmark.comment}</Wrapper>;
  }
}
