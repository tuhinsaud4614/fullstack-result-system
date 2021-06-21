import {
  ADMIN_CLASS_PUPIL_OPTIONS_ERROR,
  ADMIN_CLASS_PUPIL_OPTIONS_FETCHED,
  ADMIN_CLASS_PUPIL_OPTIONS_LOADING,
} from "./types";

const initialState = {
  options: null,
  status: "idle",
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_CLASS_PUPIL_OPTIONS_LOADING:
      return {
        options: null,
        status: "loading",
        error: false,
      };
    case ADMIN_CLASS_PUPIL_OPTIONS_ERROR:
      return {
        options: null,
        status: "complete",
        error: true,
      };
    case ADMIN_CLASS_PUPIL_OPTIONS_FETCHED:
      return {
        options: action.payload,
        status: "complete",
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
