import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import Text from "../atoms/Text";
import { style, component } from "../mediaQuery";

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

export default class TrendItem extends Component {
  render() {
    return (
      <StyledLink to={"/entries/" + this.props.entry.id}>
        <Wrapper>
          <StyledThumbnail>
            <Thumbnail
              src={this.props.entry.thumbnail_url}
              alt={this.props.entry.title}
              height="90px"
            />
          </StyledThumbnail>
          <StyledWrapper type="right" dir="column">
            {component({
              XL: (
                <>
                  <Text level="L" margin="0" css={titleStyle}>
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text level="XS" margin="0 0 0 0.2rem">
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              ),
              L: (
                <>
                  <Text level="M" margin="0" fontSize="14pt" css={titleStyle}>
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text level="XS" margin="0 0 0 0.2rem">
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              ),
              M: (
                <>
                  <Text level="M" margin="0" css={titleStyle}>
                    {this.props.entry.title}
                  </Text>
                  <Wrapper>
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text level="XS" margin="0 0 0 0.2rem">
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              ),
              S: (
                <>
                  <Text
                    level="M"
                    margin="0"
                    css={titleStyle}
                    width="calc(95vw - 130px)"
                  >
                    {this.props.entry.title}
                  </Text>
                  <Wrapper css="width: calc(95vw - 130px); overflow: hidden;">
                    <Text level="S" margin="0">
                      {this.props.entry.num_of_bookmarked}
                    </Text>
                    <Text
                      level="XS"
                      margin="0 0 0 0.2rem"
                      width="calc(95vw - 130px - 1.2rem)"
                      css="overflow: hidden;"
                    >
                      Bookmarks
                    </Text>
                  </Wrapper>
                </>
              )
            })}
          </StyledWrapper>
        </Wrapper>
      </StyledLink>
    );
  }
}
