import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import { connect } from "react-redux";
import { getCurrentUserPlaylists } from "../../actions/PlaylistActions";
import LoadingIcon from "../atoms/LoadingIcon";
import PlaylistOverview from "./PlaylistOverview";

class Playlists extends Component {
  componentWillMount() {
    this.props.getCurrentUserPlaylists();
  }

  render() {
    return (
      <>
      {this.props.state === "loaded" ? (
          <>
            <Wrapper dir="column" css="padding-bottom: 20px;">
              {this.props.playlists.map((playlist) => (
                <PlaylistOverview playlist={playlist} key={playlist.id} />
              ))}
            </Wrapper>
          </>
      ) : (
        <LoadingIcon />
      )}
      </>
    );
  }
}

export default connect(
  store => ({
    state: store.playlists.state,
    playlists: store.playlists.playlists
  }),
  { getCurrentUserPlaylists }
)(Playlists);
