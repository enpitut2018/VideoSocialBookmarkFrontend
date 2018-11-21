import React, { Component } from "react";
import styled from "styled-components";
import { style } from "../mediaQuery";
import Thumbnail from "../atoms/Thumbnail";
import AnkerStyle from "../atoms/AnkerStyle";
import { Link } from "react-router-dom";

const PlaylistItemWrapper = styled.div`

`;

const StyledLink = styled(Link)`
  margin: 2px 0;

  ${AnkerStyle};

  ${style({
    S: `width: 98vw`,
    M: `width: 90vw`,
    L: `width: 90vw`,
    XL: `width: 800px`
  })};
`;

const StyledThumbnail = styled.div`
  ${style({
    S: `margin-right: 8px`,
    M: `margin-right: 12px`,
    L: `margin-right: 17px`,
    XL: `margin-right: 20px`
  })};
`;

export default class PlaylistItem extends Component {
  render() {
    return (
      <PlaylistItemWrapper>
        <StyledThumbnail>
          <StyledLink to={"/entries/" + this.props.entry.id}>
            <Thumbnail
              src={this.props.entry.thumbnail_url}
              alt={this.props.entry.title}
              height="270px"
            />
          </StyledLink>
        </StyledThumbnail>
      </PlaylistItemWrapper>
    );
  }
}
