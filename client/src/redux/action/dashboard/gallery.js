import * as actionType from "../../reducer/dashboard/gallery/actionType";

import url from "../../../api/base";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export function getGallery() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/backend/gallery", config);
      dispatch({ type: actionType.GET_GALLERY, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_GALLERY,
        payload: error.response.data.message,
      });
    }
  };
}

export function addGallery(formData, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_ADD_GALLERY });
      const header = {
        headers: {
          "content-type ": `multipart/form-data; boundary=${formData._boundry}`,
        },
      };
      const { data } = await url.post("backend/add-gallery", formData, {
        header,
      });
      dispatch({ type: actionType.SUCESS_ADD_GALLERY, data: data });
      navigate("/dashboard/gallery");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_ADD_GALLERY,
        error: error.response.data,
      });
    }
  };
}
