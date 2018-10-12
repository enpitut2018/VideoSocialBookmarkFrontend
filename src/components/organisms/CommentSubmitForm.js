import React, { Component } from "react";
import Form from "../molecules/Form";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";

import sizes from "../../theme/sizes.json";

const StyledWrapper = styled(Wrapper)`
  margin: ${sizes.organisms.URLSubmitForm.Default.Margin};
`;

export default class CommentSubmitForm extends Component {
  render() {
    return (
      <StyledWrapper dir="column">
        <Form
          render={props => (
            <>
              <TextArea placeholder="Comment" />
              <Button mode="Primary">Submit</Button>
            </>
          )}
        />
      </StyledWrapper>
    );
  }
}
