import React, { Component } from "react";
import styled from "styled-components";
import CheckBoxOutlineBlankIcon from "../../assets/images/material-icon/baseline-check_box_outline_blank-24px.svg";
import CheckBoxIcon from "../../assets/images/material-icon/baseline-check_box-24px.svg";
import colors from "../../theme/colors";
import palette from "../../theme/palette";

const StyledCheckBox = styled.input`
  display: none;
`;

export default class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: "checked" in props ? props.checked : false
    };
  }

  handleClick = () =>
    this.setState(prev => ({
      checked: !prev.checked
    }));

  render() {
    const color = this.props.fill
      ? this.props.fill
      : palette[colors.atoms.CheckBox.Fill];
    return (
      <div onClick={this.handleClick}>
        {this.state.checked ? (
          <CheckBoxIcon fill={color} />
        ) : (
          <CheckBoxOutlineBlankIcon fill={color} />
        )}
        <StyledCheckBox type="checkbox" checked={this.state.checked} />
      </div>
    );
  }
}
