import { GET_REVIEW, ADD_REVIEW } from "./type";

export const getReviews = (data) => (dispatch) => {
   data &&
      dispatch({
         type: GET_REVIEW,
         payload: data,
      });
};

export const addReview = (data) => (dispatch) => {
   data && dispatch({ type: ADD_REVIEW, payload: data });
};
