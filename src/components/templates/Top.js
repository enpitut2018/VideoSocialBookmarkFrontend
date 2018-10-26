import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import Trend from "../organisms/Trend";
import URLSubmitForm from "../organisms/URLSubmitForm";
import { connect } from "react-redux";

class Top extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.isSignedIn && <URLSubmitForm />}
        <Trend />
        <Footer />
      </>
    );
  }
}

export default connect(store => ({
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Top);
