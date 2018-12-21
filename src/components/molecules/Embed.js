import React, { Component } from "react";
import Thumbnail from "../atoms/Thumbnail";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import YouTube from "react-youtube";
import EmbedController from "../../controller/EmbedController";

import { connect } from "react-redux";

const IframeWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  &:before {
    content: "";
    display: block;
    padding-top: 56.25%;
  }
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledYouTubeIframe = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class Embed extends Component {
  embedController = null;

  setup = () => {
    if (this.props.entry) {
      this.embedController =
        new EmbedController(
          this.props.entry,
          this.props.playlist,
          this.props.history
        );
    }
  };

  componentDidMount() {
    this.setup();
  }

  componentDidUpdate() {
    this.setup();
  }

  componentWillUnmount() {
    if (this.props.entry && this.embedController) {
      this.embedController.release();
    }
  }

  skipNext = () => {
    if(this.props.entry && this.embedController){
      this.embedController.skipNext();
    }
  }

  genEmbedFrame = () => {
    const provider = this.props.provider;
    const id = this.props.video_id;
    const title = this.props.title;
    const autoplay = this.props.playlist !== undefined;
    const embed_id = this.props.embed_id;
    switch (provider) {
    case "youtube": {
      return (
        <IframeWrapper>
          <StyledYouTubeIframe
            videoId={id}
            onEnd={this.skipNext}
            opts={
              {
                // https://developers.google.com/youtube/player_parameters
                playerVars: {
                  autoplay: autoplay ? 1 : 0
                }
              }
            }
          />
        </IframeWrapper>
      );
    }
    case "nicovideo":
      return (
        <IframeWrapper>
          <StyledIframe
            title={title}
            src={`https://embed.nicovideo.jp/watch/${id}?jsapi=1&${embed_id ? `&playerId=${embed_id}` : `player`}`}
            allowFullScreen
            allow="autoplay"
            frameBorder="0"
            id="embed"
          />
        </IframeWrapper>
      );
    case "dailymotion":
      return (
        <IframeWrapper>
          <StyledIframe
            title={title}
            src={`https://www.dailymotion.com/embed/video/${id}`}
            allowFullScreen
            frameBorder="0"
          />
        </IframeWrapper>
      );
    case "soundcloud":
      return (
        <IframeWrapper>
          <StyledIframe
            title={title}
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            frameBorder="0"
          />
        </IframeWrapper>
      );
    default:
      return null;
    }
  };
  render() {
    const EmbedFrame = this.genEmbedFrame();
    return (
      <>
        {EmbedFrame === null ? (
          <Thumbnail
            provider={this.props.provider}
            width={this.props.width}
            src={this.props.thumbnail_url}
            title={this.props.title}
          />
        ) : (
          EmbedFrame
        )}
      </>
    );
  }
}

export default connect(store => ({
  playlist: store.playlists.playlist
}))(Embed);
