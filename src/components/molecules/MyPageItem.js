import React, { Component } from "react";
import TrendItem from "./TrendItem";

export default class MyPageItem extends Component {
  render() {
    return (
      <>
        <TrendItem entry={this.props.entry} key={this.props.entry.id} />
        <p>{this.props.entry.bookmark.comment}</p>
      </>
    );
  }
}
