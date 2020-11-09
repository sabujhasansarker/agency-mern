import { GET_SERVICES, GET_SERVICE } from "../action/type";

const initialState = {
   services: [],
   service: null,
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_SERVICES:
         return {
            ...state,
            services: payload,
         };
      case GET_SERVICE:
         return {
            ...state,
            service: payload,
         };
      default:
         return state;
   }
};
