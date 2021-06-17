import CAL_SET_DATE from "../action-types/signUpAction-type";

export const signUpInfo = (dispatch, calDateInput) => {
    return dispatch (
        {type:CAL_SET_DATE, payload:calDateInput}
    )
};