import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import EntryTop from "../organisms/EntryTop";
import EntryItem from "../molecules/EntryItem";
import CommentSubmitForm from "../organisms/CommentSubmitForm";
import BasicPageWrapper from "../../BasicPageWrapper";
import Pagination from "../organisms/Pagination";

export default class Entry extends Component {
  render() {
    return (
      <BasicPageWrapper>
        {this.props.hasLoaded && (
          <>
            <EntryTop
              entry={this.props.entry}
              playlistId={this.props.playlistId}
            />
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
    );
  }
}
