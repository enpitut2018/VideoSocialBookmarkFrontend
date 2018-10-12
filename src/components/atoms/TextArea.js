import * as React from "react";
import styled from "styled-components";

import sizes from "../../theme/sizes";
import colors from "../../theme/colors";
import palette from "../../theme/palette";
import { elevate } from "../../theme/shadows";

const StyledInput = styled.textarea`
  width: ${sizes.atoms.TextArea.Default.Width};
  height: ${sizes.atoms.TextArea.Default.Height};
  padding: ${sizes.atoms.TextArea.Default.Padding};
  margin: ${sizes.atoms.TextArea.Default.Margin};
  border-radius: ${sizes.atoms.TextArea.Default.BorderRadius};

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
