import * as actionType from "./actionType";

const initalState = {
  get: {
    data: [],
    error: [],
    loading: true,
  },
  add: {
    data: [],
    error: [],
    fetching: false,
  },
  remove: {
    data: [],
    error: [],
  },
};

function dashboardBanner(state = initalState, action) {
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

    //   add
    case actionType.START_ADD_BANNER: {
      return {
        ...state,
        add: {
          fetching: true,
        },
      };
    }
    case actionType.SUCESS_ADD_BANNER: {
      return {
        ...state,
        add: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_ADD_BANNER: {
      return {
        ...state,
        add: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // delete
    case actionType.DELETE_BANNER: {
      return {
        ...state,
        remove: {
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_DELETE_BANNER: {
      return {
        ...state,
        remove: {
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default dashboardBanner;
