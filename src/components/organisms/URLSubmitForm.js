import React, { Component } from "react";
import Form from "../molecules/Form";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";

import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import sizes from "../../theme/sizes.json";

const StyledTitle = styled.span`
  font-size: ${sizes.organisms.URLSubmitForm.Title.Default.Font};
  color: ${palette[colors.organisms.URLSubmitForm.Title.Font]};
  padding: ${sizes.organisms.URLSubmitForm.Title.Default.Padding};
  margin: ${sizes.organisms.URLSubmitForm.Title.Default.Margin};
`;

const StyledWrapper = styled(Wrapper)`
  margin: ${sizes.organisms.URLSubmitForm.Default.Margin};
`;

export default class URLSubmitForm extends Component {
  render() {
    return (
      <StyledWrapper dir="column">
        <StyledTitle>Bookmark Video</StyledTitle>
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
