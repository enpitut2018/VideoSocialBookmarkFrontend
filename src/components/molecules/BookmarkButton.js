import React, { Component } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import { postComment } from "../../actions/CommentActions";
import { connect } from "react-redux";
import palette from "../../theme/palette";

class BookmarkButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false
    };
  }
  render() {
    return (
      <Button
        mode={this.state.bookmarked ? "Primary" : "Default"}
        size="S"
        padding="0"
        onClick={e => {
          e.stopPropagation();
          e.preventDefault();
          this.props.dispatch(postComment(this.props.entryId, ""));
          this.setState({ bookmarked: true });
        }}
      >
        <Text
          level="XS"
          fontWeight={this.state.bookmarked ? "bold" : "300"}
          color={
            this.state.bookmarked ? palette["White00"] : palette["Black00"]
          }
        >
          ブックマーク
          {this.state.bookmarked ? "中" : "する"}
        </Text>
      </Button>
    );
  }
}

export default connect(store => ({}))(BookmarkButton);
