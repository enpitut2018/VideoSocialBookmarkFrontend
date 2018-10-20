import axios from "axios";
import config from "../config";
import { setAuthKeys } from "../auth";
import { getRanking } from "./RankingActions";
import { getEntry } from "./EntryActions";

export const POST_BOOKMARK_REQUEST = "POST_BOOKMARK_REQUEST";
export const POST_BOOKMARK_SUCCESS = "POST_BOOKMARK_SUCCESS";
export const POST_BOOKMARK_FAILURE = "POST_BOOKMARK_FAILURE";

export const POST_BOOKMARK_BY_ENTRY_ID_REQUEST =
  "POST_BOOKMARK_BY_ENTRY_ID_REQUEST";
export const POST_BOOKMARK_BY_ENTRY_ID_SUCCESS =
  "POST_BOOKMARK_BY_ENTRY_ID_SUCCESS";
export const POST_BOOKMARK_BY_ENTRY_ID_FAILURE =
  "POST_BOOKMARK_BY_ENTRY_ID_FAILURE";

export const postBookmark = (url, comment) => dispatch => {
  dispatch({ type: POST_BOOKMARK_REQUEST });
  setAuthKeys();

  return axios
    .post(config.backend_api_url + "/bookmarks", {
      original_url: url,
      comment
    })
    .then(res => {
      dispatch({ type: POST_BOOKMARK_SUCCESS });
      dispatch(getRanking());
    })
    .catch(_ => {
      dispatch({ type: POST_BOOKMARK_FAILURE, error: "" });
    });
};

export const postBookmarkByEntryId = (entryId, comment) => dispatch => {
  dispatch({ type: POST_BOOKMARK_BY_ENTRY_ID_REQUEST });
  setAuthKeys();

  return axios
    .post(config.backend_api_url + "/entries/" + String(entryId), {
      comment
    })
    .then(res => {
      dispatch({ type: POST_BOOKMARK_BY_ENTRY_ID_SUCCESS });
      dispatch(getEntry(entryId));
    })
    .catch(_ => {
      dispatch({ type: POST_BOOKMARK_BY_ENTRY_ID_FAILURE, error: "" });
    });
};
