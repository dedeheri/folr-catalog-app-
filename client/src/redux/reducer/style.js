import * as actionTypes from "../action-types-style";

const initialState = {
  modalLogOut: false,
  menu: false,
  removeProduct: {
    condition: false,
    id: "",
    title: "",
  },
  feedback: false,
  removeCatalog: {
    condition: false,
    data: [],
  },
  featuredProduct: {
    condition: false,
    id: "",
    title: "",
    body: null,
  },
  banner: {
    condition: false,
    data: [],
  },
};

function style(state = initialState, action) {
  switch (action.type) {
    // log out
    case actionTypes.MODAL_LOG_OUT_ON: {
      return {
        ...state,
        modalLogOut: true,
      };
    }
    case actionTypes.MODAL_LOG_OUT_OFF: {
      return {
        ...state,
        modalLogOut: false,
      };
    }
    // menu
    case actionTypes.MENU_DASHBOARD_ON: {
      return {
        ...state,
        menu: true,
      };
    }
    case actionTypes.MENU_DASHBOARD_OFF: {
      return {
        ...state,
        menu: false,
      };
    }

    // remove product
    case actionTypes.REMOVE_PRODUCT_DASHBOARD_ON: {
      return {
        ...state,
        removeProduct: {
          condition: true,
          title: action.title,
          id: action.id,
        },
      };
    }
    case actionTypes.REMOVE_PRODUCT_DASHBOARD_OFF: {
      return {
        ...state,
        removeProduct: {
          condition: false,
        },
      };
    }
    // feedback
    case actionTypes.FEEDBACK_DASHBOARD_ON: {
      return {
        ...state,
        feedback: true,
      };
    }
    case actionTypes.FEEDBACK_DASHBOARD_OFF: {
      return {
        ...state,
        feedback: false,
      };
    }
    // remove catalog
    case actionTypes.REMOVE_CATALOG_ON: {
      return {
        ...state,
        removeCatalog: {
          condition: true,
          id: action.id,
          title: action.title,
        },
      };
    }
    case actionTypes.REMOVE_CATALOG_OFF: {
      return {
        ...state,
        removeCatalog: {
          condition: false,
        },
      };
    }

    // featured
    case actionTypes.FEATURED_PRODUCT_DASHBOARD_ON: {
      return {
        ...state,
        featuredProduct: {
          condition: true,
          title: action.title,
          id: action.id,
          body: action.body,
        },
      };
    }
    case actionTypes.FEATURED_PRODUCT_DASHBOARD_OFF: {
      return {
        ...state,
        featuredProduct: {
          condition: false,
        },
      };
    }

    // banner
    case actionTypes.REMOVE_BANNER_ON: {
      return {
        ...state,
        banner: {
          condition: true,
          id: action.id,
          title: action.title,
        },
      };
    }
    case actionTypes.REMOVE_BANNER_OFF: {
      return {
        ...state,
        banner: {
          condition: false,
        },
      };
    }

    default:
      return state;
  }
}

export default style;
