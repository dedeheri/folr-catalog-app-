import * as actionType from "../../reducer/dashboard/banner/actionType";

import url from "../../../api/base";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export function getBanner() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("/frontend/banner", config);
      dispatch({ type: actionType.GET_BANNER, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_BANNER,
        payload: error.response.data.message,
      });
    }
  };
}
