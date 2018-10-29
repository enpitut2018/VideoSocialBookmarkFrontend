import * as React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import elevate from "../../theme/shadows";
import { style } from "../mediaQuery";

const StyledInput = styled.textarea`
  ${props =>
    props.width
      ? `width: ${props.width}`
      : style({
          XL: `width: 800px`,
          L: `width: calc(90vw - 52px)`,
          M: `width: calc(90vw - 52px)`,
          S: `width: calc(95vw - 52px)`
        })};

  padding: 12px 26px;
  margin: 10px 0;
  border-radius: 23px;

  background-color: ${palette[colors.atoms.TextArea.Background]};

  color: ${palette[colors.atoms.TextArea.Font]};
  border-width: 0px;
  outline: none;

  ${props => elevate(props.elevation ? props.elevation : 2)};
`;

export default class TextArea extends React.Component {
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
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
        title={`送信: Ctrl+Enter
改行: Enter`}
        onKeyDown={e => {
          if (
            e.keyCode === 13 &&
            e.ctrlKey &&
            e.target.form &&
            e.target.form.reportValidity()
          ) {
            e.target.form.submit();
          }
        }}
      />
    );
  }
}
