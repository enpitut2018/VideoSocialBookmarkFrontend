import styled from "styled-components";

import React from "react";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";

const StyledImg = styled.img`
  width: ${props => (props.width ? props.width : "100%")};
`;

export default props => (
  <StyledImg
    {...props}
    src={props.src ? props.src : Placeholder}
    alt={props.alt}
  />
);
