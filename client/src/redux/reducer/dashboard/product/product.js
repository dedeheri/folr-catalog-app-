import * as actionType from "./actionType";

const initalState = {
  get: {
    loading: true,
    data: [],
    error: [],
  },
  remove: {
    fetching: false,
    data: [],
    error: [],
  },
  add: {
    fetching: false,
    data: [],
    error: [],
  },
  detail: {
    loading: true,
    data: [],
    error: [],
  },
  update: {
    fetching: false,
    data: [],
    error: [],
  },
  featuredProduct: {
    data: [],
    error: [],
  },
};

function dashboardProducts(state = initalState, action) {
  switch (action.type) {
    //   get
    case actionType.GET_PRODUCT: {
      return {
        ...state,
        get: {
          loading: false,
          data: action.payload,
        },
      };
    }

    case actionType.FAILED_GET_PRODUCT: {
      return {
        ...state,
        get: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // detail
    case actionType.GET_DETAIL_PRODUCT: {
      return {
        ...state,
        detail: {
          loading: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_GET_DETAIL_PRODUCT: {
      return {
        ...state,
        detail: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // add
    case actionType.START_ADD_PRODUCT: {
      return {
        ...state,
        add: {
          fetching: true,
        },
      };
    }
    case actionType.SUCCESS_ADD_PRODUCT: {
      return {
        ...state,
        add: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_ADD_PRODUCT: {
      return {
        ...state,
        add: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // remove
    case actionType.START_REMOVE_PRODUCT: {
      return {
        ...state,
        remove: {
          fetching: true,
        },
      };
    }
    case actionType.REMOVE_PRODUCT: {
      return {
        ...state,
        remove: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_REMOVE_PRODUCT: {
      return {
        ...state,
        remove: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // update
    case actionType.START_UPDATE_PRODUCT: {
      return {
        ...state,
        update: {
          fetching: true,
        },
      };
    }
    case actionType.SUCCESS_UPDATE_PRODUCT: {
      return {
        ...state,
        update: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_UPDATE_PRODUCT: {
      return {
        ...state,
        update: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // featured product
    case actionType.SUCCESS_FEATURED_PRODUCT: {
      return {
        ...state,
        featuredProduct: {
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_FEATURED_PRODUCT: {
      return {
        ...state,
        featuredProduct: {
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default dashboardProducts;
