import React, { Component } from "react";
import Wrapper from "../atoms/Wrapper";
import { connect } from "react-redux";
import { getUserPlaylists } from "../../actions/PlaylistActions";
import LoadingIcon from "../atoms/LoadingIcon";
import PlaylistOverview from "./PlaylistOverview";
import styled from "styled-components";

const Border = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 500px;
  margin: 13px auto;
  cursor: default;
`;

class Playlists extends Component {
  componentWillMount() {
    this.props.getUserPlaylists(this.props.user_id);
  }

  render() {
    return (
      <>
      {this.props.playlists !== undefined &&
       this.props.playlists.length !== 0 ? (
          <>
            <Wrapper dir="column" css="padding-bottom: 20px;">
              {this.props.playlists.map((playlist, i) => (
                <>
                  <PlaylistOverview playlist={playlist} key={playlist.id} />
                  {i !== this.props.playlists.length - 1 && <Border />}
                </>
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
  { getUserPlaylists }
)(Playlists);
