import * as React from "react";
import Text from "../atoms/Text";
import BasicPageWrapper from "../../BasicPageWrapper";

export default class NotFound_404 extends React.Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="L">404 Not Found</Text>
      </BasicPageWrapper>
    );
  }
}
