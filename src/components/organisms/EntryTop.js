import React, { Component } from "react";
import { connect } from "react-redux";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import Embed from "../atoms/Embed";
import Text from "../atoms/Text";
import { component } from "../mediaQuery";
import { style } from "../mediaQuery";
import Star from "../molecules/Star";
import config from "../../config";
import BookmarkButton from "../molecules/BookmarkButton";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from "react-share";
import { postBookmark, deleteBookmark } from "../../actions/BookmarkActions";
import { setEntryBookmarked } from "../../actions/EntryActions";
import DropdownPlaylistMenu from "./DropdownPlaylistMenu";

const StyledA = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${AnkerStyle};
`;

const StyledEmbed = styled.div`
  margin: 10px 0;
  width: 100%;
`;

class EntryTop extends Component {
  bookmarkButton = () =>
    this.props.isSignedIn &&
    component({
      XL: (
        <BookmarkButton
          bookmarked={this.props.entry["bookmarked?"]}
          handleClick={() => {
            this.props.dispatch(
              this.props.entry["bookmarked?"]
                ? deleteBookmark(this.props.entry.id)
                : postBookmark(this.props.entry.id)
            );
            this.props.dispatch(
              setEntryBookmarked(!this.props.entry["bookmarked?"])
            );
          }}
          size="M"
        />
      ),
      L: (
        <BookmarkButton
          bookmarked={this.props.entry["bookmarked?"]}
          handleClick={() => {
            this.props.dispatch(
              this.props.entry["bookmarked?"]
                ? deleteBookmark(this.props.entry.id)
                : postBookmark(this.props.entry.id)
            );
            this.props.dispatch(
              setEntryBookmarked(!this.props.entry["bookmarked?"])
            );
          }}
          size="M"
        />
      ),
      M: (
        <BookmarkButton
          bookmarked={this.props.entry["bookmarked?"]}
          handleClick={() => {
            this.props.dispatch(
              this.props.entry["bookmarked?"]
                ? deleteBookmark(this.props.entry.id)
                : postBookmark(this.props.entry.id)
            );
            this.props.dispatch(
              setEntryBookmarked(!this.props.entry["bookmarked?"])
            );
          }}
          size="M"
        />
      ),
      S: (
        <BookmarkButton
          bookmarked={this.props.entry["bookmarked?"]}
          handleClick={() => {
            this.props.dispatch(
              this.props.entry["bookmarked?"]
                ? deleteBookmark(this.props.entry.id)
                : postBookmark(this.props.entry.id)
            );
            this.props.dispatch(
              setEntryBookmarked(!this.props.entry["bookmarked?"])
            );
          }}
          size="M"
        />
      )
    });

  title = () =>
    component({
      XL: (
        <Text size="XL" margin="41px 0 15px 0">
          {this.props.entry.title}
        </Text>
      ),
      L: (
        <Text size="XL" margin="38px 0 15px 0">
          {this.props.entry.title}
        </Text>
      ),
      M: (
        <Text size="L" margin="35px 0 13px 0">
          {this.props.entry.title}
        </Text>
      ),
      S: (
        <Text size="L" margin="30px 0 10px 0">
          {this.props.entry.title}
        </Text>
      )
    });

  bookmarkLabel = () =>
    component({
      XL: (
        <Text size="M" margin="1rem 2rem 1rem 1rem">
          {this.props.entry.num_of_bookmarked + " "}
          ブックマーク
        </Text>
      ),
      L: (
        <Text size="M" margin="1rem">
          {this.props.entry.num_of_bookmarked + " "}
          ブックマーク
        </Text>
      ),
      M: (
        <Text size="M" margin="1rem">
          {this.props.entry.num_of_bookmarked + " "}
          ブックマーク
        </Text>
      ),
      S: (
        <Text size="M" margin="0.5rem">
          {this.props.entry.num_of_bookmarked + " "}
          ブックマーク
        </Text>
      )
    });

  addPlaylistButton = () =>
    this.props.isSignedIn && (
      <DropdownPlaylistMenu entryId={this.props.entry.id} />
    );

  render() {
    const entryUrl =
      `${config.frontend_base_url}/entries/${this.props.entry.id}`;
    return (
      <Wrapper
        dir="column"
        css={`
          ${style({
        XL: `width: 852px`,
        L: `width: 90vw`,
        M: `width: 90vw`,
        S: `width: 95vw`
      })};
          margin: auto;
        `}
      >
        <StyledA
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.entry.url}
        >
          <Wrapper dir="column">
            <this.title />
            <StyledEmbed>
              <Embed
                provider={this.props.entry.provider}
                video_id={this.props.entry.video_id}
                thumbnail_url={this.props.entry.thumbnail_url}
                alt={this.props.entry.title}
                width="100%"
              />
            </StyledEmbed>
          </Wrapper>
        </StyledA>

        <Wrapper
          css={`
            margin: 2.1rem 1rem;
            width: 100%;
            justify-content: space-between;
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
            quote={this.props.entry.title}
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
          {this.props.isSignedIn && <Star entry={this.props.entry} />}
        </Wrapper>

        <Wrapper
          css={`
            margin: 1rem;
            width: 100%;
            justify-content: space-around;
            ${style({
        S: `flex-direction: column`,
        M: `flex-direction: column`,
        L: ``,
        XL: ``
      })};
          `}
        >
          <Wrapper
            css={`
              ${style({
        S: `flex-direction: column; margin-bottom: 1.6rem;`,
        M: ` margin-bottom: 1.8rem;`,
        L: ``,
        XL: ``
      })};
            `}
          >
            <this.bookmarkLabel />
            <this.bookmarkButton />
          </Wrapper>
          <this.addPlaylistButton />
        </Wrapper>
      </Wrapper>
    );
  }
}

export default connect(store => ({
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(EntryTop);
