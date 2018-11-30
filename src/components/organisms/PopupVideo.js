import React, { Component } from "react";
import { connect } from "react-redux";
import Embed from "../atoms/Embed";

class Entry extends Component {
  render() {
    switch(this.props.mode){
    case "onEntry":
    {
      const container = document.getElementById("popup-container");
      if(this.props.hasLoaded && container !== null){
        const container_abs_pos = container.getBoundingClientRect();
        const container_pos = {
          left: window.pageXOffset + container_abs_pos.left,
          top: window.pageYOffset + container_abs_pos.top,
          width: container_abs_pos.width,
          height: container_abs_pos.height
        };
        return(
          <div style={{
            position: "absolute",
            ...container_pos
          }}>
            <Embed
              provider={this.props.entry.provider}
              video_id={this.props.entry.video_id}
              thumbnail_url={this.props.entry.thumbnail_url}
              alt={this.props.entry.title}
              width="100%"
            />
          </div>
        );
      }else{
        return(
              <>
              </>
        );
      }
    }
    case "popup":
    {
      if(this.props.hasLoaded){
        return(
          <div style={{
            position: "fixed",
            right: 10,
            bottom: 20,
            width: "400px",
            height: "auto"
          }}>
            <Embed
              provider={this.props.entry.provider}
              video_id={this.props.entry.video_id}
              thumbnail_url={this.props.entry.thumbnail_url}
              alt={this.props.entry.title}
              width="100%"
            />
          </div>
        );
      }else{
        return(
              <>
              </>
        );
      }
    }
    case "none":
    default:
      return(
          <>
          </>
      );
    }
  }
}

export default connect(store => ({
  hasLoaded: store.entries.hasLoaded,
  entry: store.entries.entry,
  mode: store.popup.mode
}))(Entry);
