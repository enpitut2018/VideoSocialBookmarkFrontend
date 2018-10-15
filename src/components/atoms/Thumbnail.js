import styled from "styled-components";

import React from "react";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";

const StyledImg = styled.img`
  width: 120px;
  height: 90px;
`;

export default props => (
  <StyledImg src={props.src ? props.src : Placeholder} alt={props.alt} />
);
