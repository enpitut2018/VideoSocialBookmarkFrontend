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
  margin: 20px auto 10px auto;
  ${style({
    S: `margin-top: 10px`,
    M: `margin-top: 12px`,
    L: `margin-top: 16px`,
    XL: `margin-top: 20px`
  })};
`;

class URLSubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      comment: "",
      hasSubmitted: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.state === "posting" && nextProps.state === "success") {
      this.setState({ url: "", comment: "", hasSubmitted: false });
    }
  }

  handleUrlChange = e => {
    this.setState({ url: e.target.value });
  };

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
    this.props.dispatch(postEntry(this.state.url, this.state.comment));
    this.setState({ hasSubmitted: true });
  };

  render() {
    return (
      <StyledWrapper dir="column">
        <Text level="L" margin="10px 0">
          動画をブックマーク
        </Text>
        <Form
          onSubmit={this.submit}
          css="width: 100%;"
          render={props => (
            <>
              <TextInput
                placeholder="URL"
                handleChange={this.handleUrlChange}
                width="calc(85% - 52px)"
                submit={this.submit}
                value={this.state.url}
                required
              />
              <TextArea
                placeholder="コメント（任意）"
                handleChange={this.handleCommentChange}
                width="calc(85% - 52px)"
                submit={this.submit}
                value={this.state.comment}
              />
              <Button mode="Primary" type="submit">
                ブックマーク
              </Button>
            </>
          )}
        />
      </StyledWrapper>
    );
  }
}

export default connect(store => ({
  state: store.entries.state
}))(URLSubmitForm);
