import * as actionTypes from "../action-types-style";

const initialState = {
  modalLogOut: false,
  menu: false,
  removeProduct: {
    condition: false,
    data: [],
  },
  feedback: false,
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
          id: action.id,
          title: action.title,
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

    default:
      return state;
  }
}

export default style;
