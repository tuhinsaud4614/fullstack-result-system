import axios from "axios";

import { errorsGenerator } from "../../../shared/utils";
import {
  ADMIN_CLASSES_ADD,
  ADMIN_CLASSES_DELETE,
  ADMIN_CLASSES_EDIT,
  ADMIN_CLASSES_ERROR,
  ADMIN_CLASSES_FETCHED,
  ADMIN_CLASSES_LOADING,
  ADMIN_CLASSES_REMOVE_ERROR,
} from "./types";

export const fetchingClasses = () => {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_CLASSES_LOADING,
      for: "fetched",
    });

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_HOST_NAME}/class/index`
      );
      if (res.status === 200) {
        dispatch({
          type: ADMIN_CLASSES_FETCHED,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: ADMIN_CLASSES_ERROR,
          for: "fetched",
          messages: ["Classes fetching failed"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_CLASSES_ERROR,
        for: "fetched",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const addClass = (name) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/class/create/store`,
        {
          name: name,
        }
      );
      if (res.status === 201) {
        dispatch({
          type: ADMIN_CLASSES_ADD,
          payload: res.data.class_data,
        });
      } else {
        dispatch({
          type: ADMIN_CLASSES_ERROR,
          for: "add",
          messages: ["Class creation failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_CLASSES_ERROR,
        for: "add",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const userErrorRemove = (closeFor) => {
  return {
    type: ADMIN_CLASSES_REMOVE_ERROR,
    closeFor: closeFor,
  };
};

export const editUser = (id, username, forename, surname, password, onHide) => {
  return async (dispatch) => {
    try {
      const obj = {
        fname: forename,
        lname: surname,
        user_name: username,
      };

      if (password) {
        obj.password = password;
      }
      const res = await axios.put(
        `${process.env.REACT_APP_API_HOST_NAME}/users/${id}`,
        obj
      );
      if (res.status === 200) {
        dispatch({
          type: ADMIN_CLASSES_EDIT,
          payload: res.data.data,
        });
        onHide();
      } else {
        dispatch({
          type: ADMIN_CLASSES_ERROR,
          for: "edit",
          messages: ["User update failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_CLASSES_ERROR,
        for: "edit",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const deleteClass = (classId, onHide) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_CLASSES_LOADING,
        for: "delete",
      });
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/class/delete/${classId}`
      );
      
      if (res.status === 200) {
        dispatch({
          type: ADMIN_CLASSES_DELETE,
          classId: classId,
        });
        onHide();
      } else {
        dispatch({
          type: ADMIN_CLASSES_ERROR,
          for: "delete",
          messages: ["Class delete failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_CLASSES_ERROR,
        for: "delete",
        messages: errorsGenerator(error),
      });
    }
  };
};
