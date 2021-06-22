import SET_SIGN_UP from "../action-types/signUpAction-type";

const initialState = [{

}];

const signUpReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SIGN_UP:
            return state = action.payload;
            default:
                return state;

    }
};
export default signUpReducer;