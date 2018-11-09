import * as React from "react";

import TemplatePlaylist from "../templates/Playlist";

export default class Playlist extends React.Component {
  render() {
    return <TemplatePlaylist playlist_id={this.props.match.params.id} />;
  }
}
