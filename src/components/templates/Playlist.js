import * as React from "react";
import PlaylistWrapper from "../organisms/PlaylistWrapper";
import BasicPageWrapper from "../../BasicPageWrapper";

export default class PlaylistTemplate extends React.Component {
  render() {
    return (
      <BasicPageWrapper>
        <PlaylistWrapper playlist_id={this.props.playlist_id} />
      </BasicPageWrapper>
    );
  }
}
