// yogiji
import axios from "axios";
import * as types from "./auth.actionTypes";
import { setItem } from "../../Utils/storage";

export const loginUser = (credentials) => (dispatch) => {
  dispatch({ type: types.LOGIN_LOADING });
  return axios
    .post("https://reqres.in/api/login", credentials)
    .then((res) => {
      setItem("token", res.data.token);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: { username: "Vicky Kumar - Not a senate" },
      });
      return true;
    })
    .catch((err) => {
      dispatch({ type: types.LOGIN_FAILURE });
      return false;
    });
};
