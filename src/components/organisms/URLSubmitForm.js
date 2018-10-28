import React, { Component } from "react";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import Text from "../atoms/Text";
import { connect } from "react-redux";
import { postEntry } from "../../actions/EntryActions";
import { style } from "../mediaQuery";

const StyledWrapper = styled(Wrapper)`
  margin: 20px auto 60px auto;
  ${style({
    S: `margin-top: 10px`,
    M: `margin-top: 12px`,
    L: `margin-top: 16px`,
    XL: `margin-top: 20px`
  })};
  ${style({
    S: `margin-bottom: 20px`,
    M: `margin-bottom: 30px`,
    L: `margin-bottom: 40px`,
    XL: `margin-bottom: 50px`
  })};
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
    this.props.dispatch(postEntry(this.state.url, this.state.comment));
    e.target.form.reset();
  };

  render() {
    return (
      <StyledWrapper dir="column">
        <Text level="L" margin="10px 0">
          Bookmark Video
        </Text>
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
  isLoading: store.comments.isLoading
}))(URLSubmitForm);
