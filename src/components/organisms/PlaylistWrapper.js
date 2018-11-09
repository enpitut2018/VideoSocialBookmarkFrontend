import * as React from "react";
import { connect } from "react-redux";
import { /*getPlaylist*/ } from "../../actions/PlaylistActions";
import { getTrend } from "../../actions/TrendActions";
import Wrapper from "../atoms/Wrapper";
import Text from "../atoms/Text";
import LoadingIcon from "../atoms/LoadingIcon";
import PlaylistItem from "../molecules/PlaylistItem";
import styled from "styled-components";

const StyledPlaylistWrapper = styled(Wrapper)`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

class PlaylistWrapper extends React.Component {
  componentWillMount() {
    /*this.props.getPlaylist(this.props.playlist_id);*/
    this.props.getTrend();
  }

  render() {
    return (
      <>
        <Wrapper dir="column">
          <Text level="L" margin="10px 0 13px 0">
            { this.props.title }
          </Text>
          <StyledPlaylistWrapper>
            {this.props.error ? (
              <Text>データの取得に失敗しました</Text>
            ) : this.props.hasLoaded ? (
              this.props.playlist &&
              this.props.playlist.map(item => (
                <PlaylistItem entry={item} key={item.id} />
              ))
            ) : (
              <LoadingIcon />
            )}
          </StyledPlaylistWrapper>
        </Wrapper>
      </>
    );
  }
}

export default connect(
  store => ({
    hasLoaded: store.trend.hasLoaded,
    playlist: store.trend.trend,
    title: "PLAY_LIST_TITLE",
    error: store.trend.error
  }),
  { getTrend }
)(PlaylistWrapper);

/*
export default connect(
  store => ({
    hasLoaded: store.playlist.hasLoaded,
    playlist: store.playlist.playlist,
    title: store.playlist.title,
    error: store.playlist.error
  }),
  { getPlaylist }
)(PlaylistWrapper);
*/
