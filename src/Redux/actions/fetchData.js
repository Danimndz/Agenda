import axios from "axios";
import { FETCH_PERSONS } from "../constants";

const url = "http://localhost:3001/persons";
export const fetchData = () => (dispatch) => {
  axios.get(url).then((res) => {
    dispatch({
      type: FETCH_PERSONS,
      payload: res.data,
    });
    console.log("ajijo");
  });
};

export const editUser = (id, data) => () => {
  axios.put(`${url}/${id}`, data);
};

export const addUser = (data) => () => {
  data.id = 5;
  axios.post(url, data);
};
