import React, { Component } from "react";
import { connect } from "react-redux";
import EntryTemplate from "../templates/Entry";
import { getEntry } from "../../actions/EntryActions";
import { getComments } from "../../actions/CommentActions";
import config from "../../config";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";
import { parse } from "query-string";
import { Helmet } from "react-helmet";

class Entry extends Component {
  componentWillMount() {
    this.props.dispatch(getEntry(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.dispatch(getEntry(nextProps.match.params.id));
    }
  }

  handlePageChange = page => {
    this.props.dispatch(getComments(this.props.match.params.id, page));
  };

  render() {
    const entryUrl = `${config.frontend_base_url}/entries/${
      this.props.match.params.id
    }`;
    const { list } = parse(this.props.location.search);
    return (
      <>
        <Helmet>
          <title>
            Video Social Bookmark
            {this.props.hasLoaded ? " | " + this.props.entry.title : ""}
          </title>
          <meta property="twitter:card" content="summary_large_image" />
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
        <EntryTemplate
          id={this.props.match.params.id}
          hasLoaded={this.props.hasLoaded && this.props.entry !== undefined}
          entry={this.props.entry}
          isSignedIn={this.props.isSignedIn}
          handlePageChange={this.handlePageChange}
          playlistId={list}
        />
      </>
    );
  }
}

export default connect((store, props) => ({
  hasLoaded: store.entries.hasLoaded,
  entry: store.entries.entries[props.match.params.id],
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Entry);
