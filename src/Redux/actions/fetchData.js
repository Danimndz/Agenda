import axios from "axios";
import { FETCH_PERSONS } from "../constants";

const url = "http://localhost:8090/api";
export const fetchData = () => (dispatch) => {
  axios.get(`${url}/getPersonas`).then((res) => {
    dispatch({
      type: FETCH_PERSONS,
      payload: res.data,
    });
  });
};

export const editUser = (id, data) => () => {
  axios.post(`${url}/actualizarPersona/${id}`, data);
};

export const addUser = (data) => () => {
  data.id = 11;
  console.log("desde actions", data);
  axios.post(`${url}/altaPersona`, data);
};
