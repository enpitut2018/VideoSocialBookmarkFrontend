import threads from "./threads";
import ranking from "./ranking";
import { combineReducers } from "redux";

const app = combineReducers({
  threads,
  ranking
});

export default app;
