import styled, { keyframes } from "styled-components";
import React, { Component } from "react";
import colors from "../../theme/colors";
import palette from "../../theme/palette";

const strokeDashOffset = 100;
const animationDuration = "1.5s";

const rotator = keyframes`
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledSVG = styled.svg`
  animation: ${rotator} ${animationDuration} linear infinite;
  margin: 1rem;
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: ${strokeDashOffset};
  }
  35% {
    stroke-dashoffset: 14;
    transform: rotate(130deg);
  }
  100% {
    stroke-dashoffset: ${strokeDashOffset};
    transform: rotate(360deg);
  }
`;

const StyledCircle = styled.circle`
  stroke-dasharray: ${strokeDashOffset};
  stroke-dashoffset: 0;
  transform-origin: center;

  stroke: ${palette[colors.atoms.LoadingIcon.Stroke]};
  animation: ${dash} ${animationDuration} ease-in-out infinite;
`;

const StyledWrapper = styled.div``;

export default class Circular extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledSVG
          width={this.props.width ? this.props.width : "36px"}
          height={this.props.height ? this.props.height : "36px"}
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <StyledCircle
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            cx="18"
            cy="18"
            r="16"
          />
        </StyledSVG>
      </StyledWrapper>
    );
  }
}
