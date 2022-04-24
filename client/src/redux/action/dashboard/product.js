import * as actionType from "../../reducer/dashboard/product/actionType";

import url from "../../../api/base";
import { toast } from "react-toastify";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

// get product
export function getProducts() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("backend/product", config);
      dispatch({ type: actionType.GET_PRODUCT, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_PRODUCT,
        payload: error.response.data,
      });
    }
  };
}

// detail
export function getProductsDetail(id) {
  return async (dispatch) => {
    try {
      const { data } = await url.get("backend/product/" + id, config);
      dispatch({ type: actionType.GET_DETAIL_PRODUCT, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_DETAIL_PRODUCT,
        payload: error.response.data,
      });
    }
  };
}

// remove products
export function removeProducts(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionType.START_REMOVE_PRODUCT,
      });
      const { data } = await url.delete("backend/delete-product/" + id, config);
      dispatch({ type: actionType.REMOVE_PRODUCT, payload: data });
      toast.success(data?.message);
    } catch (error) {
      dispatch({
        type: actionType.FAILED_REMOVE_PRODUCT,
        payload: error.response.data,
      });
      toast.error(error.response.data?.message);
    }
  };
}

// add
export function addProducts(formData, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_ADD_PRODUCT });
      const header = {
        headers: {
          "content-type ": `multipart/form-data; boundary=${formData._boundry}`,
        },
      };

      const { data } = await url.post("backend/add-product", formData, {
        header,
      });
      dispatch({ type: actionType.SUCCESS_ADD_PRODUCT, payload: data });
      toast.success(data?.message);
      navigate("/dashboard/product");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_ADD_PRODUCT,
        payload: error.response.data,
      });
      toast.error(error.response.data.message);
    }
  };
}

// update
export function updateProducts(formData, id, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_UPDATE_PRODUCT });
      const header = {
        headers: {
          "content-type ": `multipart/form-data; boundary=${formData._boundry}`,
        },
      };

      const { data } = await url.put(`backend/product/${id}`, formData, {
        header,
      });
      dispatch({ type: actionType.SUCCESS_UPDATE_PRODUCT, payload: data });
      toast.success(data?.message);
      navigate("/dashboard/product");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_UPDATE_PRODUCT,
        payload: error.response.data,
      });
      toast.error(error.response.data.message);
    }
  };
}

// featured
export function featuredProduct(id, featuredProduct) {
  return async (dispatch) => {
    try {
      const { data } = await url.put(
        `backend/featured-product/${id}`,
        { featuredProduct },
        config
      );
      dispatch({ type: actionType.SUCCESS_FEATURED_PRODUCT, payload: data });
      toast.success(data?.message);
    } catch (error) {
      dispatch({
        type: actionType.FAILED_FEATURED_PRODUCT,
        payload: error.response.data,
      });
      toast.error(error.response.data.message);
    }
  };
}
