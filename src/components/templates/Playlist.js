import * as React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import PlaylistWrapper from "../organisms/PlaylistWrapper";

export default class PlaylistTemplate extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PlaylistWrapper playlist_id={this.props.playlist_id} />
        <Footer />
      </>
    );
  }
}
