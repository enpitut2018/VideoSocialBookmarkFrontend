import React, { Component } from "react";
import { connect } from "react-redux";
import ThreadTemplate from "../templates/Thread";

import { getThread } from "../../actions/ThreadActions";

class Thread extends Component {
  componentWillMount() {
    if (!this.props.hasLoaded) {
      this.props.dispatch(getThread(this.props.match.params.id));
    }
  }

  render() {
    return (
      <ThreadTemplate
        hasLoaded={this.props.hasLoaded}
        thread={this.props.thread}
      />
    );
  }
}

export default connect(store => ({
  hasLoaded: store.threads.hasLoaded,
  thread: store.threads.thread
}))(Thread);
