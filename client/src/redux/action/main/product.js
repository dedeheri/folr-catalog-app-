import * as actionType from "../../reducer/main/product/actionType";

import url from "../../../api/base";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

// new
export function getNewProduct() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("frontend/product/new", config);
      dispatch({ type: actionType.GET_NEW_PRODUCT, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_NEW_PRODUCT,
        payload: error.response.data,
      });
    }
  };
}

// all
export function getAllProduct() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("frontend/products", config);
      dispatch({ type: actionType.GET_ALL_PRODUCT, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_ALL_PRODUCT,
        payload: error.response.data,
      });
    }
  };
}

export function getProductByHistory() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("frontend/history/product", config);
      dispatch({ type: actionType.GET_HISTORY_PRODUCT, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_HISTORY_PRODUCT,
        payload: error.response.data,
      });
    }
  };
}

export function getDetailProduct(slug) {
  console.log(slug);

  return async (dispatch) => {
    try {
      const { data } = await url.get(`frontend/product/${slug}`, config);
      dispatch({ type: actionType.GET_DETAIL_PRODUCT, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_DETAIL_PRODUCT,
        payload: error.response.data,
      });
    }
  };
}

export function getProductByQuery(query) {
  return async (dispatch) => {
    try {
      const { data } = await url.get(`frontend/product${query}`, config);
      dispatch({ type: actionType.GET_BY_SORT_PRODUCT, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_BY_SORT_PRODUCT,
        payload: error.response.data,
      });
    }
  };
}
