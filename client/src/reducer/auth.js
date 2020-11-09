import { GET_USER, GET_ADMINS } from "../action/type";

const initialState = {
   auth: null,
   admins: [],
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_USER:
         return {
            ...state,
            auth: payload,
         };
      case GET_ADMINS:
         return {
            ...state,
            admins: payload,
         };
      default:
         return state;
   }
};
