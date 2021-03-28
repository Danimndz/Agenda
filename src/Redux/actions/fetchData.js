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

export const editUser = (id, data) => () => {
  axios.put(`${url}/${id}`, data);
};

export const addUser = (data) => () => {
  data.id = 11;
  console.log("desde actions", data);
  axios.post(url, data);
};
