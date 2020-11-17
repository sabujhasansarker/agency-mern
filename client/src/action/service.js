import { GET_SERVICES, GET_SERVICE, ADD_SERVICE, DELETE_SERVICE } from "./type";

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

export const addService = (data) => (dispatch) => {
   data &&
      dispatch({
         type: ADD_SERVICE,
         payload: data,
      });
};

export const deleteService = (id) => (dispatch) => {
   id &&
      dispatch({
         type: DELETE_SERVICE,
         payload: id,
      });
};
