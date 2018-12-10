import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AnkerStyle from "../atoms/AnkerStyle";
import { style, component } from "../mediaQuery";
import Thumbnail from "../atoms/Thumbnail";

const StyledLink = styled(Link)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin: 4px 0;

  ${AnkerStyle};

  ${style({
    S: `width: 98vw`,
    M: `width: 90vw`,
    L: `width: 90vw`,
    XL: `width: 800px`
  })};
`;

const StyledThumbnail = styled.div`
  width: 160px;
  background-color: black;
  height: 90px;
  display: flex;
  justify-content: center;
  ${style({
    S: `margin-right: 8px`,
    M: `margin-right: 12px`,
    L: `margin-right: 17px`,
    XL: `margin-right: 20px`
  })};
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 90px;
  width: 640px;
`;

const titleStyle = `
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

const StyledComment = styled(Text)`
  color: gray;
`;

export default class UserBookmarkItem extends Component {
  render() {
    return (
      <>
        <StyledLink to={"/entries/" + this.props.bookmark.entry.id}>
          <Wrapper>
            <StyledThumbnail>
              <Thumbnail
                provider={this.props.bookmark.entry.provider}
                src={this.props.bookmark.entry.thumbnail_url}
                alt={this.props.bookmark.entry.title}
                height="90px"
              />
            </StyledThumbnail>
            <StyledWrapper type="right" dir="column">
              {component({
                XL: (
                  <>
                    <Text size="L" margin="0" css={titleStyle}>
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                ),
                L: (
                  <>
                    <Text size="M" margin="0" fontSize="14pt" css={titleStyle}>
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                ),
                M: (
                  <>
                    <Text size="M" margin="0" css={titleStyle}>
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                ),
                S: (
                  <>
                    <Text size="M" margin="0" css={titleStyle}>
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                )
              })}
              {this.props.bookmark.users_comment && (
                <StyledComment>
                  {this.props.bookmark.users_comment.content}
                </StyledComment>
              )}
            </StyledWrapper>
          </Wrapper>
        </StyledLink>
      </>
    );
  }
}
