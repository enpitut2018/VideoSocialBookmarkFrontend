import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

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
  return axios.get(config.backend_api_url + "/trend").catch(error => {
    expect(error.message).not.toEqual("Network Error");
  });
});
*/
