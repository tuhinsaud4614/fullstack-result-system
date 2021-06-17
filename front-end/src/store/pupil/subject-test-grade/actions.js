import {
  PUPIL_SUBJECT_TEST_GRADE_ERROR,
  PUPIL_SUBJECT_TEST_GRADE_FETCHED,
  PUPIL_SUBJECT_TEST_GRADE_LOADING,
} from "./types";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        subjectName: "XYZ",
        name: "ABC",
        grade: 2.5,
      },
      {
        id: "2",
        subjectName: "XYZ",
        name: "ABC",
        grade: 2.5,
      },
      {
        id: "3",
        subjectName: "XYZ",
        name: "ABC",
        grade: 2.5,
      },
    ]);
  }, 3000);
});

export const fetchingSubjectTestGrade = (userId, subjectId) => {
  return async (dispatch) => {
    dispatch({
      type: PUPIL_SUBJECT_TEST_GRADE_LOADING,
    });

    try {
      const all = await promise;
      dispatch({
        type: PUPIL_SUBJECT_TEST_GRADE_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: PUPIL_SUBJECT_TEST_GRADE_ERROR,
      });
    }
  };
};
