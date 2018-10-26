import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import config from "./config";

it("renders without crashing", () => {
  window.matchMedia = () => ({
    addListener: () => {},
    removeListener: () => {}
  });
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/*
it("Access backend", () => {
  return axios.get(config.backend_api_url + "/ranking").catch(error => {
    expect(error.message).not.toEqual("Network Error");
  });
});
*/
