import { GET_REVIEW } from "./type";

export const getReviews = (data) => (dispatch) => {
   data &&
      dispatch({
         type: GET_REVIEW,
         payload: data,
      });
};
