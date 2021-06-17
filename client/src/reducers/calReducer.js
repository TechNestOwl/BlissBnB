import CAL_SET_DATE from "../action-types/calAction-Type";

const initialState = [

];

const calendarReducer = (state = initialState, action) => {
    switch(action.type){
        case CAL_SET_DATE:
            return state = action.payload;
            default:
                return state;

    }
};
export default calendarReducer;