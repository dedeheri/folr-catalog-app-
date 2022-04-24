import * as actionType from "../../reducer/dashboard/category/actionType";

import url from "../../../api/base";
import { toast } from "react-toastify";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

// get category
export function getCategory() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("backend/category", config);
      dispatch({ type: actionType.GET_CATEGORY, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_CATEGORY,
        payload: error.response.data,
      });
    }
  };
}

// get categoru
export function addCategory(category, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_ADD_CATEGORY });
      const { data } = await url.post(
        "backend/add-category",
        { category },
        config
      );
      dispatch({ type: actionType.SUCCESS_ADD_CATEGORY, payload: data });
      toast.success(data?.message);
      navigate("/dashboard/category");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_ADD_CATEGORY,
        payload: error.response.data,
      });
    }
  };
}

export function addCatalog(formData, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_ADD_CATALOG });
      const header = {
        headers: {
          "content-type ": `multipart/form-data; boundary=${formData._boundry}`,
        },
      };

      const { data } = await url.post("backend/add-catalog", formData, {
        header,
      });
      dispatch({ type: actionType.SUCCESS_ADD_CATALOG, payload: data });
      toast.success(data?.message);
      navigate("/dashboard/category");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_ADD_CATALOG,
        payload: error.response.data,
      });
      toast.error(error.response.data.message);
    }
  };
}

// remove catalog
export function removeCatalog(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionType.START_REMOVE_CATALOG,
      });
      const { data } = await url.delete("backend/catalog/" + id, config);
      dispatch({ type: actionType.REMOVE_CATALOG, payload: data });
      toast.success(data?.result);
    } catch (error) {
      dispatch({
        type: actionType.FAILED_REMOVE_CATALOG,
        payload: error.response.data,
      });
      toast.error(error.response.data?.message);
    }
  };
}

// detail catalog
export function getDetailCatalog(query) {
  return async (dispatch) => {
    try {
      const { data } = await url.get(`backend/catalog${query}`, config);
      dispatch({ type: actionType.GET_DETAIL_CATALOG, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: actionType.FAILED_GET_DETAIL_CATALOG,
        payload: error.response.data,
      });
    }
  };
}

export function updateCatalog(query, formData, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_UPDATE_CATALOG });

      const header = {
        headers: {
          "content-type ": `multipart/form-data; boundary=${formData._boundry}`,
        },
      };

      const { data } = await url.put(`backend/catalog${query}`, formData, {
        header,
      });
      dispatch({ type: actionType.SUCCESS_UPDATE_CATALOG, payload: data });
      toast.success(data?.message);
      navigate("/dashboard/category");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_UPDATE_CATALOG,
        payload: error.response.data,
      });
      toast.error(error.response.data.message);
    }
  };
}
