import { GET_ORDERS, ADD_ORDER } from "./type";

export const getOrders = (data) => (dispatch) => {
   data &&
      dispatch({
         type: GET_ORDERS,
         payload: data && data,
      });
};

export const addOrder = (data) => (dispatch) => {
   console.log(data);
   data &&
      dispatch({
         type: ADD_ORDER,
         payload: data && data,
      });
};
