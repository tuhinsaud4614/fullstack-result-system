import axios from "axios";

import { errorsGenerator } from "../../../../shared/utils";
import {
  ADMIN_CLASS_PUPIL_OPTIONS_ERROR,
  ADMIN_CLASS_PUPIL_OPTIONS_FETCHED,
  ADMIN_CLASS_PUPIL_OPTIONS_LOADING,
} from "./types";


export const fetchingPupilOptions = () => {
  return async (dispatch) => {
    dispatch({
      type: ADMIN_CLASS_PUPIL_OPTIONS_LOADING,
    });

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_HOST_NAME}/users/pupil`
      );
      if (res.status === 200) {
        dispatch({
          type: ADMIN_CLASS_PUPIL_OPTIONS_FETCHED,
          payload: res.data.data,
        });
        
      } else {
        dispatch({
          type: ADMIN_CLASS_PUPIL_OPTIONS_ERROR,
          messages: ["Associate pupils not found"],
        });
      }
    } catch (error) {
      dispatch({
        type: ADMIN_CLASS_PUPIL_OPTIONS_ERROR,
        messages: errorsGenerator(error),
      });
    }
  };
};