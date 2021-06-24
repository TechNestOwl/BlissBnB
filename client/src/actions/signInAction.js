import SET_SIGN_IN from "../action-types/signInAction-Type";

export const signInInfo = (dispatch, userInfo) => {
  return dispatch({ type: SET_SIGN_IN, payload: userInfo });
};
