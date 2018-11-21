import * as React from "react";
import { connect } from "react-redux";
import { getPlaylist } from "../../actions/PlaylistActions";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import LoadingIcon from "../atoms/LoadingIcon";
import PlaylistItem from "../molecules/PlaylistItem";
import styled from "styled-components";

const StyledPlaylistWrapper = styled(Wrapper)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

class PlaylistWrapper extends React.Component {
  componentWillMount() {
    this.props.getPlaylist(this.props.playlist_id);
  }

  render() {
    return (
      <>
      {this.props.playlist !== undefined && this.props.playlist.length !== 0 ? (
        <Wrapper dir="column">
          <Text level="L" margin="10px 0 13px 0">
            { this.props.playlist.title }
          </Text>
          <StyledPlaylistWrapper>
            {this.props.playlist.playlist_items.map(item => (
              <PlaylistItem entry={item.entry} key={item.id} />
            ))}
          </StyledPlaylistWrapper>
        </Wrapper>
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
    playlist: store.playlists.playlist,
    error: store.playlists.error
  }),
  { getPlaylist }
)(PlaylistWrapper);
