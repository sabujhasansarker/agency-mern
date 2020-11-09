import { GET_SERVICES, GET_SERVICE } from "./type";

export const getServices = (data) => (dispatch) => {
   data &&
      dispatch({
         type: GET_SERVICES,
         payload: data,
      });
};

export const getService = (data) => (dispatch) => {
   data &&
      dispatch({
         type: GET_SERVICE,
         payload: data,
      });
};
