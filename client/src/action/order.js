import { GET_ORDERS } from "./type";

export const getOrders = (data) => (dispatch) => {
   data &&
      dispatch({
         type: GET_ORDERS,
         payload: data && data,
      });
};
