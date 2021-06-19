import {
  TEACHER_AUTH_ACTION_ERROR,
  TEACHER_AUTH_ACTION_PENDING,
  TEACHER_AUTH_ACTION_SIGN_IN,
  TEACHER_AUTH_ACTION_SIGN_OUT,
} from "./types";
import { TEACHER_ROUTES } from "../../../routes/meta-data";

let logoutTimer;

function exampleApi(data, duration = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, duration);
  });
}

export function teacherSignOut() {
  localStorage.removeItem("teacherData");
  clearTimeout(logoutTimer);
  return {
    type: TEACHER_AUTH_ACTION_SIGN_OUT,
  };
}

export function teacherAuthTimeout(duration) {
  return (dispatch) => {
    logoutTimer = setTimeout(() => {
      dispatch(teacherSignOut());
    }, duration);
  };
}

export function teacherSignIn(username, password, push) {
  return async (dispatch) => {
    dispatch({
      type: TEACHER_AUTH_ACTION_PENDING,
    });
    try {
      const signOutTime = Date.now() + 6000 * 20;
      const data = await exampleApi({
        id: Date.now().toString(),
        teacherId: Date.now().toString(),
        forename: "x",
        surname: "y",
        username: "xy",
        role: "teacher",
        expiration: new Date(signOutTime).toISOString(),
        token: "Bearer ",
      });
      localStorage.setItem("teacherData", JSON.stringify(data));
      dispatch({
        type: TEACHER_AUTH_ACTION_SIGN_IN,
        teacher: data,
      });
      dispatch(teacherAuthTimeout(signOutTime - Date.now()));
      push(TEACHER_ROUTES.home.path);
    } catch (e) {
      console.log("Sign In Error", e);
      dispatch({
        type: TEACHER_AUTH_ACTION_ERROR,
        errors: "something went wrong",
      });
    }
  };
}

export function teacherAutoSignIn() {
  return (dispatch) => {
    const localData = JSON.parse(localStorage.getItem("teacherData"));
    if (localData && localData.token && localData.expiration) {
      const expireTime = new Date(localData.expiration);
      if (expireTime <= new Date()) {
        dispatch(teacherSignOut());
      } else {
        dispatch({
          type: TEACHER_AUTH_ACTION_SIGN_IN,
          teacher: localData,
        });
        dispatch(teacherAuthTimeout(expireTime.getTime() - new Date().getTime()));
      }
    } else {
      dispatch(teacherSignOut());
    }
  };
}
