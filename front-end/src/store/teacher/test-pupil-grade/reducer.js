import {
  TEACHER_TEST_PUPIL_GRADE_ADD,
  TEACHER_TEST_PUPIL_GRADE_DELETE,
  TEACHER_TEST_PUPIL_GRADE_EDIT,
  TEACHER_TEST_PUPIL_GRADE_ERROR,
  TEACHER_TEST_PUPIL_GRADE_FETCHED,
  TEACHER_TEST_PUPIL_GRADE_LOADING,
} from "./types";

const initialState = {
  data: [],
  status: { fetched: "idle", delete: "idle" },
  error: { fetched: null, add: null, edit: null, delete: null },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case TEACHER_TEST_PUPIL_GRADE_LOADING:
      return {
        ...state,
        status: { ...state.status, [action.for]: "loading" },
      };
    case TEACHER_TEST_PUPIL_GRADE_ERROR:
      return {
        data: [],
        status: { ...state.status, [action.for]: "complete" },
        error: { ...state.error, [action.for]: "Something went wrong" },
      };
    case TEACHER_TEST_PUPIL_GRADE_FETCHED:
      return {
        data: action.payload,
        status: { ...state.status, fetched: "complete" },
        error: { ...state.error, fetched: null },
      };
    case TEACHER_TEST_PUPIL_GRADE_ADD:
      return {
        ...state,
        data: [...state.data, action.newPupilGrade],
        error: { ...state.error, add: null },
      };
    case TEACHER_TEST_PUPIL_GRADE_EDIT:
      const fPupilGrade = state.data.find((d) => d.id === action.pupilId);
      return {
        ...state,
        data: [...state.data, { ...fPupilGrade, grade: action.grade }],
        error: { ...state.error, edit: null },
      };
    case TEACHER_TEST_PUPIL_GRADE_DELETE:
      return {
        data: state.data.filter((d) => d.id !== action.pupilId),
        status: { ...state.status, delete: "complete" },
        error: { ...state.error, delete: null },
      };
    default:
      return state;
  }
}

export default reducer;
