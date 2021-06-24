import SEARCH_HOMES from "../action-types/searchAction-type";

const initialState = [];

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case SEARCH_HOMES:
            return state = action.payload;
            default:
                return state;

    }
};
export default searchReducer;

