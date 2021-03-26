import axios from "axios";
import { FETCH_PERSONS } from "../constants";

const url = "http://localhost:3001/persons";
export const fetchData = () => (dispatch) => {
  axios.get(url).then((res) => {
    dispatch({
      type: FETCH_PERSONS,
      payload: res.data,
    });
  });
};
