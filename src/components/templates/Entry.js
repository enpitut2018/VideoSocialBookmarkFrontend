import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import EntryTop from "../organisms/EntryTop";
import EntryItem from "../molecules/EntryItem";
import CommentSubmitForm from "../organisms/CommentSubmitForm";
import BasicPageWrapper from "../../BasicPageWrapper";
import Pagination from "../organisms/Pagination";
import PlaylistWrapper from "../organisms/PlaylistWrapper";

export default class Entry extends Component {
  render() {
    return (
      <BasicPageWrapper>
        {this.props.hasLoaded && (
          <Wrapper css="align-items: baseline;">
            <Wrapper dir="column">
              <EntryTop entry={this.props.entry} />
              {this.props.isSignedIn && (
                <CommentSubmitForm entryId={this.props.entry.id} />
              )}
              {this.props.entry.comments &&
                this.props.entry.comments.map(
                  comment =>
                    comment.content && (
                      <EntryItem comment={comment} key={comment.id} />
                    )
                )}
              {this.props.entry && (
                <Pagination
                  pageCount={this.props.entry.comments_page_count}
                  onPageChange={this.props.handlePageChange}
                />
              )}
            </Wrapper>
            <PlaylistWrapper
              playlistId={this.props.playlistId}
              entryId={this.props.entry.id}
            />
          </Wrapper>
        )}
      </BasicPageWrapper>
    );
  }
}
