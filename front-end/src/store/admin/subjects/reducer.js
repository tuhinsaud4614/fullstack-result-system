import {
  ADMIN_SUBJECTS_ADD,
  ADMIN_SUBJECTS_DELETE,
  ADMIN_SUBJECTS_EDIT,
  ADMIN_SUBJECTS_ERROR,
  ADMIN_SUBJECTS_FETCHED,
  ADMIN_SUBJECTS_LOADING,
  ADMIN_SUBJECTS_REMOVE_ERROR,
} from "./types";

const initialState = {
  data: [],
  status: { fetched: "idle", delete: "idle" },
  error: { fetched: null, add: null, edit: null, delete: null },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_SUBJECTS_LOADING:
      return {
        ...state,
        status: { ...state.status, [action.for]: "loading" },
      };
    case ADMIN_SUBJECTS_ERROR:
      return {
        ...state,
        status: { ...state.status, [action.for]: "complete" },
        error: { ...state.error, [action.for]: action.messages },
      };
    case ADMIN_SUBJECTS_REMOVE_ERROR:
      return {
        ...state,
        error: { ...state.error, [action.closeFor]: null },
      };
    case ADMIN_SUBJECTS_FETCHED:
      return {
        data: action.payload,
        status: { ...state.status, fetched: "complete" },
        error: { ...state.error, fetched: null },
      };
    case ADMIN_SUBJECTS_ADD:
      return {
        ...state,
        data: [action.payload, ...state.data],
        error: { ...state.error, add: null },
      };
    case ADMIN_SUBJECTS_EDIT:
      const updatedUserIndex = state.data.findIndex((d) => d.id === action.payload.id);
      const updatedUsers = JSON.parse(JSON.stringify(state.data));
      if(updatedUserIndex >= 0) {
        updatedUsers[updatedUserIndex] = action.payload;
      }
      return {
        ...state,
        data: updatedUsers,
        error: { ...state.error, edit: null },
      };
    case ADMIN_SUBJECTS_DELETE:
      return {
        data: state.data.filter((d) => d.id !== action.id),
        status: { ...state.status, delete: "complete" },
        error: { ...state.error, delete: null },
      };
    default:
      return state;
  }
}

export default reducer;
