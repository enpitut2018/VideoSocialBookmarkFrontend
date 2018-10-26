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

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 90px;
  margin: 10px 0;

  ${AnkerStyle};
`;

const StyledThumbnail = styled.div`
  margin: 10px 20px 10px 0px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 90px;

  ${style({
    S: `max-width: 300px`,
    M: `max-width: 400px`,
    L: `max-width: 500px`,
    XL: `max-width: 800px`
  })};
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
                src={this.props.bookmark.entry.thumbnail_url}
                alt={this.props.bookmark.entry.title}
              />
            </StyledThumbnail>
            <StyledWrapper type="right" dir="column">
              {component({
                XL: (
                  <>
                    <Text level="L" margin="0">
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                ),
                L: (
                  <>
                    <Text level="M" margin="0" fontSize="14pt">
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                ),
                M: (
                  <>
                    <Text level="M" margin="0">
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                ),
                S: (
                  <>
                    <Text level="M" margin="0">
                      {this.props.bookmark.entry.title}
                    </Text>
                  </>
                )
              })}
            </StyledWrapper>
          </Wrapper>
        </StyledLink>
        <StyledWrapper>
          <StyledComment>{this.props.bookmark.comment}</StyledComment>
        </StyledWrapper>
      </>
    );
  }
}
