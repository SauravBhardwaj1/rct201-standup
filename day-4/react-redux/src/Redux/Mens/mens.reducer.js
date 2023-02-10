import * as types from "./mens.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  mens: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.GET_MENS_DATA_LOADING: {
      return { ...state, isLoading: true };
    }
    case types.GET_MENS_DATA_SUCCESS: {
      return { ...state, isLoading: false, mens: payload };
    }
    case types.GET_MENS_DATA_FAILURE: {
      return { ...state, isError: true };
    }
    default:
      return state;
  }
};
