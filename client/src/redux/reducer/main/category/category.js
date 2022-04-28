import * as actionType from "./actionType";

const initalState = {
  get: {
    loading: true,
    data: [],
    error: [],
  },
  byQuery: {
    loading: true,
    data: [],
    error: [],
  },
};

function category(state = initalState, action) {
  switch (action.type) {
    // get category
    case actionType.GET_CATEGORY: {
      return {
        ...state,
        get: { loading: false, data: action.payload },
      };
    }

    case actionType.FAILED_GET_CATEGORY: {
      return {
        ...state,
        get: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // by quert
    case actionType.GET_BY_QUERY_CATEGORY: {
      return {
        ...state,
        byQuery: { loading: false, data: action.payload },
      };
    }

    case actionType.FAILED_GET_BY_QUERY_CATEGORY: {
      return {
        ...state,
        byQuery: {
          loading: false,
          error: action.payload,
        },
      };
    }
    case actionType.REMOVE_GET_BY_QUERY_CATEGORY: {
      return {
        ...state,
        byQuery: {},
      };
    }

    default:
      return state;
  }
}

export default category;
