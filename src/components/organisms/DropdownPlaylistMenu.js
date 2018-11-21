import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Dropdown from "./Dropdown";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import Text from "../atoms/Text";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import AddPlaylistButton from "../molecules/AddPlaylistButton";
import { component } from "../mediaQuery";
import PlaylistAddIcon from "../../assets/images/material-icon/baseline-playlist_add-24px.svg";
import DropdownPlaylistMenuItem from "../molecules/DropdownPlaylistMenuItem";
import {
  getCurrentUserPlaylists,
  postEntryToPlaylist,
  removeEntryFromPlaylist,
  postPlaylist
} from "../../actions/PlaylistActions";

const ButtonWrapper = styled.div`
  cursor: pointer;
`;

const IconWrapper = styled.div`
  height: 24px;
  margin: 2px 18px;
`;

class DropdownPlaylistMenu extends Component {
  state = {
    enabledList: []
  };

  componentWillMount() {
    this.props.dispatch(getCurrentUserPlaylists());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state === "loaded" && "playlists" in nextProps) {
      this.setState({
        enabledList: nextProps.playlists.map(playlist =>
          playlist.playlist_items.some(
            playlistItem => playlistItem.entry_id === this.props.entryId
          )
        )
      });
    }
  }

  addPlaylistButton = () =>
    component({
      XL: <AddPlaylistButton size="M" />,
      L: <AddPlaylistButton size="M" />,
      M: <AddPlaylistButton size="M" />,
      S: <AddPlaylistButton size="M" />
    });

  handleClick = i => {
    if (this.state.enabledList[i]) {
      this.props.dispatch(
        removeEntryFromPlaylist(this.props.playlists[i].id, this.props.entryId)
      );
    } else {
      const lastItem = this.props.playlists[i].playlist_items.find(
        item => item.next_id === null
      );
      this.props.dispatch(
        postEntryToPlaylist(
          this.props.playlists[i].id,
          this.props.entryId,
          null,
          lastItem ? lastItem.id : null
        )
      );
    }
    this.setState(prev => {
      prev.enabledList[i] = !prev.enabledList[i];
      return {
        enabledList: prev.enabledList
      };
    });
  };

  render() {
    return (
      <Dropdown
        renderHeader={onClick => (
          <ButtonWrapper onClick={onClick}>
            <this.addPlaylistButton />
          </ButtonWrapper>
        )}
        css="margin-right: 5px;"
      >
        {this.props.state === "loaded" &&
          this.props.playlists &&
          this.props.playlists.map((playlist, i) => (
            <DropdownPlaylistMenuItem
              key={playlist.id}
              playlist={playlist}
              handleClick={() => this.handleClick(i)}
              enabled={this.state.enabledList[i]}
            />
          ))}
        <DropdownMenuItem
          width="300px"
          onClick={() => {
            this.props.dispatch(postPlaylist("プレイリスト", false));
          }}
        >
          <IconWrapper>
            <PlaylistAddIcon
              fill={palette[colors.organisms.Header.Icon.Fill]}
            />
          </IconWrapper>
          <Text margin="0">プレイリストを新規作成</Text>
        </DropdownMenuItem>
      </Dropdown>
    );
  }
}

export default connect(store => ({
  state: store.playlists.state,
  playlists: store.playlists.playlists
}))(DropdownPlaylistMenu);
