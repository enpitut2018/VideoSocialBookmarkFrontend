import React, { Component } from "react";
import styled from "styled-components";
import Card from "../atoms/Card";

const StyledCardWrapper = styled.div``;

export default class Toast extends Component {
  render() {
    return (
      <StyledCardWrapper>
        <Card mode={this.props.mode}>{this.props.content}</Card>
      </StyledCardWrapper>
    );
  }
}
