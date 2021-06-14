import {
  TEACHER_ASSIGNED_SUBJECTS_ERROR,
  TEACHER_ASSIGNED_SUBJECTS_FETCHED,
  TEACHER_ASSIGNED_SUBJECTS_LOADING,
} from "./types";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        name: "xyz",
        className: "ABC",
      },
      {
        id: "2",
        name: "xyz",
        className: "ABC",
      },
      {
        id: "3",
        name: "xyz",
        className: "ABC",
      },
    ]);
  }, 3000);
});

export const fetchingAssignedSubject = () => {
  return async (dispatch) => {
    dispatch({
      type: TEACHER_ASSIGNED_SUBJECTS_LOADING,
    });

    try {
      const all = await promise;
      dispatch({
        type: TEACHER_ASSIGNED_SUBJECTS_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_ASSIGNED_SUBJECTS_ERROR,
      });
    }
  };
};
