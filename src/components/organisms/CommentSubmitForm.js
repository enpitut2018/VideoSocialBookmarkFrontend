import React, { Component } from "react";
import Form from "../molecules/Form";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import { connect } from "react-redux";
import { postComment } from "../../actions/CommentActions";
import palette from "../../theme/palette";

const StyledWrapper = styled(Wrapper)`
  margin: 20px auto 60px auto;
`;

class CommentSubmitForm extends Component {
  state = {
    comment: "",
    hasSubmitted: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.state === "posting" && nextProps.state === "success") {
      this.setState({ comment: "", hasSubmitted: false });
    }
  }

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  submit = e => {
    if (e) {
      e.preventDefault();
      e.target.reset();
    }
    if (this.state.hasSubmitted) {
      return false;
    }
    this.props.dispatch(postComment(this.props.entryId, this.state.comment));
    this.setState({ hasSubmitted: true });
  };

  render() {
    return (
      <StyledWrapper dir="column">
        <Form
          onSubmit={this.submit}
          render={() => (
            <>
              <TextArea
                placeholder="コメントを追加"
                handleChange={this.handleCommentChange}
                submit={this.submit}
                hasSubmitted={this.state.hasSubmitted}
                value={this.state.comment}
                required
              />
              <Button mode="Primary" type="submit">
                <Text fontWeight={"bold"} color={palette["White00"]}>
                  コメント
                </Text>
              </Button>
            </>
          )}
        />
      </StyledWrapper>
    );
  }
}

export default connect(store => ({
  isLoading: store.comments.isLoading,
  state: store.comments.state
}))(CommentSubmitForm);
