import React, { Component } from "react";
import { connect } from "react-redux";
import Embed from "../atoms/Embed";
import {play, pause, stop} from "../../actions/PopupActions";

class PopupVideo extends Component {
  genPage = () => {
    const entry = this.props.pageEntry;
    const container = document.getElementById("popup-container");
    const container_abs_pos = container.getBoundingClientRect();
    const container_pos = {
      left: window.pageXOffset + container_abs_pos.left,
      top: window.pageYOffset + container_abs_pos.top,
      width: container_abs_pos.width,
      height: container_abs_pos.height
    };
    return(
      <div key={this.props.flip} style={{
        position: "absolute",
        ...container_pos
      }}>
        <Embed
          provider={entry.provider}
          video_id={entry.video_id}
          thumbnail_url={entry.thumbnail_url}
          alt={entry.title}
          width="100%"
        />
      </div>
    );
  };

  genPopup = () => {
    const entry = this.props.popupEntry;
    return(
      <div key={this.props.flip * -1} style={{
        position: "fixed",
        right: 10,
        bottom: 20,
        width: "400px",
        height: "auto"
      }}>
        <Embed
          provider={entry.provider}
          video_id={entry.video_id}
          thumbnail_url={entry.thumbnail_url}
          alt={entry.title}
          width="100%"
        />
      </div>
    );
  };

  componentDidMount(){
    window.addEventListener("message", (e) => {
      if (e.origin === "https://embed.nicovideo.jp") {
        if(e.data.eventName === "playerStatusChange"){
          const status = e.data.data.playerStatus;
          switch(status){
          case 2: this.props.play(); break;
          case 3: this.props.pause(); break;
          case 4: this.props.stop(); break;
          }
        }
        /**
     * e.data.data
     * e.data.eventName
     * e.data.playerId
     * e.data.sourceConnectorType
    **/
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
