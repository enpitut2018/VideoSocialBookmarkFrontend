import React, { Component } from "react";
import styled from "styled-components";
import Thumbnail from "../atoms/Thumbnail";
import AnkerStyle from "../atoms/AnkerStyle";
import { Link } from "react-router-dom";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";

const PlaylistItemWrapper = styled.div`
  margin-bottom: 1.1rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin: 4px 0;

  ${AnkerStyle};
`;

const titleStyle = `
  width: 160px;
  margin: 0;
  margin-left: 0.5rem;
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
  -webkit-line-clamp: 3;
  -moz-line-clamp: 3;
  -o-line-clamp: 3;
  -ms-line-clamp: 3;
`;

export default class PlaylistItem extends Component {
  render() {
    return (
      <PlaylistItemWrapper>
        <Wrapper>
          {this.props.order === undefined ? (
            <Text
              css={`
                margin-left: 0.1rem;
                margin-right: 0.6rem;
                width: 1rem;
              `}
            >
              ▶
            </Text>
          ) : (
            <Text
              css={`
                margin-left: 0.1rem;
                margin-right: 0.6rem;
                width: 1rem;
              `}
            >
              {this.props.order}
            </Text>
          )}
          <Wrapper>
            <StyledLink
              to={`/entries/${this.props.entry.id}?list=${
                this.props.playlistId
              }`}
            >
              <Wrapper
                css={`
                  width: 120px;
                  height: 80px;
                  background: #000;
                `}
              >
                <Thumbnail
                  provider={this.props.entry.provider}
                  src={this.props.entry.thumbnail_url}
                  alt={this.props.entry.title}
                  width="120px"
                />
              </Wrapper>
              <Text css={titleStyle}>{this.props.entry.title}</Text>
            </StyledLink>
          </Wrapper>
        </Wrapper>
      </PlaylistItemWrapper>
    );
  }
}
