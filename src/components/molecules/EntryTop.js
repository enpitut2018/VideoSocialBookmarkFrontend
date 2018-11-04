import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import Text from "../atoms/Text";
import { component } from "../mediaQuery";
import { style } from "../mediaQuery";
import Star from "./Star";
import config from "../../config";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";

const StyledA = styled.a`
  display: flex;
  flex-direction: column;

  ${style({
    XL: `width: 852px`,
    L: `width: 90vw`,
    M: `width: 90vw`,
    S: `width: 95vw`
  })};
  ${AnkerStyle};
`;

const StyledThumbnail = styled.div`
  margin: 10px 0;
  width: 100%;
`;

export default class EntryTop extends Component {
  render() {
    const entryUrl = `${config.frontend_base_url}/entries/${
      this.props.entry.id
    }`;
    return (
      <Wrapper dir="column">
        <StyledA
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.entry.url}
        >
          <Wrapper dir="column">
            {component({
              XL: (
                <Text level="XL" margin="41px 0 15px 0">
                  {this.props.entry.title}
                </Text>
              ),
              L: (
                <Text level="XL" margin="38px 0 15px 0">
                  {this.props.entry.title}
                </Text>
              ),
              M: (
                <Text level="L" margin="35px 0 13px 0">
                  {this.props.entry.title}
                </Text>
              ),
              S: (
                <Text level="L" margin="30px 0 10px 0">
                  {this.props.entry.title}
                </Text>
              )
            })}
            <StyledThumbnail>
              <Thumbnail
                src={this.props.entry.thumbnail_url}
                alt={this.props.entry.title}
                width="100%"
              />
            </StyledThumbnail>
          </Wrapper>
        </StyledA>

        <Wrapper
          css={`
            margin: 2.1rem 1rem;
            ${style({
        XL: `width: 852px`,
        L: `width: 90vw`,
        M: `width: 90vw`,
        S: `width: 95vw`
      })};
            justify-content: space-around;
          `}
        >
          <TwitterShareButton
            url={entryUrl}
            title={this.props.entry.title}
            style={{ cursor: "pointer" }}
          >
            <TwitterIcon size={48} round />
          </TwitterShareButton>
          <FacebookShareButton
            url={entryUrl}
            title={this.props.entry.title}
            style={{ cursor: "pointer" }}
          >
            <FacebookIcon size={48} round />
          </FacebookShareButton>
          <RedditShareButton
            url={entryUrl}
            title={this.props.entry.title}
            style={{ cursor: "pointer" }}
          >
            <RedditIcon size={48} round />
          </RedditShareButton>
          {this.props.isSignedIn && <Star entryId={this.props.entry.id} />}
        </Wrapper>

        <Text level="L" margin="15px auto 15px auto">
          {this.props.entry.num_of_bookmarked + " "}
          Bookmarks
        </Text>
      </Wrapper>
    );
  }
}
