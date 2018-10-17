import React, { Component } from "react";
import Form from "../molecules/Form";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";

const StyledWrapper = styled(Wrapper)`
  margin: 20px auto 60px auto;
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
