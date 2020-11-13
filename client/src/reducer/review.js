import { GET_REVIEW, ADD_REVIEW } from "../action/type";

const initialState = {
   reviews: [],
};

export default (state = initialState, action) => {
   const { payload, type } = action;
   switch (type) {
      case GET_REVIEW:
         return {
            ...state,
            reviews: payload,
         };
      case ADD_REVIEW:
         return {
            ...state,
            reviews: [payload, ...state.reviews],
         };
      default:
         return state;
   }
};
