import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import UserBookmarkItem from "../molecules/UserBookmarkItem";
import { connect } from "react-redux";
import { getUserBookmarks } from "../../actions/UserActions";

export class UserBookmark extends Component {
  componentWillMount() {
    this.props.getUserBookmarks(this.props.user_id);
  }

  render() {
    return (
      <>
        {this.props.hasLoaded && (
          <>
            <Wrapper dir="column">
              {this.props.bookmarks &&
                this.props.bookmarks.map(bookmark => (
                  <UserBookmarkItem bookmark={bookmark} key={bookmark.id} />
                ))}
            </Wrapper>
          </>
        )}
      </>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.user.hasBookmarkLoaded,
  bookmarks: store.user.bookmarks
  }),
  { getUserBookmarks }
)(UserBookmark);