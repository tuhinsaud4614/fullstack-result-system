import axios from "axios";

import { errorsGenerator } from "../../../shared/utils";
import {
  ADMIN_USERS_ADD,
  ADMIN_USERS_DELETE,
  ADMIN_USERS_EDIT,
  ADMIN_USERS_ERROR,
  ADMIN_USERS_FETCHED,
  ADMIN_USERS_LOADING,
  ADMIN_USERS_REMOVE_ERROR,
} from "./types";

export const fetchingUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_USERS_LOADING,
      for: "fetched",
    });

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_HOST_NAME}/users`
      );
      if (res.status === 200) {
        dispatch({
          type: ADMIN_USERS_FETCHED,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: ADMIN_USERS_ERROR,
          for: "fetched",
          messages: ["User fetching failed"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "fetched",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const addUser = (username, forename, surname, role, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/users`,
        {
          user_name: username,
          fname: forename,
          lname: surname,
          role: role,
          password: password,
        }
      );
      if (res.status === 201) {
        dispatch({
          type: ADMIN_USERS_ADD,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: ADMIN_USERS_ERROR,
          for: "add",
          messages: ["User creation failed!"],
        });
      }
      
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "add",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const userErrorRemove = (closeFor) => {
  return {
    type: ADMIN_USERS_REMOVE_ERROR,
    closeFor: closeFor,
  };
};

export const editUser = (id, username, forename, surname, password) => {
  return async (dispatch) => {
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: ADMIN_USERS_EDIT,
        payload: { id, username, forename, surname, password },
      });
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "edit",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_USERS_LOADING,
        for: "delete",
      });
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: ADMIN_USERS_DELETE,
        userId: userId,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "delete",
        messages: errorsGenerator(error),
      });
    }
  };
};
