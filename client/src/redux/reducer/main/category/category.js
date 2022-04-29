import * as actionType from "./actionType";

const initalState = {
  get: {
    loading: true,
    data: [],
    error: [],
  },
  catalog: {
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
    case actionType.GET_CATALOG: {
      return {
        ...state,
        catalog: { loading: false, data: action.payload },
      };
    }

    case actionType.FAILED_GET_CATALOG: {
      return {
        ...state,
        catalog: {
          loading: false,
          error: action.payload,
        },
      };
    }
    case actionType.REMOVE_GET_CATALOG: {
      return {
        ...state,
        catalog: {},
      };
    }

    default:
      return state;
  }
}

export default category;
