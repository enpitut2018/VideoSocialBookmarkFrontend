import React, { Component } from "react";
import styled from "styled-components";
import Thumbnail from "../atoms/Thumbnail";
import AnkerStyle from "../atoms/AnkerStyle";
import { Link } from "react-router-dom";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";

const PlaylistItemWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 2px 0;

  ${AnkerStyle};
`;

const StyledThumbnail = styled.div``;

const titleStyle = `
  width: 160px;
  margin: 0;
  overflow: hidden;
  white-space: normal;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  -o-box-orient: vertical;
  -ms-box-orient: vertical;
  display: -webkit-box;
  display: -moz-box;
  display: -o-box;
  display: -ms-box;
  -webkit-line-clamp: 2;
  -moz-line-clamp: 2;
  -o-line-clamp: 2;
  -ms-line-clamp: 2;
`;

export default class PlaylistItem extends Component {
  render() {
    return (
      <PlaylistItemWrapper>
        <Wrapper>
          {this.props.order === undefined ? (
            <Text>▶</Text>
          ) : (
            <Text>{this.props.order}</Text>
          )}
          <StyledThumbnail>
            <StyledLink
              to={`/entries/${this.props.entry.id}?list=${
                this.props.playlistId
              }`}
            >
              <Thumbnail
                provider={this.props.entry.provider}
                src={this.props.entry.thumbnail_url}
                alt={this.props.entry.title}
                height="90px"
              />
              <Text css={titleStyle}>{this.props.entry.title}</Text>
            </StyledLink>
          </StyledThumbnail>
        </Wrapper>
      </PlaylistItemWrapper>
    );
  }
}
