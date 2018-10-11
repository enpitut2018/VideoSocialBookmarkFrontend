import axios from "axios";
import * as config from "../config";

export const GET_RANKING = "GET_RANKING";

export const getRanking = () => dispatch => {
  axios
    .get(config.backend_api_url + "/ranking")
    .then(res => dispatch({ type: GET_RANKING, ranking: res.data }));
};
