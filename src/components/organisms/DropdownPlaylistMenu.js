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
  constructor(props) {
    super(props);
    this.state = {
      enabledList: Array(props.playlists.length).fill(false)
    };
  }

  addPlaylistButton = () =>
    component({
      XL: <AddPlaylistButton size="M" />,
      L: <AddPlaylistButton size="M" />,
      M: <AddPlaylistButton size="M" />,
      S: <AddPlaylistButton size="M" />
    });

  handleClick = i => {
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
        {this.props.playlists &&
          this.props.playlists.map((playlist, i) => (
            <DropdownMenuItem
              width="280px"
              key={playlist.id}
              onClick={() => this.handleClick(i)}
            >
              <IconWrapper>
                <CheckBox value={this.state.enabledList[i]} />
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
