import React, { Component } from "react";
import Toast from "../molecules/Toast";
import Wrapper from "../atoms/Wrapper";
import { connect } from "react-redux";
import styled from "styled-components";

export const timeout_ms = 4500;
export const ADD_BOOKMARKED_TOAST = "ADD_BOOKMARKED_TOAST";

const ToastWrapper = styled.div`
  position: fixed;
`;

class ToastManager extends Component {
  render() {
    return (
      <ToastWrapper>
        <Wrapper dir="column">
          {this.props.toasts.map((toast, i) => (
            <Toast key={i} content={toast.content} mode="Info" />
          ))}
        </Wrapper>
      </ToastWrapper>
    );
  }
}

export default connect(store => ({
  toasts: store.toasts.toasts
}))(ToastManager);
