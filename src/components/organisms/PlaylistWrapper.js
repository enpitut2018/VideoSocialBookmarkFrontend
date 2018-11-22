import * as React from "react";
import { connect } from "react-redux";
import { getPlaylist } from "../../actions/PlaylistActions";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import LoadingIcon from "../atoms/LoadingIcon";
import Coverflow from "react-coverflow";
import Embed from "../atoms/Embed";

class PlaylistWrapper extends React.Component {
  componentWillMount() {
    this.props.getPlaylist(this.props.playlist_id);
  }

  render() {
    return (
      <>
      {this.props.playlist !== undefined && this.props.playlist.length !== 0 ? (
        <Wrapper dir="column">
          <Text level="L" margin="10px 0 13px 0">
            { this.props.playlist.title }
          </Text>
          <Coverflow
            width="1100"
            height="500"
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={true}
            clickable={true}
          >
            {this.props.playlist.playlist_items.map(item => (
              <div key={item.id} style={{width:"400px"}}>
                <Embed
                  provider={item.entry.provider}
                  video_id={item.entry.video_id}
                  thumbnail_url={item.entry.thumbnail_url}
                  alt={item.entry.title}
                  width="300px"
                />
              </div>
            ))}
          </Coverflow>
        </Wrapper>
      ) : (
        <LoadingIcon />
      )}
      </>
    );
  }
}

export default connect(
  store => ({
    state: store.playlists.state,
    playlist: store.playlists.playlist,
    error: store.playlists.error
  }),
  { getPlaylist }
)(PlaylistWrapper);
