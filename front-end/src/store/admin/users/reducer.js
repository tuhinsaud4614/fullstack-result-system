import {
  ADMIN_USERS_ADD,
  ADMIN_USERS_DELETE,
  ADMIN_USERS_EDIT,
  ADMIN_USERS_ERROR,
  ADMIN_USERS_FETCHED,
  ADMIN_USERS_LOADING,
  ADMIN_USERS_REMOVE_ERROR,
} from "./types";

const initialState = {
  data: [],
  status: { fetched: "idle", delete: "idle" },
  error: { fetched: null, add: null, edit: null, delete: null },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_USERS_LOADING:
      return {
        ...state,
        status: { ...state.status, [action.for]: "loading" },
      };
    case ADMIN_USERS_ERROR:
      return {
        ...state,
        status: { ...state.status, [action.for]: "complete" },
        error: { ...state.error, [action.for]: "Something went wrong" },
      };
    case ADMIN_USERS_REMOVE_ERROR:
      return {
        ...state,
        error: { ...state.error, [action.closeFor]: null },
      };
    case ADMIN_USERS_FETCHED:
      return {
        data: action.payload,
        status: { ...state.status, fetched: "complete" },
        error: { ...state.error, fetched: null },
      };
    case ADMIN_USERS_ADD:
      return {
        ...state,
        data: [...state.data, action.payload],
        error: { ...state.error, add: null },
      };
    case ADMIN_USERS_EDIT:
      const fData = state.data.filter((d) => d.id !== action.payload.id);
      return {
        ...state,
        data: [...fData, action.payload],
        error: { ...state.error, edit: null },
      };
    case ADMIN_USERS_DELETE:
      return {
        data: state.data.filter((d) => d.id !== action.userId),
        status: { ...state.status, delete: "complete" },
        error: { ...state.error, delete: null },
      };
    default:
      return state;
  }
}

export default reducer;
