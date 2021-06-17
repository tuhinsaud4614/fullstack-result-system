import {
  PUPIL_SUBJECT_TEST_GRADE_ERROR,
  PUPIL_SUBJECT_TEST_GRADE_FETCHED,
  PUPIL_SUBJECT_TEST_GRADE_LOADING,
} from "./types";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case PUPIL_SUBJECT_TEST_GRADE_LOADING:
      return {
        ...state,
        status: "loading",
      };
    case PUPIL_SUBJECT_TEST_GRADE_ERROR:
      return {
        data: [],
        status: "complete",
        error: "Something went wrong",
      };
    case PUPIL_SUBJECT_TEST_GRADE_FETCHED:
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
