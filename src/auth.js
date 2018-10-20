import axios from "axios";

export const setAuthKeys = () => {
  const keys = ["access-token", "token-type", "client", "expiry", "uid"];
  for (const key of keys) {
    axios.defaults.headers.common[key] = window.localStorage.getItem(key);
  }
};
