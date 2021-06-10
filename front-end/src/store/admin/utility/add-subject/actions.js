import {
  UTILITY_SUBJECT_OPTIONS_ERROR,
  UTILITY_SUBJECT_OPTIONS_FETCHED,
  UTILITY_SUBJECT_OPTIONS_LOADING,
} from "./types";

const x = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      { name: "Red", value: "red" },
      { name: "Green", value: "green" },
    ]);
  }, 3000);
});

const y = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      { name: "Yellow", value: "yellow" },
      { name: "Blue", value: "blue" },
    ]);
  }, 2000);
});

export const fetchingOptions = () => {
  return async (dispatch) => {
    dispatch({
      type: UTILITY_SUBJECT_OPTIONS_LOADING,
    });

    try {
      const all = await Promise.all([x, y]);
      if (!Array.isArray(all[0]) || !Array.isArray(all[1])) {
        dispatch({
          type: UTILITY_SUBJECT_OPTIONS_ERROR,
        });
      } else {
        dispatch({
          type: UTILITY_SUBJECT_OPTIONS_FETCHED,
          classes: all[0],
          teachers: all[1],
        });
      }
    } catch (error) {
      dispatch({
        type: UTILITY_SUBJECT_OPTIONS_ERROR,
      });
    }
  };
};
