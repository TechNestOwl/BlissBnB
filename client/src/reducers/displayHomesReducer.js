import DISPLAY_HOMES from "../action-types/displayHomes-Type";

const initialState = {};

const displayHomes = (state = initialState, action) => {
	switch (action.type) {
		case DISPLAY_HOMES:
			return (state = action.payload);
		default:
			return state;
	}
};
export default displayHomes;
