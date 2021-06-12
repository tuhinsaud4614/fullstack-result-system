import {
  TEACHER_AVERAGE_GRADE_ERROR,
  TEACHER_AVERAGE_GRADE_FETCHED,
  TEACHER_AVERAGE_GRADE_LOADING,
} from "./types";

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res([
//       {
//         id: "1",
//         subject: { id: "1", name: "xyz" },
//         class: { id: "1", name: "ABC" },
//         pupil: { id: "1", forename: "x", surname: "y" },
//         grade: 2.5,
//       },
//       {
//         id: "2",
//         subject: { id: "2", name: "xyz" },
//         class: { id: "2", name: "ABC" },
//         pupil: { id: "2", forename: "x", surname: "y" },
//         grade: 2.5,
//       },
//       {
//         id: "3",
//         subject: { id: "3", name: "xyz" },
//         class: { id: "3", name: "ABC" },
//         pupil: { id: "3", forename: "x", surname: "y" },
//         grade: 2.5,
//       },
//     ]);
//   }, 3000);
// });

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

export const fetchingPupilsAverageGrade = (id) => {
  return async (dispatch) => {
    dispatch({
      type: TEACHER_AVERAGE_GRADE_LOADING,
    });

    try {
      const all = await promise;
      dispatch({
        type: TEACHER_AVERAGE_GRADE_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_AVERAGE_GRADE_ERROR,
      });
    }
  };
};
