import DISPLAY_HOMES from "../action-types/homeDisplay-Type";

export const displayHomes = (dispatch, homes) => {
	return dispatch({ type: DISPLAY_HOMES, payload: homes });
};
