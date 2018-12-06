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
  flex-direction: column;
  flex-wrap: wrap;
`;

class PlaylistWrapper extends React.Component {
  componentWillMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  render() {
    return (
      <>
        {this.props.playlist === undefined ? (
          <LoadingIcon />
        ) : (
          this.props.playlist !== null && (
            <Wrapper dir="column" css="margin-left: 2rem;">
              <Text level="L" margin="10px 0 13px 0">
                {this.props.playlist.name}
              </Text>
              <StyledPlaylistWrapper>
                {this.props.playlist.playlist_items.map((item, index) => (
                  <PlaylistItem
                    entry={item.entry}
                    playlistId={this.props.playlist.id}
                    order={
                      item.entry.id === this.props.entryId
                        ? undefined
                        : index + 1
                    }
                    key={item.id}
                  />
                ))}
              </StyledPlaylistWrapper>
            </Wrapper>
          )
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
