import { GET_SERVICES } from "../action/type";

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
      default:
         return state;
   }
};
