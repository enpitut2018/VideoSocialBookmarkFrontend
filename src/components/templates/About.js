import * as React from "react";
import Text from "../atoms/Text";
import BasicPageWrapper from "../../BasicPageWrapper";

export default class About extends React.Component {
  render() {
    return (
      <BasicPageWrapper>
        <Text size="XL">VSBとは</Text>
      </BasicPageWrapper>
    );
  }
}
