import React, { Component } from "react";
import styled from "styled-components";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import CheckBox from "../atoms/CheckBox";
import LockIcon from "../../assets/images/material-icon/baseline-lock-24px.svg";
import EditIcon from "../../assets/images/material-icon/baseline-edit-24px.svg";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import Text from "../atoms/Text";
import TextInput from "../atoms/TextInput";
import Form from "./Form";
import store from "../../store";
import { putPlaylist } from "../../actions/PlaylistActions";

const IconWrapper = styled.div`
  height: 24px;
  margin: 2px 18px;
`;

export default class DropdownPlaylistMenuItem extends Component {
  state = {
    name: null,
    editing: false,
    hasSubmitted: false
  };

  componentWillMount() {
    if (this.props.playlist) {
      this.setState({
        name: this.props.playlist.name
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
        name: nextProps.playlist.name
      });
    }
  }

  handleClick = e => {
    e.preventDefault();
    e.stopPropagation();

    this.setState(prev => ({
      editing: !prev.editing,
      hasSubmitted: false,
      name: this.props.playlist.name
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
    store.dispatch(putPlaylist(this.props.playlist.id, this.state.name));
    this.setState({ editing: false, hasSubmitted: true });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const color = palette[colors.organisms.DropdownPlaylistMenu.Fill];
    return (
      <DropdownMenuItem width="300px" onClick={this.props.handleClick}>
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
        {this.props.playlist.is_private && (
          <IconWrapper>
            <LockIcon fill={color} />
          </IconWrapper>
        )}
        <IconWrapper onClick={this.handleClick}>
          <EditIcon fill={color} />
        </IconWrapper>
      </DropdownMenuItem>
    );
  }
}
