import {
  PUPIL_AUTH_ACTION_ERROR,
  PUPIL_AUTH_ACTION_PENDING,
  PUPIL_AUTH_ACTION_SIGN_IN,
  PUPIL_AUTH_ACTION_SIGN_OUT,
} from "./types";
import { USER_ROUTES } from "../../../routes/meta-data";

let logoutTimer;

function exampleApi(data, duration = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, duration);
  });
}

export function pupilSignOut() {
  localStorage.removeItem("pupilData");
  clearTimeout(logoutTimer);
  return {
    type: PUPIL_AUTH_ACTION_SIGN_OUT,
  };
}

export function pupilAuthTimeout(duration) {
  return (dispatch) => {
    logoutTimer = setTimeout(() => {
      dispatch(pupilSignOut());
    }, duration);
  };
}

export function pupilSignIn(username, password, push) {
  return async (dispatch) => {
    dispatch({
      type: PUPIL_AUTH_ACTION_PENDING,
    });
    try {
      const signOutTime = Date.now() + 6000 * 20;
      const data = await exampleApi({
        id: Date.now().toString(),
        pupilId: Date.now().toString(),
        forename: "x",
        surname: "y",
        username: "xy",
        role: "pupil",
        expiration: new Date(signOutTime).toISOString(),
        token: "Bearer ",
      });
      localStorage.setItem("pupilData", JSON.stringify(data));
      dispatch({
        type: PUPIL_AUTH_ACTION_SIGN_IN,
        pupil: data,
      });
      dispatch(pupilAuthTimeout(signOutTime - Date.now()));
      push(USER_ROUTES.home.path);
    } catch (e) {
      console.log("Sign In Error", e);
      dispatch({
        type: PUPIL_AUTH_ACTION_ERROR,
        errors: "something went wrong",
      });
    }
  };
}

export function pupilAutoSignIn() {
  return (dispatch) => {
    const localData = JSON.parse(localStorage.getItem("pupilData"));
    if (localData && localData.token && localData.expiration) {
      const expireTime = new Date(localData.expiration);
      if (expireTime <= new Date()) {
        dispatch(pupilSignOut());
      } else {
        dispatch({
          type: PUPIL_AUTH_ACTION_SIGN_IN,
          pupil: localData,
        });
        dispatch(pupilAuthTimeout(expireTime.getTime() - new Date().getTime()));
      }
    } else {
      dispatch(pupilSignOut());
    }
  };
}
