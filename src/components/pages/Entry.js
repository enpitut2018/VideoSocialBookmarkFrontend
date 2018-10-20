import React, { Component } from "react";
import { connect } from "react-redux";
import EntryTemplate from "../templates/Entry";

import { getEntry } from "../../actions/EntryActions";

class Entry extends Component {
  componentWillMount() {
    this.props.dispatch(getEntry(this.props.match.params.id));
  }

  render() {
    return (
      <EntryTemplate
        hasLoaded={this.props.hasLoaded}
        entry={this.props.entry}
      />
    );
  }
}

export default connect(store => ({
  hasLoaded: store.entrys.hasLoaded,
  entry: store.entrys.entry
}))(Entry);
