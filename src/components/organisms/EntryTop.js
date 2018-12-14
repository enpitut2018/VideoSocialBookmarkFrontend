import React, { Component } from "react";
import { connect } from "react-redux";
import Wrapper from "../atoms/Wrapper";
import styled from "styled-components";
import AnkerStyle from "../atoms/AnkerStyle";
import Embed from "../molecules/Embed";
import Text from "../atoms/Text";
import { responsive } from "../mediaQuery";
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
import PropTypes from "prop-types";

const StyledVideoLink = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${AnkerStyle};
`;

const EmbedWrapper = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const EntryTopWrapper = styled(Wrapper)`
  ${style({
    XL: `width: 852px`,
    L: `width: 90vw`,
    M: `width: 90vw`,
    S: `width: 95vw`
  })};
  margin: auto;
`;

const VideoWrapper = styled(Wrapper)``;

const ShareButtonWrapper = styled(Wrapper)`
  margin: 2.1rem 1rem;
  width: 100%;
  justify-content: space-between;
`;

const BookmarkWrapper = styled(Wrapper)`
  ${style({
    S: `flex-direction: column; margin-bottom: 1.6rem;`,
    M: ` margin-bottom: 1.8rem;`,
    L: ``,
    XL: ``
  })};
`;

const EntryDetailWrapper = styled(Wrapper)`
  margin: 1rem;
  width: 100%;
  justify-content: space-around;
  ${style({
    S: `flex-direction: column`,
    M: `flex-direction: column`,
    L: ``,
    XL: ``
  })};
`;

const TitleStyledText = props => (
  responsive(R => (
    <Text
      size={{
        XL:"XL",
        L:"XL",
        M:"L",
        S:"L"
      }[R]}
      margin={{
        XL: "41px 0 15px 0",
        L: "38px 0 15px 0",
        M: "35px 0 13px 0",
        S: "30px 0 10px 0"
      }[R]}
    >
      {props.children}
    </Text>
  ))
);

const BookmarkLabelStyledText = props => (
  responsive(R=>(
    <Text
      size="M"
      margin={{
        XL: "1rem 2rem 1rem 1rem",
        L: "1rem",
        M: "1rem",
        S: "0.5rem"
      }[R]}
    >
      {props.children}
    </Text>
  ))
);

class EntryTop extends Component {
  bookmarkButton = () => (
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

  addPlaylistButton = () =>
    <DropdownPlaylistMenu entryId={this.props.entry.id} />

  render() {
    const entryUrl = `${config.frontend_base_url}/entries/${
      this.props.entry.id
    }`;

    return (
      <EntryTopWrapper dir="column">
        <StyledVideoLink
          target="_blank"
          rel="noopener noreferrer"
          href={this.props.entry.url}
        >
          <VideoWrapper dir="column">
            <TitleStyledText>
              {this.props.entry.title}
            </TitleStyledText>
            <EmbedWrapper>
              <Embed
                provider={this.props.entry.provider}
                video_id={this.props.entry.video_id}
                thumbnail_url={this.props.entry.thumbnail_url}
                alt={this.props.entry.title}
                width="100%"
                entry={this.props.entry}
              />
            </EmbedWrapper>
          </VideoWrapper>
        </StyledVideoLink>

        <ShareButtonWrapper>
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
        </ShareButtonWrapper>

        <EntryDetailWrapper>
          <BookmarkWrapper>
            <BookmarkLabelStyledText>
              {`${this.props.entry.num_of_bookmarked} ブックマーク`}
            </BookmarkLabelStyledText>
            {this.props.isSignedIn && <this.bookmarkButton />}
          </BookmarkWrapper>
          {this.props.isSignedIn && <this.addPlaylistButton />}
        </EntryDetailWrapper>
      </EntryTopWrapper>
    );
  }
}

export default connect(store => ({
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(EntryTop);

EntryTop.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  entry: PropTypes.any.isRequired
};
