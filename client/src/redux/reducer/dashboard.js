import * as actionType from "../action-types";
const initalState = {
  getProducts: {
    loading: true,
    data: [],
    error: [],
  },
  removeProducts: {
    fetching: false,
    data: [],
    error: [],
  },
  feedback: {
    data: [],
    error: [],
    fetching: false,
  },
};

function dashboard(state = initalState, action) {
  switch (action.type) {
    //   get products
    case actionType.GET_PRODUCT_DASHBOARD: {
      return {
        ...state,
        getProducts: {
          loading: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_GET_PRODUCT_DASHBOARD: {
      return {
        ...state,
        getProducts: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // remove
    case actionType.START_REMOVE_PRODUCT_DASHBOARD: {
      return {
        ...state,
        removeProducts: {
          fetching: true,
        },
      };
    }
    case actionType.REMOVE_PRODUCT_DASHBOARD: {
      return {
        ...state,
        removeProducts: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_REMOVE_PRODUCT_DASHBOARD: {
      return {
        ...state,
        removeProducts: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // Feedback
    case actionType.START_FEEDBACK: {
      return {
        ...state,
        feedback: {
          fetching: true,
        },
      };
    }
    case actionType.SUCCESS_FEEDBACK: {
      return {
        ...state,
        feedback: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_FEEDBACK: {
      return {
        ...state,
        feedback: {
          fetching: false,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export default dashboard;
