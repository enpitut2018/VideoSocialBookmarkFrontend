import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import UserBookmarkItem from "../molecules/UserBookmarkItem";
import { connect } from "react-redux";
import { getUserBookmarks } from "../../actions/UserActions";
import LoadingIcon from "../atoms/LoadingIcon";
import Pagination from "./Pagination";

export class UserBookmarks extends Component {
  componentWillMount() {
    this.props.getUserBookmarks(this.props.user_id);
  }

  handlePageChange = (page) => {
    this.props.getUserBookmarks(this.props.user_id, page);
  };

  render() {
    return (
      <Wrapper dir="column" css="padding-bottom: 20px;">
        {this.props.hasLoaded ? (
          <>
            {this.props.bookmarks &&
              this.props.bookmarks.data.map(bookmark => (
                <UserBookmarkItem bookmark={bookmark} key={bookmark.id} />
              ))
            }
          </>
        ) : (
          <LoadingIcon />
        )}
        {this.props.bookmarks &&
          <Pagination
            pageCount={this.props.bookmarks.page_count}
            onPageChange={this.handlePageChange}
          />
        }
      </Wrapper>
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
