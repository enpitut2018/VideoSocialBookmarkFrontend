import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import { Redirect } from "react-router";

const IframeWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  &:before {
    content:"";
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

export default class Embed extends Component {
  state = {
    shouldRedirectToNext: false,
  }
  componentDidUpdate(){
    const isPlaylistItem = this.props.shouldRedirectNextUrl !== undefined;
    if(isPlaylistItem){
      const provider = this.props.provider;
      switch (provider) {
      case "nicovideo":{
        // Listen player stopped message
        window.addEventListener("message", (e) => {
          if (e.origin === "https://embed.nicovideo.jp") {
            const playerStopped = e.data.eventName === "playerStatusChange" &&
                                  e.data.data.playerStatus == 4;
            const playerLoaded = e.data.eventName === "loadComplete";
            if(playerLoaded){
              // Set autoplay
              const player = document.getElementById("embed");
              const origin = "https://embed.nicovideo.jp";
              const playMessage = {
                sourceConnectorType: 1,
                playerId: "player", // String. not Integer.
                eventName: "play"
              };
              player.contentWindow.postMessage(playMessage, origin);
            }
            if(playerStopped){
              this.setState({shouldRedirectToNext: true});
            }
          }
        });
      }
      }
    }
  }
  genEmbed = () => {
    const provider = this.props.provider;
    const id = this.props.video_id;
    const title = this.props.title;
    const autoplay = this.state.isPlaylistItem;
    switch (provider) {
    case "youtube":
      return(
        <IframeWrapper>
          <StyledIframe
            title={title}
            src={`https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&origin=https://video-social-bookmark.herokuapp.com`}
            allowFullScreen
            allow="autoplay"
            frameBorder="0"
          />
        </IframeWrapper>
      );
    case "nicovideo":
      return(
        <IframeWrapper>
          <StyledIframe
            title={title}
            src={`https://embed.nicovideo.jp/watch/${id}?jsapi=1&playerId=player`}
            allowFullScreen
            allow="autoplay"
            frameBorder="0"
            id="embed"
          />
        </IframeWrapper>
      );
    case "dailymotion":
      return(
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
      return(
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
  render(){
    const Embed = this.genEmbed();
    return (
    <>
      {this.state.shouldRedirectToNext &&
        <Redirect to={this.props.shouldRedirectNextUrl} />}
      {Embed !== null ? (
        Embed
      ) : (
        <Thumbnail
          provider={this.props.provider}
          width={this.props.width}
          src={this.props.thumbnail_url}
          title={this.props.title}
        />
      )}
    </>
    );
  }
}
