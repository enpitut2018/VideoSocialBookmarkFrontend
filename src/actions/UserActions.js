import axios from "axios";
import config from "../config";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const GET_USER_ICON_REQUEST = "GET_USER_ICON_REQUEST";
export const GET_USER_ICON_SUCCESS = "GET_USER_ICON_SUCCESS";
export const GET_USER_ICON_FAILURE = "GET_USER_ICON_FAILURE";
export const GET_USER_BOOKMARKS_REQUEST = "GET_USER_BOOKMARKS_REQUEST";
export const GET_USER_BOOKMARKS_SUCCESS = "GET_USER_BOOKMARKS_SUCCESS";
export const GET_USER_BOOKMARKS_FAILURE = "GET_USER_BOOKMARKS_FAILURE";

export const getUserBookmarks = id => dispatch => {
  dispatch({ type: GET_USER_BOOKMARKS_REQUEST });
  return axios
    .get(config.backend_api_url + `/users/${id}/bookmarks`)
    .then(res => {
      dispatch({
        type: GET_USER_BOOKMARKS_SUCCESS,
        bookmarks: res.data
      })
    })
    .catch(_ => {
      dispatch({ type: GET_USER_BOOKMARKS_FAILURE , error: "" });
    });
}

export const getUser = () => dispatch => {
  dispatch({ type: GET_USER_REQUEST });
  return axios
    .get(config.backend_api_url + "/user/")
    .then(res => {
      dispatch({ type: GET_USER_SUCCESS, user: res.data });
    })
    .catch(_ => {
      dispatch({ type: GET_USER_FAILURE, error: "" });
    });
};

export const getUserIcon = () => dispatch => {
  dispatch({ type: GET_USER_ICON_REQUEST });
  return axios
    .get(config.backend_api_url + "/userIcon/")
    .then(res => {
      dispatch({ type: GET_USER_ICON_SUCCESS, userIcon: res.data });
    })
    .catch(_ => {
      dispatch({ type: GET_USER_ICON_FAILURE, error: "" });
    });
};
