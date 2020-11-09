import { GET_USER, USER_ERROR } from "./type";
import { google, auth } from "../firebase";

/// Get user
export const getUser = () => async (dispatch) => {
   try {
      auth.onAuthStateChanged((user) => {
         dispatch({
            type: user ? GET_USER : USER_ERROR,
            payload: user ? user.providerData[0] : null,
         });
      });
   } catch (err) {
      console.log(err.message);
   }
};

/// Login user
export const googleLogin = () => async (dispatch) => {
   try {
      await auth.signInWithPopup(google);
      dispatch(getUser());
   } catch (err) {
      console.log(err.message);
   }
};

/// Logout user
export const logOut = () => async (dispatch) => {
   auth.signOut();
   dispatch({
      type: GET_USER,
      payload: null,
   });
};
