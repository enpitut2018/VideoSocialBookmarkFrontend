import React, { Component } from "react";
import styled from "styled-components";
import { style } from "../mediaQuery";
import Thumbnail from "../atoms/Thumbnail";

const PlaylistItemWrapper = styled.div`

`;

const StyledThumbnail = styled.div`
  ${style({
    S: `margin-right: 8px`,
    M: `margin-right: 12px`,
    L: `margin-right: 17px`,
    XL: `margin-right: 20px`
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
            height="100px"
          />
        </StyledThumbnail>
      </PlaylistItemWrapper>
    );
  }
}
