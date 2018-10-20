import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

import Ranking from "../organisms/Ranking";
import URLSubmitForm from "../organisms/URLSubmitForm";
import { connect } from "react-redux";

class Top extends React.Component {
  render() {
    return (
      <>
        <Header />
        {this.props.isSignedIn && <URLSubmitForm />}
        <Ranking />
        <Footer />
      </>
    );
  }
}

export default connect(store => ({
  isSignedIn: store.reduxTokenAuth.currentUser.isSignedIn
}))(Top);
