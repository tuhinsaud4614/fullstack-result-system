import axios from "axios";

import { errorsGenerator } from "../../../shared/utils";
import {
  TEACHER_TEST_PUPIL_GRADE_ADD,
  TEACHER_TEST_PUPIL_GRADE_DELETE,
  TEACHER_TEST_PUPIL_GRADE_EDIT,
  TEACHER_TEST_PUPIL_GRADE_ERROR,
  TEACHER_TEST_PUPIL_GRADE_FETCHED,
  TEACHER_TEST_PUPIL_GRADE_FILE_UPLOAD,
  TEACHER_TEST_PUPIL_GRADE_LOADING,
  TEACHER_TEST_PUPIL_GRADE_REMOVE_ERROR,
} from "./types";

export const fetchingPupilTestGrade = (subjectId, testId) => {
  return async (dispatch) => {
    dispatch({
      type: TEACHER_TEST_PUPIL_GRADE_LOADING,
      for: "fetched",
    });

    try {
      // const res = await axios.get(
      //   `${process.env.REACT_APP_API_HOST_NAME}/result/index/{teacherId}/{subjectId}/{testId}`
      // );
      const res = await axios.get(
        `${process.env.REACT_APP_API_HOST_NAME}/result/index/16/${subjectId}/${testId}`
      );
      if (res.status === 200) {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_FETCHED,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_ERROR,
          for: "fetched",
          messages: ["Pupil grade's loading failed"],
        });
      }
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "fetched",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const addPupilTestGrade = (subjectId, testId, pupil, grade) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/result/create/store`,
        {
          test_id: testId,
          teacher_id: 16,
          pupil_id: pupil,
          subject_id: subjectId,
          grade: grade,
        }
      );
      if (res.status === 201) {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_ADD,
          newPupilGrade: res.data.data,
        });
      } else {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_ERROR,
          for: "add",
          messages: ["Pupil grade's adding failed"],
        });
      }
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "add",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const editPupilTestGrade = (resultId, grade, onHide) => {
  return async (dispatch) => {
    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_API_HOST_NAME}/result/update/${resultId}`,
        {
          grade: grade,
        }
      );
      if (res.status === 200) {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_EDIT,
          resultId: resultId,
          grade: grade,
        });
        onHide();
      } else {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_ERROR,
          for: "edit",
          messages: ["Pupil grade's updating failed"],
        });
      }
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "edit",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const deletePupilTestGrade = (resultId, onHide) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_LOADING,
        for: "delete",
      });
      const res = await axios.delete(
        `${process.env.REACT_APP_API_HOST_NAME}/result/delete/${resultId}`
      );
      if (res.status === 200) {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_DELETE,
          resultId: resultId,
        });
        onHide();
      } else {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_ERROR,
          for: "delete",
          messages: ["Pupil grade delete failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "delete",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const uploadPupilTestGradeFile = (subjectId, testId, file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("teacher_id", 18);
      formData.append("subject_id", subjectId);
      formData.append("test_id", testId);
      formData.append("csvFile", file);
      const res = await axios.post(
        `${process.env.REACT_APP_API_HOST_NAME}/result/upload`,
        formData
      );
      if (res.status === 201 && res.data.data) {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_FILE_UPLOAD,
          payload: res.data.data,
        });
      } else {
        dispatch({
          type: TEACHER_TEST_PUPIL_GRADE_ERROR,
          for: "fileUpload",
          messages: ["Pupil grade file upload failed!"],
        });
      }
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "fileUpload",
        messages: errorsGenerator(error),
      });
    }
  };
};

export const testPupilGradeErrorRemove = (closeFor) => {
  return {
    type: TEACHER_TEST_PUPIL_GRADE_REMOVE_ERROR,
    closeFor: closeFor,
  };
};
