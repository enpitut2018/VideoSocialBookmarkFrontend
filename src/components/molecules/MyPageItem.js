import React, { Component } from "react";
import RankingItem from "./RankingItem";

export default class MyPageItem extends Component {
  render() {
    return (
      <>
        <RankingItem thread={this.props.thread} key={this.props.thread.id} />
        <p>{this.props.thread.bookmark.comment}</p>
      </>
    );
  }
}
