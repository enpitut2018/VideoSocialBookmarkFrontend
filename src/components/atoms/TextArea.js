import * as React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import { elevate } from "../../theme/shadows";
import { style } from "../mediaQuery";

const StyledInput = styled.textarea`
  ${style({
    XL: `width: 400px`,
    L: `width: 400px`,
    M: `max-width: 100%`,
    S: `max-width: 100%`
  })};

  padding: 12px 26px;
  margin: 10px;
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    return (
      <StyledInput
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
