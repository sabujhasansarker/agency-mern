import { GET_SERVICES } from "./type";

export const getServices = (data) => (dispatch) => {
   dispatch({
      type: GET_SERVICES,
      payload: data,
   });
};
