import React, { Component } from "react";
import { connect } from "react-redux";
import Embed from "../atoms/Embed";
import {play, pause, stop} from "../../actions/PopupActions";

class PopupVideo extends Component {
  genPage = () => {
    const entry = this.props.pageEntry;
    const key = this.props.flip;
    const container = document.getElementById("popup-container");
    const container_abs_pos = container.getBoundingClientRect();
    const container_pos = {
      left: window.pageXOffset + container_abs_pos.left,
      top: window.pageYOffset + container_abs_pos.top,
      width: container_abs_pos.width,
      height: container_abs_pos.height
    };
    return(
      <div key={key} style={{
        position: "absolute",
        ...container_pos
      }}>
        <Embed
          provider={entry.provider}
          video_id={entry.video_id}
          thumbnail_url={entry.thumbnail_url}
          alt={entry.title}
          width="100%"
          embed_id={key.toString()}
        />
      </div>
    );
  };

  genPopup = () => {
    const entry = this.props.popupEntry;
    const key = this.props.flip * -1;
    return(
      <div key={key} style={{
        position: "fixed",
        right: 10,
        bottom: 20,
        width: "400px",
        height: "auto",
        zIndex: 10
      }}>
        <Embed
          provider={entry.provider}
          video_id={entry.video_id}
          thumbnail_url={entry.thumbnail_url}
          alt={entry.title}
          width="100%"
          embed_id={key.toString()}
        />
      </div>
    );
  };

  componentDidMount(){
    window.addEventListener("message", (e) => {
      if (e.origin === "https://embed.nicovideo.jp") {
        if(e.data.eventName === "playerStatusChange"){
          const status = e.data.data.playerStatus;
          const page_or_popup =
            this.props.flip == e.data.playerId ? "page" : "popup";
          switch(status){
          case 2: this.props.play(page_or_popup); break;
          case 3: this.props.pause(page_or_popup); break;
          case 4: this.props.stop(page_or_popup); break;
          }
        }
      }
    });
  }

  render() {
    let components = [];
    if(this.props.pageEntry) components.push(this.genPage());
    if(this.props.popupEntry) components.push(this.genPopup());
    components.push(<></>);
    return components;
  }
}

export default connect(store => ({
  pageEntry: store.popup.pageEntry,
  popupEntry: store.popup.popupEntry,
  flip: store.popup.flip
}), {play, pause, stop})(PopupVideo);
