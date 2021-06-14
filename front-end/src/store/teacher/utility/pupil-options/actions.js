import {
  TEACHER_UTILITY_PUPIL_OPTIONS_ERROR,
  TEACHER_UTILITY_PUPIL_OPTIONS_FETCHED,
  TEACHER_UTILITY_PUPIL_OPTIONS_LOADING,
} from "./types";

const x = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      { name: "Red", value: "red" },
      { name: "Green", value: "green" },
    ]);
  }, 3000);
});

export const fetchingPupilOptions = () => {
  return async (dispatch) => {
    dispatch({
      type: TEACHER_UTILITY_PUPIL_OPTIONS_LOADING,
    });

    try {
      const all = await x;
      dispatch({
        type: TEACHER_UTILITY_PUPIL_OPTIONS_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_UTILITY_PUPIL_OPTIONS_ERROR,
      });
    }
  };
};
