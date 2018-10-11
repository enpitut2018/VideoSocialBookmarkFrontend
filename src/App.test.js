import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Access backend', () => {
  return axios
  .get("http://localhost:3001/")
  .catch(error => {
    expect(error.message).not.toEqual('Network Error')
  });
})
