import { GET_ORDERS } from "../action/type";

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
      default:
         return state;
   }
};
