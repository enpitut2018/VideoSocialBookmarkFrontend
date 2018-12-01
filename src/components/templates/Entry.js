import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import EntryTop from "../organisms/EntryTop";
import EntryItem from "../molecules/EntryItem";
import CommentSubmitForm from "../organisms/CommentSubmitForm";
import BasicPageWrapper from "../../BasicPageWrapper";
import Pagination from "../organisms/Pagination";
import { Helmet } from "react-helmet";
import config from "../../config";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";

export default class Entry extends Component {
  render() {
    const entryUrl = `${config.frontend_base_url}/entries/${
      this.props.id
    }`;
    return (
      <>
        <Helmet>
          <title>
      Video Social Bookmark
            {this.props.hasLoaded ? " | " + this.props.entry.title : ""}
          </title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:url" content={entryUrl} />
          <meta
            property="og:title"
            content={
              this.props.hasLoaded
                ? this.props.entry.title
                : "Video Social Bookmark"
            }
          />
          <meta
            property="og:description"
            content={
              this.props.hadLoaded
                ? this.props.entry.title
                : "Video Social Bookmark"
            }
          />
          <meta
            property="og:image"
            content={
              this.props.hasLoaded
                ? this.props.entry.thumbnail_url
                : Placeholder
            }
          />
        </Helmet>
        <BasicPageWrapper>
          {this.props.hasLoaded && (
            <>
              <EntryTop entry={this.props.entry} />
              <Wrapper dir="column">
                {this.props.isSignedIn && (
                  <CommentSubmitForm entryId={this.props.entry.id} />
                )}
                {this.props.entry && (
                  <Pagination
                    pageCount={this.props.entry.comments_page_count}
                    onPageChange={this.props.handlePageChange}
                  />
                )}
                {this.props.entry.comments &&
                  this.props.entry.comments.map(
                    comment =>
                      comment.content && (
                        <EntryItem comment={comment} key={comment.id} />
                      )
                  )}
              </Wrapper>
            </>
          )}
        </BasicPageWrapper>
      </>
    );
  }
}
