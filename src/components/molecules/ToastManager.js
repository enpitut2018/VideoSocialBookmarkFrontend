import React, { Component } from "react";
import Toast from "../molecules/Toast";

class ToastManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastContentList: []
    };
  }
  add = content => {
    this.setState({
      toastContentList: [...this.state.toastContentList, content]
    });
  };
  render() {
    return (
      <>
        {this.state.toastContentList.map((content, i) => (
          <Toast key={i} content={content} />
        ))}
      </>
    );
  }
}

export default new ToastManager();
