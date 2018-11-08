import React, { Component } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

export default class AddPlaylistButton extends Component {
  render() {
    return (
      <Button size={this.props.size}>
        <Text size={this.props.size}>プレイリストに追加</Text>
      </Button>
    );
  }
}
