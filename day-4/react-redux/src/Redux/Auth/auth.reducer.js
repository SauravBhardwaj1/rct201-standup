import { getItem } from "../../Utils/storage";
import * as types from "./auth.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  token: getItem("token") || "",
  isAuth: getItem("token") ? true : false,
  username: "",
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.LOGIN_LOADING: {
      return { ...state, isLoading: true };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        username: payload.username,
      };
    }
    case types.LOGIN_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default:
      return state;
  }
};
