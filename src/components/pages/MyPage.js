import React, { Component } from "react";
import MyPageTemplate from "../templates/MyPage";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getUser } from "../../actions/UserActions";

class MyPage extends Component {
  componentWillMount() {
    this.props.dispatch(getUser());
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Video Social Bookmark | マイページ</title>
        </Helmet>
        <MyPageTemplate
          hasLoaded={this.props.hasLoaded}
          user={this.props.user}
        />
      </>
    );
  }
}

export default connect(store => ({
  hasLoaded: store.user.hasLoaded,
  user: store.user.user,
  bookmarks: store.user.bookmarks
}))(MyPage);
