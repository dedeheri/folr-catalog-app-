import * as actionType from "../../reducer/dashboard/feedback/actionType";

import url from "../../../api/base";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export function addFeedback(expression, feedback, location) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_FEEDBACK });

      const { data } = await url.post(
        "backend/add-feedback",
        { expression, feedback, urlFeedback: location },
        config
      );
      dispatch({ type: actionType.SUCCESS_FEEDBACK, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_FEEDBACK,
        payload: error.response.data,
      });
    }
  };
}
