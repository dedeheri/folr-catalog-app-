import * as actionType from "./actionType";

const initalState = {
  newProduct: {
    data: [],
    loading: true,
    error: [],
  },

  getByHistory: {
    data: [],
    loading: true,
    error: [],
  },
  detail: {
    data: [],
    loading: true,
    error: [],
  },
  getAll: {
    data: [],
    loading: true,
    error: [],
  },
  sort: {
    data: [],
    loading: [],
    error: [],
  },
};

function product(state = initalState, action) {
  switch (action.type) {
    // get new product
    case actionType.GET_NEW_PRODUCT: {
      return {
        ...state,
        newProduct: {
          loading: false,
          data: action.payload,
        },
      };
    }

    case actionType.FAILED_GET_NEW_PRODUCT: {
      return {
        ...state,
        newProduct: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // all
    case actionType.GET_ALL_PRODUCT: {
      return {
        ...state,
        getAll: {
          loading: false,
          data: action.payload,
        },
      };
    }

    case actionType.FAILED_GET_ALL_PRODUCT: {
      return {
        ...state,
        getAll: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // get  product by cookie
    case actionType.GET_HISTORY_PRODUCT: {
      return {
        ...state,
        getByHistory: {
          loading: false,
          data: action.payload,
        },
      };
    }

    case actionType.FAILED_GET_HISTORY_PRODUCT: {
      return {
        ...state,
        getByHistory: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // get  product by cookie
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
    case actionType.REMOVE_DETAIL_PRODUCT: {
      return {
        ...state,
        detail: {},
      };
    }

    // sort
    case actionType.GET_BY_SORT_PRODUCT: {
      return {
        ...state,
        sort: {
          loading: false,
          data: action.payload,
        },
      };
    }

    case actionType.FAILED_GET_BY_SORT_PRODUCT: {
      return {
        ...state,
        sort: {
          loading: false,
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default product;
