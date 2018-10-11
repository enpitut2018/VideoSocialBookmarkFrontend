import * as React from "react";
import styled from "styled-components";

import sizes from "../../theme/sizes";
import colors from "../../theme/colors";
import palette from "../../theme/palette";
import { elevate } from "../../theme/shadows";

const StyledInput = styled.input`
  width: ${sizes.atoms.TextInput.Default.Width};
  height: ${sizes.atoms.TextInput.Default.Height};
  padding: ${sizes.atoms.TextInput.Default.Padding};
  margin: ${sizes.atoms.TextInput.Default.Margin};
  border-radius: ${sizes.atoms.TextInput.Default.BorderRadius};

  background-color: ${palette[colors.atoms.TextInput.Background]};
  color: ${palette[colors.atoms.TextInput.Font]};
  border: 0px solid #f00;

  ${props => elevate(props.elevation ? props.elevation + 2 : 4)};
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
      />
    );
  }
}
