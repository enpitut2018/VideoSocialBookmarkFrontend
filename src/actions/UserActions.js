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

export const getUserBookmarks = () => dispatch => {
  dispatch({ type: GET_USER_BOOKMARKS_REQUEST });
  dispatch({
    type: GET_USER_BOOKMARKS_SUCCESS,
    bookmarks: [
      {
        id: 1,
        comment: "SYNODOS】方言とコミュニケーション――「ヴァーチャル方言」とその効能／田中ゆかり / 日本語学",
        entry: {
          id: 3,
          url: "https://www.youtube.com/watch?v=5AEbq6X33A8",
          title: "24/7 lofi hip hop radio - beats to chill/study/relax - YouTube",
          thumbnail_url: "https://img.youtube.com/vi/5AEbq6X33A8/default.jpg"
        }
      },
      {
        id: 2,
        comment: "わいも90分授業を2回ぐらいやったことがあるぜ、スマートフォンとプロセッサ、スマートフォンのOSってので2コマ",
        entry: {
          id: 12,
          url: "https://www.youtube.com/watch?v=ET6657PH9gQ",
          title: "TANUKI - BABYBABYの夢 - YouTube",
          thumbnail_url: "https://img.youtube.com/vi/ET6657PH9gQ/default.jpg"
        }
      }
    ]
  })
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
