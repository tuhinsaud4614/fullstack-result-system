import {
  TEACHER_AVERAGE_GRADE_ERROR,
  TEACHER_AVERAGE_GRADE_FETCHED,
  TEACHER_AVERAGE_GRADE_LOADING,
} from "./types";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TEACHER_AVERAGE_GRADE_LOADING:
      return {
        data: [],
        status: "loading",
        error: null,
      };
    case TEACHER_AVERAGE_GRADE_ERROR:
      return {
        data: [],
        status: "complete",
        error: "Something went wrong",
      };
    case TEACHER_AVERAGE_GRADE_FETCHED:
      return {
        data: action.payload,
        status: "complete",
        error: null,
      };
    default:
      return state;
  }
}

export default reducer;
