import SEARCH_PAGE from "../action-types/search-page-action-types";

export const searchPageAction = (dispatch, Search) => {
  return dispatch({ type: SEARCH_PAGE, payload: Search });
};
