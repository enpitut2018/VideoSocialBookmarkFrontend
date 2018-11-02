import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import UserBookmarkItem from "../molecules/UserBookmarkItem";
import { connect } from "react-redux";
import { getUserBookmarks } from "../../actions/UserActions";
import LoadingIcon from "../atoms/LoadingIcon";

export class UserBookmarks extends Component {
  componentWillMount() {
    this.props.getUserBookmarks(this.props.userId);
  }

  render() {
    return (
      <>
        {this.props.hasLoaded ? (
          <>
            <Wrapper dir="column" css="padding-bottom: 20px;">
              {this.props.bookmarks &&
                this.props.bookmarks.map(bookmark => (
                  <UserBookmarkItem bookmark={bookmark} key={bookmark.id} />
                ))}
            </Wrapper>
          </>
        ) : (
          <LoadingIcon />
        )}
      </>
    );
  }
}

export default connect(
  store => ({
    hasLoaded: store.user.hasBookmarkLoaded,
    bookmarks: store.user.bookmarks
  }),
  { getUserBookmarks }
)(UserBookmarks);
