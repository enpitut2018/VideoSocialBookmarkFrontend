import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Text from "../atoms/Text";
import elevate from "../../theme/shadows";
import colors from "../../theme/colors";
import palette from "../../theme/palette";
import InfoIcon from "../../assets/images/material-icon/baseline-info-24px.svg";
import { timeout_ms } from "../organisms/ToastManager";

const translator = keyframes`
  0% {
    opacity: 0.0;
    transform: translateY(-100%);
  }

  3% {
    opacity: 1.0;
    transform: translateY(0);
  }

  95% {
    opacity: 1.0;
    transform: translateY(0);
  }

  100% {
    opacity: 0.0;
    transform: translateY(-100%);
  }
`;

const ToastWrapper = styled.div`
  opacity: 0;
  left: 0;
  width: 280px;
  position: relative;
  z-index: 50;
  background-color: ${palette[colors.molecules.Toast.Background]};
  display: flex;
  padding: 0.3rem;
  animation: ${translator} ${() => timeout_ms}ms ease-out;
  margin-bottom: 5px;

  ${elevate(4)};

  &:hover {
    ${elevate(5)};
  }
`;

const InfoIconWrapper = styled.div`
  margin: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Toast extends Component {
  render() {
    return (
      <ToastWrapper>
        <InfoIconWrapper>
          <InfoIcon
            width="29px"
            height="29px"
            fill={palette[colors.molecules.Toast.Icon.Fill]}
          />
        </InfoIconWrapper>
        <Text
          fontWeight="bold"
          color={palette[colors.molecules.Toast.Font]}
          css={`
            display: flex;
            align-items: center;
            overflow: hidden;
            margin-right: 1.1rem;
          `}
        >
          {this.props.content}
        </Text>
      </ToastWrapper>
    );
  }
}
