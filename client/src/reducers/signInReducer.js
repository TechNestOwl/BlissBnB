import SET_SIGN_IN from "../action-types/signInAction-Type";

const initialState = {

};

const signInReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_SIGN_IN:
            return state = action.payload;
            default:
                return state;
    }
};
export default signInReducer;