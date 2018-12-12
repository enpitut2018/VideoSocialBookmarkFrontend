import React, { Component } from "react";
import Dropdown from "./Dropdown";
import DropdownMenuItem from "../molecules/DropdownMenuItem";
import MoreVertIcon from "../../assets/images/material-icon/baseline-more_vert-24px.svg";
import Wrapper from "../atoms/Wrapper";
import palette from "../../theme/palette";
import colors from "../../theme/colors";
import DeleteIcon from "../../assets/images/material-icon/baseline-delete-24px.svg";
import Text from "../atoms/Text";

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
        <DropdownMenuItem>
          <Wrapper
            css={`
              height: 24px;
              margin: 2px 22px;
            `}
          >
            <DeleteIcon
              fill={palette[colors.organisms.Header.Icon.Fill]}
              height="24"
              width="24"
            />
          </Wrapper>
          <Text margin="0">プレイリストを削除</Text>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Wrapper
            css={`
              height: 24px;
              margin: 2px 22px;
            `}
          >
            <DeleteIcon
              fill={palette[colors.organisms.Header.Icon.Fill]}
              height="24"
              width="24"
            />
          </Wrapper>
          <Text margin="0">プレイリストを削除</Text>
        </DropdownMenuItem>
      </Dropdown>
    );
  }
}
