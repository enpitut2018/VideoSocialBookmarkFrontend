import { DeepReadonly } from "utility-types";
import {
  DELETE_PAGE_ENTRY,
  DELETE_POPUP_ENTRY,
  FIN,
  POPUP_PAUSE,
  POPUP_PLAY,
  POPUP_STOP,
  SET_PAGE_ENTRY,
  SET_POPUP_ENTRY,
  SKIP,
} from "../actions/PopupActions";

type Entry = any; // Entry id is better
type Flip = any;

export type Popup = DeepReadonly<{
  pageEntry: Entry;
  popupEntry: Entry;
  flip: Flip;
  pageVideoStatus: "standBy" | "play" | "pause" | "stop";
  popupVideoStatus: "standBy" | "play" | "pause" | "stop";
  isskip: boolean;
}>;

const initialState: Popup = {
  pageEntry: null,
  popupEntry: null,
  flip: -1,
  pageVideoStatus: "standBy",
  popupVideoStatus: "standBy",
  isskip: false,
};

export default (state = initialState, action: any): Popup => {
  switch (action.type) {
    case SKIP:
      return {
        ...state,
        isskip: true,
      };
    case FIN:
      return {
        ...state,
        isskip: false,
      };
    case POPUP_PLAY:
      return {
        ...state,
        [`${action.page_or_popup}VideoStatus`]: "playing",
      };
    case POPUP_PAUSE:
      return {
        ...state,
        [`${action.page_or_popup}VideoStatus`]: "pausing",
      };
    case POPUP_STOP:
      return {
        ...state,
        [`${action.page_or_popup}VideoStatus`]: "standBy",
      };
    case SET_PAGE_ENTRY:
      return {
        ...state,
        pageEntry: action.entry,
      };
    case SET_POPUP_ENTRY:
      return {
        ...state,
        popupEntry: action.entry,
        flip: -1 * state.flip,
      };
    case DELETE_PAGE_ENTRY:
      return {
        ...state,
        pageEntry: null,
        pageVideoStatus: "standBy",
      };
    case DELETE_POPUP_ENTRY:
      return {
        ...state,
        popupEntry: null,
        popupVideoStatus: "standBy",
      };
    default:
      return state;
  }
};
