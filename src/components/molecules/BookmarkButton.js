import React, { Component } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import palette from "../../theme/palette";

export default class BookmarkButton extends Component {
  render() {
    return (
      <Button
        mode={this.props.bookmarked ? "Primary" : "Default"}
        size={this.props.size ? this.props.size : "S"}
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();

          if (this.props.handleClick) {
            this.props.handleClick();
          }
        }}
        {...this.props}
      >
        <Text
          size={this.props.size ? this.props.size : "S"}
          fontWeight={this.props.bookmarked ? "bold" : "300"}
          color={
            this.props.bookmarked ? palette["White00"] : palette["Black00"]
          }
        >
          ブックマーク
          {this.props.bookmarked ? "中" : "する"}
        </Text>
      </Button>
    );
  }
}
