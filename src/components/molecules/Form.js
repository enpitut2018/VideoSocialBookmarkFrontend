import React, { Component } from "react";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import Wrapper from "../atoms/Wrapper";

export default class Form extends Component {
  render() {
    return (
      <Wrapper>
        <TextInput placeholder={this.props.placeholder} />
        <Button mode="Primary">Submit</Button>
      </Wrapper>
    );
  }
}
