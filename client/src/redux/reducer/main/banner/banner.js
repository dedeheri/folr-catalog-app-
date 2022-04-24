import * as actionType from "./actionType";

const initalState = {
  get: {
    data: [],
    error: [],
    loading: true,
  },
};

function banner(state = initalState, action) {
  switch (action.type) {
    case actionType.GET_BANNER: {
      return {
        ...state,
        get: {
          loading: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_GET_BANNER: {
      return {
        ...state,
        get: {
          loading: false,
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default banner;
