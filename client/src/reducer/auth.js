import { GET_USER } from "../action/type";

const initialState = {
   auth: null,
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_USER:
         return {
            ...state,
            auth: payload,
         };
      default:
         return state;
   }
};
