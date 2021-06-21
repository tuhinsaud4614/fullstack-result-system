import {
  ADMIN_USERS_ADD,
  ADMIN_USERS_DELETE,
  ADMIN_USERS_EDIT,
  ADMIN_USERS_ERROR,
  ADMIN_USERS_FETCHED,
  ADMIN_USERS_LOADING,
  ADMIN_USERS_REMOVE_ERROR,
} from "./types";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res([
      {
        id: "1",
        username: "ABC",
        forename: "x",
        surname: "y",
        role: "pupil",
      },
      {
        id: "2",
        username: "ABC",
        forename: "x",
        surname: "y",
        role: "pupil",
      },
      {
        id: "3",
        username: "ABC",
        forename: "x",
        surname: "y",
        role: "pupil",
      },
    ]);
  }, 3000);
});

export const fetchingUsers = () => {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_USERS_LOADING,
      for: "fetched",
    });

    try {
      const all = await promise;
      dispatch({
        type: ADMIN_USERS_FETCHED,
        payload: all,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "fetched",
      });
    }
  };
};

export const addUser = (username, forename, surname, role, password) => {
  return async (dispatch) => {
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: ADMIN_USERS_ADD,
        payload: {
          id: Date.now().toString(),
          username,
          forename,
          surname,
          role,
          password,
        },
      });
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "add",
      });
    }
  };
};

export const userErrorRemove = (closeFor) => {
  return {
    type: ADMIN_USERS_REMOVE_ERROR,
    closeFor: closeFor,
  };
};

export const editUser = (id, username, forename, surname, password) => {
  return async (dispatch) => {
    try {
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: ADMIN_USERS_EDIT,
        payload: { id, username, forename, surname, password },
      });
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "edit",
      });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADMIN_USERS_LOADING,
        for: "delete",
      });
      await new Promise((res, rej) => {
        setTimeout(() => {
          res();
        }, 3000);
      });
      dispatch({
        type: ADMIN_USERS_DELETE,
        userId: userId,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_USERS_ERROR,
        for: "delete",
      });
    }
  };
};
