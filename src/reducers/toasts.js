import { ADD_TOAST, REMOVE_TOAST } from "../actions/ToastActions";

const initialState = {
  toasts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ADD_TOAST:
    return {
      ...state,
      toasts: [
        ...state.toasts,
        { type: action.toastType, content: action.content }
      ]
    };
  case REMOVE_TOAST:
    return {
      ...state,
      toasts: [...state.toasts.slice(1)]
    };
  default:
    return state;
  }
};
