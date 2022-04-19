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
  addProducts: {
    fetching: false,
    data: [],
    error: [],
  },
  detailProduct: {
    loading: true,
    data: [],
    error: [],
  },
  getCategory: {
    loading: true,
    data: [],
    error: [],
  },
  addCategory: {
    fetching: false,
    data: [],
    error: [],
  },
  addCatalog: {
    fetching: false,
    data: [],
    error: [],
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

    // detail
    case actionType.GET_DETAIL_PRODUCT: {
      return {
        ...state,
        detailProduct: {
          loading: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_GET_DETAIL_PRODUCT: {
      return {
        ...state,
        detailProduct: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // add
    case actionType.START_ADD_PRODUCT: {
      return {
        ...state,
        addProducts: {
          fetching: true,
        },
      };
    }
    case actionType.SUCCESS_ADD_PRODUCT: {
      return {
        ...state,
        addProducts: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_ADD_PRODUCT: {
      return {
        ...state,
        addProducts: {
          fetching: false,
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

    case actionType.REMOVE_FEEDBACK: {
      return {
        ...state,
        feedback: {},
      };
    }

    // get category

    case actionType.GET_CATEGORY: {
      return {
        ...state,
        getCategory: {
          loading: false,
          data: action.payload,
        },
      };
    }

    case actionType.FAILED_GET_CATEGORY: {
      return {
        ...state,
        getCategory: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // add category
    case actionType.START_ADD_CATEGORY: {
      return {
        ...state,
        addCategory: {
          fetching: true,
        },
      };
    }
    case actionType.SUCCESS_ADD_CATEGORY: {
      return {
        ...state,
        addCategory: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_ADD_CATEGORY: {
      return {
        ...state,
        addCategory: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // add catalog
    case actionType.START_ADD_CATALOG: {
      return {
        ...state,
        addCatalog: {
          fetching: true,
        },
      };
    }
    case actionType.SUCCESS_ADD_CATALOG: {
      return {
        ...state,
        addCatalog: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_ADD_CATALOG: {
      return {
        ...state,
        addCatalog: {
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
