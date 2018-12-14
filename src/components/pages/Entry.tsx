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
import EmbedController from "../../controller/EmbedController";
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
  popup: {
    readonly flip: number;
  };
}

const mapStateToProps = (store: ReduxStore) => ({
  hasLoaded: store.entries.hasLoaded,
  entry: store.entries.entry,
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn,
  playlist: store.playlists.playlist,
  flip: store.popup.flip,
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

interface State {
  isRefreshed: boolean;
}

class Entry extends Component<Props, State> {
  public embedController: EmbedController | null = null;
  constructor(props: Props) {
    super(props);
    this.state = {
      isRefreshed: false,
    };
  }

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
      this.embedController = new EmbedController(
        this.props.entry,
        this.props.playlist,
        this.props.history,
        this.props.flip
      );
    }
  };

  public componentDidMount() {
    this.setup();
  }

  public UNSAFE_componentWillReceiveProps(newProps: Props) {
    if (this.props.entry !== newProps.entry) {
      this.setState({ isRefreshed: true });
    }
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
    const hasLoaded = this.props.hasLoaded && this.state.isRefreshed;
    return (
      <>
        <Helmet>
          <title>
            Video Social Bookmark
            {hasLoaded ? " | " + this.props.entry.title : ""}
          </title>
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="og:url" content={entryUrl} />
          <meta property="og:title" content={hasLoaded ? this.props.entry.title : "Video Social Bookmark"} />
          <meta property="og:description" content={hasLoaded ? this.props.entry.title : "Video Social Bookmark"} />
          <meta property="og:image" content={hasLoaded ? this.props.entry.thumbnail_url : Placeholder} />
        </Helmet>
        <EntryTemplate
          hasLoaded={hasLoaded}
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
