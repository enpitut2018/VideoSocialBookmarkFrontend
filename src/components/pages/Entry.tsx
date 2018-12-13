import { parse } from "query-string";
import * as React from "react";
import { Component } from "react";
import { Helmet } from "react-helmet";
import { getComments } from "../../actions/CommentActions";
import { getEntry } from "../../actions/EntryActions";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";
import config from "../../config";
import EmbedController from "../../controller/EmbedController";
import EntryTemplate from "../templates/Entry";

import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
type MyReduxState = any;
type MyReduxAction = any;
type EntryActionTypesgetEntry = any;
type CommentActionTypesgetComments = any;

export interface OwnProps {}

interface StateProps {
  hasLoaded: boolean;
  entry: any;
  isSignedIn: boolean;
  playlist: any;
}

interface DispatchProps {
  getEntry: EntryActionTypesgetEntry;
  getComments: CommentActionTypesgetComments;
}

interface RouteParamaters {
  id: string;
}

type Props = StateProps & DispatchProps & OwnProps & RouteComponentProps<RouteParamaters>;

interface State {}

class Entry extends Component<Props, State> {
  public embedController: EmbedController | null = null;

  public componentWillMount() {
    this.props.getEntry(this.props.match.params.id);
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.location !== this.props.location) {
      this.props.getEntry(nextProps.match.params.id);
    }
  }

  public setup = () => {
    const isPlaylistMode = this.props.location.search !== "";
    if (this.props.entry && isPlaylistMode) {
      this.embedController = new EmbedController(this.props.entry, this.props.playlist, this.props.history);
    }
  };

  public componentDidMount() {
    this.setup();
  }

  public componentDidUpdate() {
    this.setup();
  }

  public componentWillUnmount() {
    const isPlaylistMode = this.props.location.search !== "";
    if (this.props.entry && isPlaylistMode && this.embedController) {
      this.embedController.release();
    }
  }

  public handlePageChange = (page: number) => {
    this.props.getComments(this.props.match.params.id, page);
  };

  public render() {
    const entryUrl = `${config.frontend_base_url}/entries/${this.props.match.params.id}`;
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
          <meta property="og:title" content={this.props.hasLoaded ? this.props.entry.title : "Video Social Bookmark"} />
          <meta
            property="og:description"
            content={this.props.hasLoaded ? this.props.entry.title : "Video Social Bookmark"}
          />
          <meta property="og:image" content={this.props.hasLoaded ? this.props.entry.thumbnail_url : Placeholder} />
        </Helmet>
        <EntryTemplate
          hasLoaded={this.props.hasLoaded}
          entry={this.props.entry}
          isSignedIn={this.props.isSignedIn}
          handlePageChange={this.handlePageChange}
          playlistId={list}
        />
      </>
    );
  }
}

export default connect<StateProps, DispatchProps>(
  (state: MyReduxState) => ({
    hasLoaded: state.entries.hasLoaded,
    entry: state.entries.entry,
    isSignedIn: state.reduxTokenAuth.currentUser.isSignedIn,
    playlist: state.playlists.playlist,
  }),
  { getEntry, getComments }
)(Entry);
