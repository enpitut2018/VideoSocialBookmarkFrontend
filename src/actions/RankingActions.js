import axios from "axios";

export const GET_RANKING = "GET_RANKING";

export const getRanking = () => dispatch => {
  axios
    .get("http://localhost:3001/ranking")
    .then(res => dispatch({ type: GET_RANKING, ranking: res.data }));
};
