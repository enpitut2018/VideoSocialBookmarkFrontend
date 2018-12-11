import React, { Component } from "react";
import styled from "styled-components";
import { style } from "../mediaQuery";
import Thumbnail from "../atoms/Thumbnail";

const PlaylistItemWrapper = styled.div``;

const StyledThumbnail = styled.div`
  background: #000;
  justify-content: center;
  display: flex;
  height: 90px;
  width: 160px;
  ${style({
    S: `margin-right: 13px`,
    M: `margin-right: 13px`,
    L: `margin-right: 13px`,
    XL: `margin-right: 13px`
  })};
`;

export default class PlaylistOverViewItem extends Component {
  render() {
    return (
      <PlaylistItemWrapper>
        <StyledThumbnail>
          <Thumbnail
            src={this.props.entry.thumbnail_url}
            alt={this.props.entry.title}
            provider={this.props.entry.provider}
            width="160px"
          />
        </StyledThumbnail>
      </PlaylistItemWrapper>
    );
  }
}
