import axios from "axios";
import config from "../config";

export const GET_USER = "GET_USER";
export const GET_USER_ICON = "GET_USER_ICON";

export const getUser = () => dispatch => {
  axios
    .get(config.backend_api_url + "/user")
    .then(res => dispatch({ type: GET_USER, user: res.data }));
};

export const getUserIcon = () => dispatch => {
  axios
    .get(config.backend_api_url + "/userIcon")
    .then(res => dispatch({ type: GET_USER_ICON, userIcon: res.data }));
};
