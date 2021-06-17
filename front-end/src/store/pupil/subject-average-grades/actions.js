import {
  PUPIL_SUBJECT_AVERAGE_GRADE_ERROR,
  PUPIL_SUBJECT_AVERAGE_GRADE_FETCHED,
  PUPIL_SUBJECT_AVERAGE_GRADE_LOADING,
} from "./types";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        name: "ABC",
        average: 2.5,
      },
      {
        id: "2",
        name: "ABC",
        average: 2.5,
      },
      {
        id: "3",
        name: "ABC",
        average: 2.5,
      },
    ]);
  }, 3000);
});

export const fetchingSubjectAverageGrade = (userId) => {
  return async (dispatch) => {
    dispatch({
      type: PUPIL_SUBJECT_AVERAGE_GRADE_LOADING,
    });

    try {
      const all = await promise;
      dispatch({
        type: PUPIL_SUBJECT_AVERAGE_GRADE_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: PUPIL_SUBJECT_AVERAGE_GRADE_ERROR,
      });
    }
  };
};
