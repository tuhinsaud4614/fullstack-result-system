import {
  ADMIN_AUTH_ACTION_ERROR,
  ADMIN_AUTH_ACTION_PENDING,
  ADMIN_AUTH_ACTION_SIGN_IN,
  ADMIN_AUTH_ACTION_SIGN_OUT,
} from "./types";

const initialState = {
  user: {
    id: "",
    forename: "",
    surname: "",
    username: "",
    expiration: "",
    token: "",
  },

  loading: "idle",
  errors: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN_AUTH_ACTION_PENDING:
      return {
        ...state,
        loading: "loading",
        error: null,
      };
    case ADMIN_AUTH_ACTION_ERROR:
      return {
        ...state,
        loading: "complete",
        errors: action.error,
      };
    case ADMIN_AUTH_ACTION_SIGN_OUT:
      return {
        user: {
          id: "",
          name: "",
          email: "",
          avatar: "",
          token: "",
          expiration: "",
        },
        loading: "complete",
        errors: null,
      };
    case ADMIN_AUTH_ACTION_SIGN_IN:
      return {
        user: { ...action.user },
        loading: "complete",
        errors: null,
      };
    default:
      return state;
  }
}

export default reducer;
