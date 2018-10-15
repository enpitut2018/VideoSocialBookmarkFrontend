import React, { Component } from "react";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import Title from "../atoms/Title";

import sizes from "../../theme/sizes.json";

const StyledWrapper = styled(Wrapper)`
  margin: ${sizes.organisms.URLSubmitForm.Default.Margin};
`;

export default class URLSubmitForm extends Component {
  render() {
    return (
      <StyledWrapper dir="column">
        <Title>Bookmark Video</Title>
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
