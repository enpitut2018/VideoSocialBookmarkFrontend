import React, { Component } from "react";
import { connect } from "react-redux";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import Thumbnail from "../atoms/Thumbnail";
import Text from "../atoms/Text";
import { component } from "../mediaQuery";
import { style } from "../mediaQuery";
import Star from "./Star";
import config from "../../config";
import BookmarkButton from "./BookmarkButton";
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
import DropdownPlaylistMenu from "../organisms/DropdownPlaylistMenu";

const StyledA = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${AnkerStyle};
`;

const StyledThumbnail = styled.div`
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
                ? deleteBookmark(this.props.id)
                : postBookmark(this.props.id)
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
                ? deleteBookmark(this.props.id)
                : postBookmark(this.props.id)
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
                ? deleteBookmark(this.props.id)
                : postBookmark(this.props.id)
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
                ? deleteBookmark(this.props.id)
                : postBookmark(this.props.id)
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
      <DropdownPlaylistMenu
        playlists={[
          {
            id: 0,
            name: "音楽系",
            entries: [
              {
                id: 1
              },
              {
                id: 2
              },
              {
                id: 0
              }
            ]
          },
          {
            id: 1,
            name: "ちょっと気になる",
            entries: [
              {
                id: 1
              },
              {
                id: 2
              },
              {
                id: 0
              }
            ]
          }
        ]}
      />
    );

  render() {
    const entryUrl = `${config.frontend_base_url}/entries/${this.props.id}`;
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
          {this.props.isSignedIn && <Star entryId={this.props.entry.id} />}
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
  hasLoaded: store.entries.hasLoaded,
  entry: store.entries.entry,
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(EntryTop);
