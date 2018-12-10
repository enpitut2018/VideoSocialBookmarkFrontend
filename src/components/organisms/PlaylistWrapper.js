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
import PlaylistPlayIcon from "../../assets/images/material-icon/baseline-playlist_play-24px.svg";
import SkipNextIcon from "../../assets/images/material-icon/baseline-skip_next-24px.svg";
import SkipPreviousIcon from "../../assets/images/material-icon/baseline-skip_previous-24px.svg";
import elevate from "../../theme/shadows";
import { withRouter } from "react-router-dom";

const StyledPlaylistWrapper = styled.div`
  padding: 1.2rem 1.2rem 0.2rem 1rem;
  max-height: 600px;
  overflow-y: auto;
`;

const StyledIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
    ${elevate(4)};
  }
`;

class PlaylistWrapper extends React.Component {
  componentWillMount() {
    this.props.getPlaylist(this.props.playlistId);
  }

  linkSort = arr => {
    if (arr === undefined || arr === null || arr.length === 0) {
      return;
    }
    let res = [];
    let item = arr[0];
    const isNextItem = elm => elm.id === item.next_id;
    while (item !== undefined && item.next_id !== undefined) {
      res.push(item);
      item = arr.find(isNextItem);
    }
    return res;
  };

  render() {
    const currentIndex =
      this.props.playlist !== undefined &&
      this.props.playlist !== null &&
      this.props.playlist.playlist_items.findIndex(
        item => item.entry.id === this.props.entryId
      );
    const currentItem =
      this.props.playlist !== undefined &&
      this.props.playlist !== null &&
      currentIndex !== -1 &&
      this.props.playlist.playlist_items[currentIndex];
    const nextItem =
      currentItem &&
      currentItem.next_id &&
      this.props.playlist.playlist_items.find(
        item => item.id === currentItem.next_id
      );
    const prevItem =
      currentItem &&
      currentItem.prev_id &&
      this.props.playlist.playlist_items.find(
        item => item.id === currentItem.prev_id
      );
    const linkSorted =
      this.props.playlist && this.linkSort(this.props.playlist.playlist_items);
    const currentOrder = linkSorted && linkSorted.findIndex(
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
                background-color: ${palette[
                colors.organisms.PlaylistWrapper.Background
              ]};
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
                  padding-top: 0.2rem;
                `}
              >
                <Wrapper>
                  <PlaylistPlayIcon
                    fill={palette[colors.organisms.Header.Icon.Fill]}
                    width="28px"
                    height="28px"
                  />
                  <Text size="L" margin="10px 0 13px 0">
                    {this.props.playlist.name}
                  </Text>
                </Wrapper>
                <Wrapper
                  css={`
                    margin: 0 0 14px 0;
                    justify-content: space-evenly;
                    width: 100%;
                  `}
                >
                  {prevItem && (
                    <StyledIconWrapper
                      onClick={() => {
                        this.props.history.push(
                          `/entries/${prevItem.entry_id}?list=${
                            this.props.playlist.id
                          }`
                        );
                      }}
                    >
                      <SkipPreviousIcon
                        fill={palette[colors.organisms.Header.Icon.Fill]}
                        width="28px"
                        height="28px"
                      />
                    </StyledIconWrapper>
                  )}
                  <Text size="M" margin="0 0 3px 0">
                    {currentOrder + 1 + " "}/
                    {" " + this.props.playlist.playlist_items.length}
                  </Text>
                  {nextItem && (
                    <StyledIconWrapper
                      onClick={() => {
                        this.props.history.push(
                          `/entries/${nextItem.entry_id}?list=${
                            this.props.playlist.id
                          }`
                        );
                      }}
                    >
                      <SkipNextIcon
                        fill={palette[colors.organisms.Header.Icon.Fill]}
                        width="28px"
                        height="28px"
                      />
                    </StyledIconWrapper>
                  )}
                </Wrapper>
              </Wrapper>
              <StyledPlaylistWrapper>
                {linkSorted.map((item, index) => (
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

export default withRouter(
  connect(
    store => ({
      state: store.playlists.state,
      playlist: store.playlists.playlist,
      error: store.playlists.error
    }),
    { getPlaylist }
  )(PlaylistWrapper)
);
