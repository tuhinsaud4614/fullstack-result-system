import {
  TEACHER_TEST_PUPIL_GRADE_ADD,
  TEACHER_TEST_PUPIL_GRADE_DELETE,
  TEACHER_TEST_PUPIL_GRADE_EDIT,
  TEACHER_TEST_PUPIL_GRADE_ERROR,
  TEACHER_TEST_PUPIL_GRADE_FETCHED,
  TEACHER_TEST_PUPIL_GRADE_LOADING,
} from "./types";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        forename: "ABC",
        surname: "XYZ",
        grade: 1.5,
      },
      {
        id: "2",
        forename: "ABC",
        surname: "XYZ",
        grade: 1.5,
      },
      {
        id: "3",
        forename: "ABC",
        surname: "XYZ",
        grade: 1.5,
      },
    ]);
  }, 3000);
});

export const fetchingPupilTestGrade = (subjectId, testId) => {
  return async (dispatch) => {
    dispatch({
      type: TEACHER_TEST_PUPIL_GRADE_LOADING,
      for: "fetched",
    });

    try {
      const all = await promise;
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "fetched",
      });
    }
  };
};

export const addPupilTestGrade = (subjectId, testId, pupil, grade) => {
  return async (dispatch) => {
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ADD,
        newPupilGrade: {...pupil, grade: grade},
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "add",
      });
    }
  };
};

export const editPupilTestGrade = (subjectId, testId, pupilId, grade) => {
  return async (dispatch) => {
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_EDIT,
        pupilId: pupilId,
        grade: grade,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "edit",
      });
    }
  };
};

export const deleteTest = (subjectId, testId, pupilId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_LOADING,
        for: "delete",
      });
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_DELETE,
        pupilId: pupilId,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TEST_PUPIL_GRADE_ERROR,
        for: "delete",
      });
    }
  };
};
