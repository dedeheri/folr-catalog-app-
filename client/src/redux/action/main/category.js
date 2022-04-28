import * as actionType from "../../reducer/main/category/actionType";

import url from "../../../api/base";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

// get category
export function getCategory() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("frontend/category", config);
      dispatch({ type: actionType.GET_CATEGORY, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_CATEGORY,
        payload: error.response.data,
      });
    }
  };
}

export function getCategoryByQuery(props) {
  return async (dispatch) => {
    try {
      const { data } = await url.get(`frontend/category${props}`, config);
      dispatch({ type: actionType.GET_BY_QUERY_CATEGORY, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_CATEGORY,
        payload: error.response.data,
      });
    }
  };
}
