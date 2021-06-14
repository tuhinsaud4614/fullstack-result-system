import {
  TEACHER_UTILITY_PUPIL_OPTIONS_ERROR,
  TEACHER_UTILITY_PUPIL_OPTIONS_FETCHED,
  TEACHER_UTILITY_PUPIL_OPTIONS_LOADING,
} from "./types";

const initialState = {
  classes: null,
  data: null,
  status: "idle",
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEACHER_UTILITY_PUPIL_OPTIONS_LOADING:
      return {
        data: null,
        status: "loading",
        error: false,
      };
    case TEACHER_UTILITY_PUPIL_OPTIONS_ERROR:
      return {
        data: null,
        status: "complete",
        error: true,
      };
    case TEACHER_UTILITY_PUPIL_OPTIONS_FETCHED:
      return {
        data: action.payload,
        status: "complete",
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
