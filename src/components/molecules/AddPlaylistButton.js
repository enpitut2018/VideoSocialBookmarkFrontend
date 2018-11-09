import React, { Component } from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import Wrapper from "../atoms/Wrapper";
import PlaylistAddIcon from "../../assets/images/material-icon/baseline-playlist_add-24px.svg";
import palette from "../../theme/palette";
import colors from "../../theme/colors";

export default class AddPlaylistButton extends Component {
  state = { active: false };
  handleActivate = () => this.setState({ active: true });
  handleDeactivate = () => this.setState({ active: false });

  render() {
    const iconColor = this.state.active
      ? palette[colors.molecules.AddPlaylistButton.Active.Fill]
      : palette[colors.molecules.AddPlaylistButton.Fill];
    const fontColor = this.state.active
      ? palette[colors.molecules.AddPlaylistButton.Active.Font]
      : palette[colors.molecules.AddPlaylistButton.Font];
    return (
      <Button
        size={this.props.size}
        mode="Light"
        onMouseOver={this.handleActivate}
        onTouchStart={this.handleActivate}
        onMouseLeave={this.handleDeactivate}
        onTouchEnd={this.handleDeactivate}
      >
        <Wrapper>
          <PlaylistAddIcon fill={iconColor} />
          <Text size={this.props.size} color={fontColor}>
            プレイリストに追加
          </Text>
        </Wrapper>
      </Button>
    );
  }
}
