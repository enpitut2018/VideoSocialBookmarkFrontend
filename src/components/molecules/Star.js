import React, { Component } from "react";
import StarIcon from "../../assets/images/material-icon/baseline-star-24px.svg.js";
import StarBorderIcon from "../../assets/images/material-icon/baseline-star_border-24px.svg.js";
// import StarIcon from "../../assets/images/material-icon/baseline-favorite-24px.svg.js";
// import StarBorderIcon from "../../assets/images/material-icon/baseline-favorite_border-24px.svg.js";
import styled from "styled-components";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import elevate from "../../theme/shadows";

const width = 42;
const height = 42;
const StyledWrapper = styled.div`
  cursor: pointer;
  width: ${width}px;
  height: ${height}px;
  user-select: none;

  ${elevate(2)};
  &:hover {
    ${elevate(4)};
  }
  &:active {
    ${elevate(0)};
  }
`;

export default class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false,
      hover: false
    };
  }

  onClickHandler = e => {
    this.setState(prev => ({
      enabled: !prev.enabled
    }));
  };

  onMouseEnterHandler = e => {
    this.setState({ hover: true });
  };

  onMouseLeaveHandler = e => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <StyledWrapper
        onClick={this.onClickHandler}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        {this.state.enabled
          ? StarIcon({
              fill: palette[colors.molecules.Star.Enable.Fill],
              width,
              height
            })
          : StarBorderIcon({
              fill: this.state.hover
                ? palette[colors.molecules.Star.Enable.Fill]
                : palette[colors.molecules.Star.Disable.Fill],
              width,
              height
            })}
      </StyledWrapper>
    );
  }
}
