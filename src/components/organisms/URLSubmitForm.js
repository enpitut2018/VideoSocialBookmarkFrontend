import React, { Component } from "react";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import Text from "../atoms/Text";
import { connect } from "react-redux";
import { postBookmark } from "../../actions/BookmarkActions";

const StyledWrapper = styled(Wrapper)`
  margin: 20px auto 60px auto;
`;

class URLSubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      comment: ""
    };
  }

  handleUrlChange = url => {
    this.setState({ url });
  };

  handleCommentChange = comment => {
    this.setState({ comment });
  };

  submit = e => {
    e.preventDefault();
    this.props.dispatch(postBookmark(this.state.url, this.state.comment));
  };

  render() {
    return (
      <StyledWrapper dir="column">
        <Text level="XL">Bookmark Video</Text>
        <Form
          onSubmit={this.submit}
          render={props => (
            <>
              <TextInput
                placeholder="URL"
                handleChange={this.handleUrlChange}
                required
              />
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
}))(URLSubmitForm);
