import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import EntryTop from "../organisms/EntryTop";
import EntryItem from "../molecules/EntryItem";
import CommentSubmitForm from "../organisms/CommentSubmitForm";
import BasicPageWrapper from "../../BasicPageWrapper";
import Pagination from "../organisms/Pagination";
import PlaylistWrapper from "../organisms/PlaylistWrapper";
import styled from "styled-components";

const EntryPageWrapper = styled(Wrapper)`
  align-items: baseline;
`;

const EntryWrapper = styled(Wrapper)``;

export default class Entry extends Component {
  render() {
    return (
      <BasicPageWrapper>
        {this.props.hasLoaded && (
          <EntryPageWrapper>
            <EntryWrapper dir="column">
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
            </EntryWrapper>
            <PlaylistWrapper
              playlistId={this.props.playlistId}
              entryId={this.props.entry.id}
            />
          </EntryPageWrapper>
        )}
      </BasicPageWrapper>
    );
  }
}
