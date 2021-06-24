import SEARCH_HOMES from "../action-types/searchAction-type.js";

export const searchHomes = (dispatch, homes) => {
	return dispatch({ type: SEARCH_HOMES, payload: homes });
};
