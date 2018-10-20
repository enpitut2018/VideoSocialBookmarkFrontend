import React, { Component } from "react";
import Form from "../molecules/Form";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import { connect } from "react-redux";
import { postBookmarkByEntryId } from "../../actions/BookmarkActions";

const StyledWrapper = styled(Wrapper)`
  margin: 20px auto 60px auto;
`;

class CommentSubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  handleCommentChange = comment => {
    this.setState({ comment });
  };

  submit = e => {
    e.preventDefault();
    this.props.dispatch(
      postBookmarkByEntryId(this.props.entryId, this.state.comment)
    );
  };

  render() {
    return (
      <StyledWrapper dir="column">
        <Form
          onSubmit={this.submit}
          render={props => (
            <>
              <TextArea
                placeholder="Comment"
                handleChange={this.handleCommentChange}
              />
              <Button mode="Primary" type="submit">
                Submit
              </Button>
            </>
          )}
        />
      </StyledWrapper>
    );
  }
}

export default connect(store => ({
  isLoading: store.bookmarks.isLoading
}))(CommentSubmitForm);
