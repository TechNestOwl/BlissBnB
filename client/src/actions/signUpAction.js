import SET_SIGN_UP from "../action-types/signUpAction-type";

export const signUpInfo = (dispatch, userSignUpInfo) => {
	return dispatch({ type: SET_SIGN_UP, payload: userSignUpInfo });
};
