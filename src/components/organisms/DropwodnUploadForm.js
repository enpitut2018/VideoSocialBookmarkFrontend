import React, { Component } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import DropdownItem from "../molecules/DropdownItem";
import URLSubmitForm from "../organisms/URLSubmitForm";
import UploadIcon from "../../assets/images/material-icon/baseline-cloud_upload-24px.svg";
import elevate from "../../theme/shadows";
import colors from "../../theme/colors.json";
import palette from "../../theme/palette.json";
import { style } from "../mediaQuery";

const StyledUploadIconWrapper = styled.div`
  height: 30px;
  width: 30px;
  margin: auto;

  ${elevate(2)};

  &:hover {
    ${elevate(6)};
  }
  &:active {
    ${elevate(0)};
  }
`;
export default class DropdownUploadForm extends Component {
  render() {
    return (
      <Dropdown
        renderHeader={onClickHandler => (
          <StyledUploadIconWrapper>
            {UploadIcon({
              fill: palette[colors.organisms.Header.Icon.Fill],
              onClick: onClickHandler,
              width: "30px",
              height: "30px"
            })}
          </StyledUploadIconWrapper>
        )}
        top="63px"
        right="30px"
        css={`
          ${style({
        XL: `margin-right: 35px;`,
        L: `margin-right: 28px;`,
        M: `margin-right: 25px;`,
        S: `margin-right: 20px;`
      })};
        `}
      >
        <DropdownItem
          width="350px"
          css={`
            background-color: ${palette[
        colors.organisms.Header.URLSubmitForm.Background
      ]};
            ${style({
        XL: `width: 400px`,
        L: `width: 380pxpx`,
        M: `width: 350px`,
        S: `width: 80vw`
      })};
          `}
        >
          <URLSubmitForm />
        </DropdownItem>
      </Dropdown>
    );
  }
}
