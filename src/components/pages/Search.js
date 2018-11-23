import { searchEntry } from "../../actions/SearchActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import SearchTemplate from "../templates/Search";

class Search extends Component {
  componentWillMount() {
    this.props.searchEntry(this.props.match.params.query);
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.query != newProps.match.params.query){
      this.props.searchEntry(newProps.match.params.query);
    }
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | {this.props.match.params.query}</title>
        </Helmet>
        <SearchTemplate
          keyword={this.props.match.params.query}
          error={this.props.error}
          hasLoaded={this.props.hasLoaded}
          entries={this.props.entries}
        />
      </>
    );
  }
}

export default connect(
  store => ({
    hasLoaded: store.search.hasLoaded,
    entries: store.search.entries,
    error: store.search.error
  }),
  { searchEntry }
)(Search);
