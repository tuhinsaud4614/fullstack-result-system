import {
  UTILITY_SUBJECT_OPTIONS_ERROR,
  UTILITY_SUBJECT_OPTIONS_FETCHED,
  UTILITY_SUBJECT_OPTIONS_LOADING,
} from "./types";

const initialState = {
  classes: null,
  teachers: null,
  status: "idle",
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UTILITY_SUBJECT_OPTIONS_LOADING:
      return {
        classes: null,
        teachers: null,
        status: "loading",
        error: false,
      };
    case UTILITY_SUBJECT_OPTIONS_ERROR:
      return {
        classes: null,
        teachers: null,
        status: "complete",
        error: true,
      };
    case UTILITY_SUBJECT_OPTIONS_FETCHED:
      return {
        classes: action.classes,
        teachers: action.teachers,
        status: "complete",
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
