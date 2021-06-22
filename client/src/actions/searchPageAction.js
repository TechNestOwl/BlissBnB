import { SEARCH_PAGE } from "../actions/";

export const searchPageAction = (dispatch, Search) => {
  return dispatch({ type: SEARCH_PAGE, ProductData: Search });
};
