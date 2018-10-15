import React, { Component } from "react";
import MyPageTemplate from "../templates/MyPage";
import { connect } from "react-redux";

import { getUser } from "../../actions/UserActions";

class MyPage extends Component {
  componentWillMount() {
    this.props.dispatch(getUser());
  }

  render() {
    return (
      <MyPageTemplate hasLoaded={this.props.hasLoaded} user={this.props.user} />
    );
  }
}

export default connect(store => ({
  hasLoaded: store.user.hasLoaded,
  user: store.user.user
}))(MyPage);
