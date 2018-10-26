import Wrapper from "./Wrapper";

import elevate from "../../theme/shadows";
import styled from "styled-components";

export default styled(Wrapper)`
  display: inline-flex;
  ${props => (props.elevation ? elevate(props.elevation) : elevate(0))};
`;
