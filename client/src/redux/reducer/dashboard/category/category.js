import * as actionType from "./actionType";

const initalState = {
  getCategory: {
    loading: true,
    data: [],
    error: [],
  },
  removeCatalog: {
    fetching: false,
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
  detailCatalog: {
    loading: true,
    data: [],
    error: [],
  },
  updateCatalog: {
    fetching: false,
    data: [],
    error: [],
  },
};

function dashboardCategory(state = initalState, action) {
  switch (action.type) {
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

    // remove catalog
    case actionType.START_REMOVE_CATALOG: {
      return {
        ...state,
        removeCatalog: {
          fetching: true,
        },
      };
    }
    case actionType.REMOVE_CATALOG: {
      return {
        ...state,
        removeCatalog: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_REMOVE_CATALOG: {
      return {
        ...state,
        removeCatalog: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // detail catalog

    case actionType.GET_DETAIL_CATALOG: {
      return {
        ...state,
        detailCatalog: {
          loading: false,
          data: action.payload,
        },
      };
    }

    case actionType.FAILED_GET_DETAIL_CATALOG: {
      return {
        ...state,
        detailCatalog: {
          loading: false,
          error: action.payload,
        },
      };
    }

    // update catalog
    case actionType.START_UPDATE_CATALOG: {
      return {
        ...state,
        updateCatalog: {
          fetching: true,
        },
      };
    }
    case actionType.SUCCESS_UPDATE_CATALOG: {
      return {
        ...state,
        updateCatalog: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionType.FAILED_UPDATE_CATALOG: {
      return {
        ...state,
        updateCatalog: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default dashboardCategory;
