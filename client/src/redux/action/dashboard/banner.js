import * as actionType from "../../reducer/dashboard/banner/actionType";

import url from "../../../api/base";
import { toast } from "react-toastify";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export function getBanner() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/backend/banner", config);
      dispatch({ type: actionType.GET_BANNER, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_BANNER,
        payload: error.response.data.message,
      });
    }
  };
}

export function addBanner(formData, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_ADD_BANNER });
      const header = {
        headers: {
          "content-type ": `multipart/form-data; boundary=${formData._boundry}`,
        },
      };

      const { data } = await url.post("backend/add-banner", formData, {
        header,
      });
      dispatch({ type: actionType.SUCESS_ADD_BANNER, payload: data });
      navigate("/dashboard/banner");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_ADD_BANNER,
        payload: error.response.data,
      });
    }
  };
}

export function removeBanner(id) {
  return async (dispatch) => {
    try {
      const { data } = await url.delete(`backend/banner/${id}`, config);
      dispatch({ type: actionType.DELETE_BANNER, payload: data });
      toast.success(data?.message);
    } catch (error) {
      dispatch({
        type: actionType.FAILED_DELETE_BANNER,
        payload: error.response.data,
      });
      toast.error(error.response.data.message);
    }
  };
}
