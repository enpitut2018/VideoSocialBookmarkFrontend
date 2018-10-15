import * as React from "react";
import styled from "styled-components";

import colors from "../../theme/colors";
import palette from "../../theme/palette";
import { elevate } from "../../theme/shadows";

const StyledInput = styled.input`
  width: 400px;
  padding: 12px 26px;
  margin: 10px;
  border-radius: 23px;

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
