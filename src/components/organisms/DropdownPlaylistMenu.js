import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import Text from "../atoms/Text";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import AddPlaylistButton from "../molecules/AddPlaylistButton";
import { component } from "../mediaQuery";
import PlaylistAddIcon from "../../assets/images/material-icon/baseline-playlist_add-24px.svg";
import CheckBox from "../atoms/CheckBox";

const ButtonWrapper = styled.div`
  cursor: pointer;
`;

const IconWrapper = styled.div`
  height: 24px;
  margin: 2px 22px;
`;

export default class DropdownPlaylistMenu extends Component {
  state = {
    playlists: [
      {
        id: 0,
        name: "音楽系",
        entries: [
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 0
          }
        ]
      },
      {
        id: 1,
        name: "ちょっと気になる",
        entries: [
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 0
          }
        ]
      }
    ]
  };

  addPlaylistButton = () =>
    component({
      XL: <AddPlaylistButton size="M" />,
      L: <AddPlaylistButton size="M" />,
      M: <AddPlaylistButton size="M" />,
      S: <AddPlaylistButton size="M" />
    });

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
        {this.state.playlists.map(playlist => (
          <DropdownMenuItem width="280px" key={playlist.id}>
            <IconWrapper>
              <CheckBox />
            </IconWrapper>
            <Text margin="0">{playlist.name}</Text>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem width="280px">
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
