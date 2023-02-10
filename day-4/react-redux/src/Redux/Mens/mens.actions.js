import * as types from "./mens.actionTypes";
import axios from "axios";

export const getMensData = (search) => (dispatch) => {
  dispatch({ type: types.GET_MENS_DATA_LOADING });

  if (search) {
    axios
      .get(`http://localhost:8080/mens?q=${search}`)
      .then((res) => {
        dispatch({ type: types.GET_MENS_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_MENS_DATA_FAILURE });
      });
  } else {
    axios
      .get(`http://localhost:8080/mens`)
      .then((res) => {
        dispatch({ type: types.GET_MENS_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: types.GET_MENS_DATA_FAILURE });
      });
  }
};
