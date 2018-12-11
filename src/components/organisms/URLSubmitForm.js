import React, { Component } from "react";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import Text from "../atoms/Text";
import LabeledInput from "../molecules/LabeledInput";
import { connect } from "react-redux";
import { postEntry } from "../../actions/EntryActions";
import { style } from "../mediaQuery";
import SNSShareForm from "./SNSShareForm";
import palette from "../../theme/palette";

const StyledWrapper = styled(Wrapper)`
  width: 100%;
  margin: 20px auto 10px auto;
  ${style({
    S: `margin-top: 10px`,
    M: `margin-top: 12px`,
    L: `margin-top: 16px`,
    XL: `margin-top: 20px`
  })};
`;

class URLSubmitForm extends Component {
  state = {
    url: "",
    comment: "",
    hasSubmitted: false,
    SNSShareEnabled: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.state === "posting" && nextProps.state === "success") {
      this.setState({
        url: "",
        comment: "",
        hasSubmitted: false,
        SNSShareEnabled: true
      });
    }
  }

  handleUrlChange = e => {
    this.setState({ url: e.target.value });
  };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleBack = () => {
    this.setState({ SNSShareEnabled: false });
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
    return this.props.state === "success" && this.state.SNSShareEnabled ? (
      <SNSShareForm
        headerTitle={`動画をブックマークしました！
SNSでシェアしますか？`}
        entry={this.props.res.data.entry}
        handleBack={this.handleBack}
      />
    ) : (
      <StyledWrapper dir="column">
        <Text size="L" margin="5px">
          動画をブックマーク
        </Text>
        <Form
          onSubmit={this.submit}
          css="width: 100%;"
          render={() => (
            <>
              <LabeledInput
                name="url"
                label={isFocused => (
                  <Text
                    size="S"
                    margin="0.2rem 0 0 26px"
                    fontSize={isFocused ? "0.7rem" : "1rem"}
                    css="transition: all 0.2s ease-in-out;"
                  >
                    URL
                  </Text>
                )}
                input={(handleFocus, handleBlur) => (
                  <TextInput
                    handleChange={this.handleUrlChange}
                    name="url"
                    width="calc(100% - 52px)"
                    submit={this.submit}
                    value={this.state.url}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    required
                  />
                )}
                value={this.state.url}
                css="width: 85%;"
              />
              <LabeledInput
                name="comment"
                label={isFocused => (
                  <Text
                    size="S"
                    margin="0.2rem 0 0 26px"
                    fontSize={isFocused ? "0.7rem" : "1rem"}
                    css="transition: all 0.2s ease-in-out;"
                  >
                    コメント（任意）
                  </Text>
                )}
                input={(handleFocus, handleBlur) => (
                  <TextArea
                    handleChange={this.handleCommentChange}
                    name="comment"
                    width="calc(100% - 52px)"
                    submit={this.submit}
                    value={this.state.comment}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                  />
                )}
                value={this.state.comment}
                css="width: 85%;"
              />
              <Button mode="Primary" type="submit">
                <Text fontWeight={"bold"} color={palette["White00"]}>
                  ブックマーク
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
  state: store.entries.state,
  url: store.entries.url,
  res: store.entries.res
}))(URLSubmitForm);
