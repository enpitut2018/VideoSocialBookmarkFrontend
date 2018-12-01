import React, { Component } from "react";
import { connect } from "react-redux";
import EntryTemplate from "../templates/Entry";
import { getEntry } from "../../actions/EntryActions";
import { getComments } from "../../actions/CommentActions";

class Entry extends Component {
  componentWillMount() {
    this.props.dispatch(getEntry(this.props.match.params.id));
  }

  handlePageChange = (page) => {
    this.props.dispatch(getComments(this.props.match.params.id, page));
  };

  render() {
    return (
      <>
        <EntryTemplate
          id={this.props.match.params.id}
          hasLoaded={this.props.hasLoaded && this.props.entry !== undefined}
          entry={this.props.entry}
          isSignedIn={this.props.isSignedIn}
          handlePageChange={this.handlePageChange}
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
