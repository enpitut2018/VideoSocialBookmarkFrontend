import React, { Component } from "react";
import { connect } from "react-redux";
import EntryTemplate from "../templates/Entry";
import { Helmet } from "react-helmet";
import { getEntry } from "../../actions/EntryActions";

class Entry extends Component {
  componentWillMount() {
    this.props.dispatch(getEntry(this.props.match.params.id));
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            Video Social Bookmark
            {this.props.hasLoaded && " | " + this.props.entry.title}
          </title>
          {this.props.hasLoaded && (
            <>
              <meta name="twitter:card" content="summary_large_image" />
              <meta property="og:url" content={this.props.entry.url} />
              <meta property="og:title" content={this.props.title} />
              <meta property="og:description" content={this.props.title} />
              <meta property="og:image" content={this.props.thumbnail_url} />
            </>
          )}
        </Helmet>
        <EntryTemplate
          hasLoaded={this.props.hasLoaded}
          entry={this.props.entry}
          isSignedIn={this.props.isSignedIn}
        />
      </>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.entries.hasLoaded,
  entry: store.entries.entry,
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Entry);
