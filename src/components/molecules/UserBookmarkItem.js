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

  margin: 3px 0;

  ${AnkerStyle};

  ${style({
    S: `width: 95vw`,
    M: `width: 90vw`,
    L: `width: 90vw`,
    XL: `width: 800px`
  })};
`;

const StyledThumbnail = styled.div`
  ${style({
    S: `margin-right: 10px`,
    M: `margin-right: 13px`,
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
  width: 100%;
  margin-left: 24px;
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
                    <Wrapper>
                      <Text size="S" margin="0">
                        {this.props.bookmark.entry.num_of_bookmarked}
                      </Text>
                      <Text size="XS" margin="0 0 0 0.2rem">
                        ブックマーク
                      </Text>
                    </Wrapper>
                  </>
                ),
                L: (
                  <>
                    <Text size="M" margin="0" fontSize="14pt" css={titleStyle}>
                      {this.props.bookmark.entry.title}
                    </Text>
                    <Wrapper>
                      <Text size="S" margin="0">
                        {this.props.bookmark.entry.num_of_bookmarked}
                      </Text>
                      <Text size="XS" margin="0 0 0 0.2rem">
                        ブックマーク
                      </Text>
                    </Wrapper>
                  </>
                ),
                M: (
                  <>
                    <Text size="M" margin="0" css={titleStyle}>
                      {this.props.bookmark.entry.title}
                    </Text>
                    <Wrapper>
                      <Text size="S" margin="0">
                        {this.props.bookmark.entry.num_of_bookmarked}
                      </Text>
                      <Text size="XS" margin="0 0 0 0.2rem">
                        ブックマーク
                      </Text>
                    </Wrapper>
                  </>
                ),
                S: (
                  <>
                    <Text size="M" margin="0" css={titleStyle}>
                      {this.props.bookmark.entry.title}
                    </Text>
                    <Wrapper css="width: calc(95vw - 130px); overflow: hidden;">
                      <Text size="S" margin="0">
                        {this.props.bookmark.entry.num_of_bookmarked}
                      </Text>
                      <Text
                        level="XS"
                        margin="0 0 0 0.2rem"
                        width="calc(95vw - 130px - 1.2rem)"
                        css="overflow: hidden;"
                      >
                        ブックマーク
                      </Text>
                    </Wrapper>
                  </>
                )
              })}
            </StyledWrapper>
          </Wrapper>
        </StyledLink>

        {this.props.bookmark.comment && (
          <StyledWrapper>
            <StyledComment>{this.props.bookmark.comment}</StyledComment>
          </StyledWrapper>
        )}
      </>
    );
  }
}
