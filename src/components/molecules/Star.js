import React, { Component } from "react";
import StarIcon from "../../assets/images/material-icon/baseline-star-24px.svg.js";
import StarBorderIcon from "../../assets/images/material-icon/baseline-star_border-24px.svg.js";
import styled from "styled-components";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import elevate from "../../theme/shadows";
import { getStar, postStar, deleteStar } from "../../actions/StarActions.js";

import { connect } from "react-redux";

const width = 42;
const height = 42;
const StyledWrapper = styled.div`
  cursor: pointer;
  width: ${width}px;
  height: ${height}px;
  user-select: none;

  margin: 1rem;

  ${elevate(2)};
  &:hover {
    ${elevate(4)};
  }
  &:active {
    ${elevate(0)};
  }
`;

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  componentWillMount() {
    this.props.dispatch(getStar(this.props.entryId));
  }

  isEnabled = () => {
    const entry = this.props.entries.find(
      e => e.entryId === this.props.entryId
    );
    return entry !== undefined && entry.enabled;
  };

  onClickHandler = _e => {
    if (this.isEnabled()) {
      this.props.dispatch(deleteStar(this.props.entryId));
    } else {
      this.props.dispatch(postStar(this.props.entryId));
    }
  };

  onMouseEnterHandler = _e => {
    this.setState({ hover: true });
  };

  onMouseLeaveHandler = _e => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <StyledWrapper
        onClick={this.onClickHandler}
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        {this.isEnabled()
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

export default connect(_ => ({
}))(Star);
