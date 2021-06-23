import axios from "axios";

import { errorsGenerator } from "../../../shared/utils";
import {
  ADMIN_SUBJECTS_ADD,
  ADMIN_SUBJECTS_DELETE,
  ADMIN_SUBJECTS_EDIT,
  ADMIN_SUBJECTS_ERROR,
  ADMIN_SUBJECTS_FETCHED,
  ADMIN_SUBJECTS_LOADING,
  ADMIN_SUBJECTS_REMOVE_ERROR,
} from "./types";

export const fetchingSubjects = () => {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_SUBJECTS_LOADING,
      for: "fetched",
    });

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_HOST_NAME}/subject/index`
      );
      if (res.status === 200) {
        dispatch({
          type: ADMIN_SUBJECTS_FETCHED,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: ADMIN_SUBJECTS_ERROR,
          for: "fetched",
          messages: ["Classes fetching failed"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_SUBJECTS_ERROR,
        for: "fetched",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const addSubject = (name, teacherId, className) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/subject/create/store`,
        {
          name: name,
          teacher_id: teacherId,
          class_name: className,
        }
      );
      if (res.status === 201) {
        dispatch({
          type: ADMIN_SUBJECTS_ADD,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: ADMIN_SUBJECTS_ERROR,
          for: "add",
          messages: ["Subject creation failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_SUBJECTS_ERROR,
        for: "add",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const userErrorRemove = (closeFor) => {
  return {
    type: ADMIN_SUBJECTS_REMOVE_ERROR,
    closeFor: closeFor,
  };
};

export const editSubject = (id, name, className, teacher, onHide) => {
  return async (dispatch) => {
    try {
      const obj = {
        name: name,
        class_name: className,
        teacher_id: teacher,
      };

      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/subject/update/${id}`,
        obj
      );
      if (res.status === 200 && res.data.data) {
        dispatch({
          type: ADMIN_SUBJECTS_EDIT,
          payload: res.data.data,
        });
        onHide();
      } else {
        dispatch({
          type: ADMIN_SUBJECTS_ERROR,
          for: "edit",
          messages: ["Subject update failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_SUBJECTS_ERROR,
        for: "edit",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const deleteSubject = (subjectId, onHide) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_SUBJECTS_LOADING,
        for: "delete",
      });
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/subject/delete/${subjectId}`
      );

      if (res.status === 200) {
        dispatch({
          type: ADMIN_SUBJECTS_DELETE,
          id: subjectId,
        });
        onHide();
      } else {
        dispatch({
          type: ADMIN_SUBJECTS_ERROR,
          for: "delete",
          messages: ["Class delete failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_SUBJECTS_ERROR,
        for: "delete",
        messages: errorsGenerator(error),
      });
    }
  };
};
