import { GET_ORDERS, ADD_ORDER } from "../action/type";

const initialState = {
   orders: [],
   order: null,
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_ORDERS:
         return {
            ...state,
            orders: payload,
         };
      case ADD_ORDER:
         return {
            ...state,
            orders: [payload, ...state.orders],
         };
      default:
         return state;
   }
};
