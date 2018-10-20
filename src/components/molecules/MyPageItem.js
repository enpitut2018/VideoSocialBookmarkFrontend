import React, { Component } from "react";
import RankingItem from "./RankingItem";

export default class MyPageItem extends Component {
  render() {
    return (
      <>
        <RankingItem entry={this.props.entry} key={this.props.entry.id} />
        <p>{this.props.entry.bookmark.comment}</p>
      </>
    );
  }
}
