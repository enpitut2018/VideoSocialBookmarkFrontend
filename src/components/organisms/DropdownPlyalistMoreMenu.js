import React, { Component } from "react";
import Dropdown from "./Dropdown";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import MoreVertIcon from "../../assets/images/material-icon/baseline-more_vert-24px.svg";
import Wrapper from "../atoms/Wrapper";
import palette from "../../theme/palette";
import colors from "../../theme/colors";
import DeleteIcon from "../../assets/images/material-icon/baseline-delete-24px.svg";
import EditIcon from "../../assets/images/material-icon/baseline-edit-24px.svg";
import Text from "../atoms/Text";
import { deletePlaylist } from "../../actions/PlaylistActions";
import store from "../../store";

export default class DropdownPlyalistMoreMenu extends Component {
  render() {
    return (
      <Dropdown
        renderHeader={onClick => (
          <Wrapper onClick={onClick}>
            <MoreVertIcon
              fill={palette[colors.organisms.Header.Icon.Fill]}
              width="28px"
              height="28px"
            />
          </Wrapper>
        )}
      >
        <DropdownMenuItem onClick={() => ""}>
          <Wrapper
            css={`
              height: 24px;
              margin: 2px 22px;
            `}
          >
            <EditIcon
              fill={palette[colors.organisms.Header.Icon.Fill]}
              height="24"
              width="24"
            />
          </Wrapper>
          <Text margin="0">編集</Text>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            this.props.playlist &&
            store.dispatch(deletePlaylist(this.props.playlist.id))
          }
        >
          <Wrapper
            css={`
              height: 24px;
              margin: 2px 22px;
            `}
          >
            <DeleteIcon fill={palette["Red01"]} height="24" width="24" />
          </Wrapper>
          <Text
            margin="0"
            css={`
              color: ${palette["Red01"]};
              font-weight: bold;
            `}
          >
            プレイリストを削除
          </Text>
        </DropdownMenuItem>
      </Dropdown>
    );
  }
}
