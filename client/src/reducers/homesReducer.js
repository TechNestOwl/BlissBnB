import DISPLAY_HOMES from "../action-types/homes-action-types.js";

const initialState = {};

const homesReducer = (state = initialState, action) => {
	switch (action.type) {
		case DISPLAY_HOMES:
			return (state = action.payload);
		default:
			return state;
	}
};
export default homesReducer;
