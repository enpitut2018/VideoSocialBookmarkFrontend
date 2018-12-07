import * as React from "react";
import { connect } from "react-redux";
import { getPlaylist } from "../../actions/PlaylistActions";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import LoadingIcon from "../atoms/LoadingIcon";
import PlaylistItem from "../molecules/PlaylistItem";
import styled from "styled-components";
import colors from "../../theme/colors";
import palette from "../../theme/palette";
import elevate from "../../theme/shadows";

const StyledPlaylistWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1.2rem 1.2rem 0.2rem 1rem;
`;

class PlaylistWrapper extends React.Component {
  componentWillMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  render() {
    const currentIndex =
      this.props.playlist !== undefined &&
      this.props.playlist !== null &&
      this.props.playlist.playlist_items.findIndex(
        item => item.entry.id === this.props.entryId
      );
    return (
      <>
        {this.props.playlist === undefined ? (
          <LoadingIcon />
        ) : (
          this.props.playlist !== null && (
            <Wrapper
              dir="column"
              css={`
                margin-left: 2rem;
                border-radius: 3px;
                border-top: 4px solid
                  ${palette[colors.organisms.PlaylistWrapper.Border]};
                background-color: ${palette[
                colors.organisms.PlaylistWrapper.Background
              ]};
                ${elevate(2)};
              `}
            >
              <Wrapper
                dir="column"
                css={`
                  width: 100%;
                  border-radius: 3px 3px 0 0;
                  background-color: ${palette[
                  colors.organisms.PlaylistWrapper.Top.Background
                ]};
                `}
              >
                <Text size="M" margin="10px 0 3px 0">
                  プレイリスト
                </Text>
                <Text size="L" margin="3px 0 3px 0">
                  {this.props.playlist.name}
                </Text>
                <Text size="M" margin="0 0 14px 0">
                  {currentIndex + 1 + " "}/
                  {" " + this.props.playlist.playlist_items.length}
                </Text>
              </Wrapper>
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
