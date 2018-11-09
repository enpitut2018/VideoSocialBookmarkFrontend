import styled from "styled-components";

import React from "react";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";

const StyledImg = styled.img`
  overflow: hidden;
  ${props => props.width && `width: ` + props.width};
  ${props => props.height && `height: ` + props.height};
`;

export default function Thumbnail(props) {
  return (
    <StyledImg
      {...props}
      src={props.src ? props.src : Placeholder}
      alt={props.alt}
    />
  );
}
