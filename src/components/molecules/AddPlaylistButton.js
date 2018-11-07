import React, { Component } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

export default class AddPlaylistButton extends Component {
  render() {
    return (
      <Button>
        <Text>プレイリストに追加</Text>
      </Button>
    );
  }
}
