import * as actionType from "./actionType";

const initalState = {
  loading: true,
  data: [],
  error: [],
};

function category(state = initalState, action) {
  switch (action.type) {
    // get category
    case actionType.GET_CATEGORY: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case actionType.FAILED_GET_CATEGORY: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

export default category;
