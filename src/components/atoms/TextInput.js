import * as React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import elevate from "../../theme/shadows";
import { style } from "../mediaQuery";

const StyledInput = styled.input`
  padding: 12px 26px;
  margin: 10px 0;
  border-radius: 23px;

  ${props =>
    props.width
      ? `width: ${props.width}`
      : style({
          XL: `width: 400px`,
          L: `width: calc(45vw - 52px)`,
          M: `width: calc(60vw - 52px)`,
          S: `width: calc(80vw - 52px)`
        })};

  background-color: ${palette[colors.atoms.TextInput.Background]};

  color: ${palette[colors.atoms.TextInput.Font]};
  border-width: 0px;
  outline: none;

  ${props => elevate(props.elevation ? props.elevation : 2)};
`;

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
    if (this.props.handleChange) {
      this.props.handleChange(e.target.value);
    }
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  render() {
    return (
      <StyledInput
        {...this.props}
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
        onKeyDown={e => {
          window.console.log("input--------------");
          window.console.log(String(e.keyCode));
          window.console.log(String(e.ctrlKey));
          window.console.log(e.target.form);
          if (
            e.keyCode === 13 &&
            e.ctrlKey &&
            e.target.form &&
            e.target.form.reportValidity() &&
            this.props.submit
          ) {
            // e.target.form.click();
            this.props.submit();
          }
        }}
      />
    );
  }
}
