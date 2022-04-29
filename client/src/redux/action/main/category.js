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

export function getCatalog(id) {
  return async (dispatch) => {
    try {
      const { data } = await url.get(`frontend/category/${id}`, config);
      dispatch({ type: actionType.GET_CATALOG, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_CATALOG,
        payload: error.response.data,
      });
    }
  };
}
