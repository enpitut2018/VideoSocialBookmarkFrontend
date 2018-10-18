import React, { Component } from "react";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import Text from "../atoms/Text";

const StyledWrapper = styled(Wrapper)`
  margin: 20px auto 60px auto;
`;

export default class URLSubmitForm extends Component {
  render() {
    return (
      <StyledWrapper dir="column">
        <Text level="XL">Bookmark Video</Text>
        <Form
          render={props => (
            <>
              <TextInput placeholder="URL" />
              <TextArea placeholder="Comment" />
              <Button mode="Primary">Submit</Button>
            </>
          )}
        />
      </StyledWrapper>
    );
  }
}
