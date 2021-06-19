import {
  ADMIN_AUTH_ACTION_ERROR,
  ADMIN_AUTH_ACTION_PENDING,
  ADMIN_AUTH_ACTION_SIGN_IN,
  ADMIN_AUTH_ACTION_SIGN_OUT,
} from "./types";
import { ADMIN_ROUTES } from "../../../routes/meta-data";

let logoutTimer;

function exampleApi(data, duration = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, duration);
  });
}

export function adminSignOut() {
  localStorage.removeItem("adminData");
  clearTimeout(logoutTimer);
  return {
    type: ADMIN_AUTH_ACTION_SIGN_OUT,
  };
}

export function adminAuthTimeout(duration) {
  return (dispatch) => {
    logoutTimer = setTimeout(() => {
      dispatch(adminSignOut());
    }, duration);
  };
}

export function adminSignIn(username, password, push) {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_AUTH_ACTION_PENDING,
    });
    try {
      const signOutTime = Date.now() + 6000 * 20;
      const data = await exampleApi({
        id: Date.now().toString(),
        adminId: Date.now().toString(),
        forename: "x",
        surname: "y",
        username: "xy",
        role: "admin",
        expiration: new Date(signOutTime).toISOString(),
        token: "Bearer ",
      });
      localStorage.setItem("adminData", JSON.stringify(data));
      dispatch({
        type: ADMIN_AUTH_ACTION_SIGN_IN,
        admin: data,
      });
      dispatch(adminAuthTimeout(signOutTime - Date.now()));
      push(ADMIN_ROUTES.dashboard.path);
    } catch (e) {
      console.log("Sign In Error", e);
      dispatch({
        type: ADMIN_AUTH_ACTION_ERROR,
        errors: "something went wrong",
      });
    }
  };
}

export function adminAutoSignIn() {
  return (dispatch) => {
    const localData = JSON.parse(localStorage.getItem("adminData"));
    if (localData && localData.token && localData.expiration) {
      const expireTime = new Date(localData.expiration);
      if (expireTime <= new Date()) {
        dispatch(adminSignOut());
      } else {
        dispatch({
          type: ADMIN_AUTH_ACTION_SIGN_IN,
          admin: localData,
        });
        dispatch(adminAuthTimeout(expireTime.getTime() - new Date().getTime()));
      }
    } else {
      dispatch(adminSignOut());
    }
  };
}
