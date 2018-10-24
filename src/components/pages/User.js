import React, { Component } from "react";
import { connect } from "react-redux";
import UserTemplate from "../templates/User";

import { getUserBookmarks } from "../../actions/UserActions";

class Entry extends Component {
  componentWillMount() {
    this.props.getUserBookmarks(this.props.match.params.id);
  }

  render() {
    return (
      <UserTemplate
        hasLoaded={this.props.hasLoaded}
        bookmarks={this.props.bookmarks}
      />
    );
  }
}

export default connect(store => ({
  hasLoaded: store.user.hasBookmarkLoaded,
  bookmarks: store.user.bookmarks
  }),
  { getUserBookmarks }
)(Entry);
