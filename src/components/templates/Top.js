import * as React from "react";
import BasicPageWrapper from "../../BasicPageWrapper";

import Trend from "../organisms/Trend";
import { connect } from "react-redux";

class Top extends React.Component {
  render() {
    return (
      <BasicPageWrapper>
        <Trend />
      </BasicPageWrapper>
    );
  }
}

export default connect(store => ({
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Top);
