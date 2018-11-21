import store from "../store";

export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";

export const addToast = (toastType, content, timeout_ms) => dispatch => {
  const state = store.getState();
  if (state.toasts.toasts.every(toast => toast.type !== toastType)) {
    dispatch({ type: ADD_TOAST, toastType, content });
    window.setTimeout(() => dispatch({ type: REMOVE_TOAST }), timeout_ms);
  }
};

export const removeToast = () => dispatch => dispatch({ type: REMOVE_TOAST });
