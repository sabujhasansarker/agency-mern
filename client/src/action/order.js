import { GET_ORDERS } from "./type";

export const getOrders = (data) => (dispatch) => {
   dispatch({
      type: GET_ORDERS,
      payload: data && data,
   });
};
