import styled from "styled-components";

const table = {
  around: {
    "align-items": "center",
    "justify-content": "space-around"
  },
  between: {
    "align-items": "center",
    "justify-content": "space-between"
  },
  center: {
    "align-items": "center",
    "justify-content": "center"
  },
  left: {
    "align-items": "center",
    "justify-content": "flex-start"
  },
  right: {
    "align-items": "center",
    "justify-content": "flex-end"
  }
};

export default styled.div`
  display: flex;
  justify-content: ${props =>
    props.type
      ? table[props.type]["justify-content"]
      : table.center["justify-content"]};
  align-items: ${props =>
    props.type
      ? table[props.type]["align-items"]
      : table.center["align-items"]};
`;
