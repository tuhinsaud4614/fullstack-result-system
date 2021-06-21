import {
  ADMIN_CLASS_PUPIL_OPTIONS_ERROR,
  ADMIN_CLASS_PUPIL_OPTIONS_FETCHED,
  ADMIN_CLASS_PUPIL_OPTIONS_LOADING,
} from "./types";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        name: "x",
        value: false,
        status: true,
      },
      {
        id: "2",
        name: "y",
        value: false,
        status: false,
      },
      {
        id: "3",
        name: "z",
        value: false,
        status: true,
      },
      {
        id: "4",
        name: "a",
        value: false,
        status: true,
      },
      {
        id: "5",
        name: "b",
        value: false,
        status: false,
      },
    ]);
  }, 3000);
});

export const fetchingPupilOptions = () => {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_CLASS_PUPIL_OPTIONS_LOADING,
    });

    try {
      const all = await promise;
      dispatch({
        type: ADMIN_CLASS_PUPIL_OPTIONS_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_CLASS_PUPIL_OPTIONS_ERROR,
      });
    }
  };
};
