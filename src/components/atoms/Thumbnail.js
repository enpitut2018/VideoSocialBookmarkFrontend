import styled from "styled-components";

import sizes from "../../theme/sizes";
import React from "react";
import Placeholder from "../../assets/images/ThumbnailPlaceholder.svg";

const StyledImg = styled.img`
  width: ${sizes.atoms.Thumbnail.Default.Width};
  height: ${sizes.atoms.Thumbnail.Default.Height};
`;

export default props => (
  <StyledImg src={props.src ? props.src : Placeholder} alt={props.alt} />
);
