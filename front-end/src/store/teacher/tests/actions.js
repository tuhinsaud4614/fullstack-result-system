import {
  TEACHER_TESTS_ADD,
  TEACHER_TESTS_DELETE,
  TEACHER_TESTS_EDIT,
  TEACHER_TESTS_ERROR,
  TEACHER_TESTS_FETCHED,
  TEACHER_TESTS_LOADING,
} from "./types";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        name: "ABC",
        date: "2021-06-15",
      },
      {
        id: "2",
        name: "ABC",
        date: "2021-05-15",
      },
      {
        id: "3",
        name: "ABC",
        date: "2021-05-15",
      },
    ]);
  }, 3000);
});

export const fetchingTests = (subjectId) => {
  return async (dispatch) => {
    dispatch({
      type: TEACHER_TESTS_LOADING,
      for: "fetched",
    });

    try {
      const all = await promise;
      dispatch({
        type: TEACHER_TESTS_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TESTS_ERROR,
        for: "fetched",
      });
    }
  };
};

export const addTest = (subjectId, test) => {
  return async (dispatch) => {
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: TEACHER_TESTS_ADD,
        newTest: test,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TESTS_ERROR,
        for: "add",
      });
    }
  };
};

export const editTest = (subjectId, test) => {
  return async (dispatch) => {
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: TEACHER_TESTS_EDIT,
        editTest: test,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TESTS_ERROR,
        for: "edit",
      });
    }
  };
};

export const deleteTest = (subjectId, testId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: TEACHER_TESTS_LOADING,
        for: "delete",
      });
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: TEACHER_TESTS_DELETE,
        testId: testId,
      });
    } catch (error) {
      dispatch({
        type: TEACHER_TESTS_ERROR,
        for: "delete",
      });
    }
  };
};
