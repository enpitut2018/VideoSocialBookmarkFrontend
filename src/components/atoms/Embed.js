import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";

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
  genEmbed = () => {
    const provider = this.props.provider;
    const id = this.props.video_id;
    const title = this.props.title;
    switch (provider) {
    case "youtube":
      return(
        <IframeWrapper>
          <StyledIframe
            title={title}
            src={`https://www.youtube.com/embed/${id}?autoplay=0&origin=https://video-social-bookmark.herokuapp.com`}
            allowFullScreen
            frameBorder="0"
          />
        </IframeWrapper>
      );
    case "nicovideo":
      return(
        <IframeWrapper>
          <StyledIframe
            title={title}
            src={`https://embed.nicovideo.jp/watch/${id}`}
            allowFullScreen
            frameBorder="0"
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
