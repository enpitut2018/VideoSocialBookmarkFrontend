import { parse } from "query-string";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect, ResolveThunks } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators, Dispatch } from "redux";
import { getComments } from "../../actions/CommentActions";
import { getEntry } from "../../actions/EntryActions";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";
import config from "../../config";
import EntryTemplate from "../templates/Entry";

type ReturnType<T> = T extends ((...param: any[]) => infer R) ? R : never;

interface ReduxStore {
  entries: {
    readonly hasLoaded: boolean;
    readonly entry: any;
  };
  reduxTokenAuth: {
    currentUser: {
      readonly isSignedIn: boolean;
    };
  };
  playlists: {
    readonly playlist: any;
  };
}

const mapStateToProps = (store: ReduxStore) => ({
  hasLoaded: store.entries.hasLoaded,
  entry: store.entries.entry,
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn,
  playlist: store.playlists.playlist,
});
type StateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = {
  getEntry,
  getComments,
};
// type DispatchProps = ResolveThunks<typeof mapDispatchToProps>;
interface DispatchProps {
  getEntry: (id: string) => void;
  getComments: (entryId: string, page?: number) => void;
}

interface RouteParamaters {
  id: string;
}

interface OwnProps extends RouteComponentProps<RouteParamaters> {}

type Props = StateProps & DispatchProps & OwnProps;

interface State {}

class Entry extends Component<Props, State> {
  public componentWillMount() {
    this.props.getEntry(this.props.match.params.id);
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.location !== this.props.location) {
      this.props.getEntry(nextProps.match.params.id);
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

export default connect<StateProps, DispatchProps, OwnProps, ReduxStore>(
  mapStateToProps,
  mapDispatchToProps
)(Entry);
