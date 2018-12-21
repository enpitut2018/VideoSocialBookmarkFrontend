import { DeepReadonly } from "utility-types";
import { ADD_TOAST, REMOVE_TOAST } from "../actions/ToastActions";

export type Toasts = DeepReadonly<{
  toasts: Array<{
    type: string;
    content: string;
  }>;
}>;

const initialState: Toasts = {
  toasts: [],
};

export default (state = initialState, action: any): Toasts => {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, { type: action.toastType, content: action.content }],
      };
    case REMOVE_TOAST:
      return {
        ...state,
        toasts: [...state.toasts.slice(1)],
      };
    default:
      return state;
  }
};
