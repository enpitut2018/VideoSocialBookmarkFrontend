import React, { Component } from "react";
import styled from "styled-components";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import CheckBox from "../atoms/CheckBox";
import LockIcon from "../../assets/images/material-icon/baseline-lock-24px.svg";
import LockOpenIcon from "../../assets/images/material-icon/baseline-lock_open-24px.svg";
import EditIcon from "../../assets/images/material-icon/baseline-edit-24px.svg";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import Text from "../atoms/Text";
import TextInput from "../atoms/TextInput";
import Form from "./Form";
import store from "../../store";
import { putPlaylist } from "../../actions/PlaylistActions";
import elevate from "../../theme/shadows";

const IconWrapper = styled.div`
  height: 24px;
  margin: 2px 18px;
  ${props => props.clickable && elevate(6)}
`;

export default class DropdownPlaylistMenuItem extends Component {
  state = {
    name: null,
    isPrivate: null,
    editing: false,
    hasSubmitted: false
  };

  componentWillMount() {
    if (this.props.playlist) {
      this.setState({
        name: this.props.playlist.name,
        isPrivate: this.props.playlist.is_private
      });
    }
    window.addEventListener("click", this.handleClickWhenEditing);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClickWhenEditing);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playlist) {
      this.setState({
        name: nextProps.playlist.name,
        isPrivate: nextProps.playlist.isPrivate
      });
    }
  }

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(prev => ({
      editing: !prev.editing,
      hasSubmitted: false,
      name: this.props.playlist.name,
      isPrivate: this.props.playlist.is_private
    }));
  };

  handleClickWhenEditing = e => {
    if (this.state.editing) {
      e.stopPropagation();
      this.setState({ editing: false });
    }
  };

  submit = e => {
    if (e) {
      e.preventDefault();
    }
    if (this.state.hasSubmitted) {
      return false;
    }
    store.dispatch(
      putPlaylist(this.props.playlist.id, this.state.name, this.state.isPrivate)
    );
    this.setState({ editing: false, hasSubmitted: true });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePrivateChange = e => {
    e.preventDefault();
    e.stopPropagation();
    window.console.log(this.state.isPrivate);
    if (this.state.isPrivate !== undefined) {
      this.setState(prev => ({ isPrivate: !prev.isPrivate }));
    }
  };

  render() {
    const color = palette[colors.organisms.DropdownPlaylistMenu.Fill];
    return (
      <DropdownMenuItem width="400px" onClick={this.props.handleClick}>
        <IconWrapper>
          <CheckBox value={this.props.enabled} />
        </IconWrapper>
        {this.state.editing ? (
          <Form
            onSubmit={this.submit}
            css=""
            render={() => (
              <>
                <TextInput
                  placeholder="プレイリスト名"
                  handleChange={this.handleNameChange}
                  name="name"
                  width="calc(100% - 52px)"
                  submit={this.submit}
                  value={this.state.name}
                  onClick={e => e.stopPropagation()}
                  css={`
                    margin: 0;
                    padding: 0.5rem;
                    border-radius: 3px;
                  `}
                  required
                />
              </>
            )}
          />
        ) : (
          <Text
            margin="0"
            css={`
              width: 100%;
              padding: 0.5rem;
              text-align: center;
            `}
          >
            {this.props.playlist && this.props.playlist.name}
          </Text>
        )}
        {this.state.editing ? (
          <IconWrapper onClick={this.handlePrivateChange} clickable>
            {this.state.isPrivate ? (
              <LockIcon fill={color} />
            ) : (
              <LockOpenIcon fill={color} />
            )}
          </IconWrapper>
        ) : (
          <IconWrapper>
            {this.state.isPrivate ? (
              <LockIcon fill={color} />
            ) : (
              <LockOpenIcon fill={color} />
            )}
          </IconWrapper>
        )}
        <IconWrapper onClick={this.handleClick}>
          <EditIcon fill={color} />
        </IconWrapper>
      </DropdownMenuItem>
    );
  }
}
