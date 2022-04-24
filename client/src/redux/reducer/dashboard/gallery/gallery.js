import * as actionType from "./actionType";
const initalState = {
  get: {
    loading: true,
    data: [],
    error: [],
  },
  add: {
    fetching: false,
    data: [],
    error: [],
  },
};

function dashboardGallery(state = initalState, action) {
  switch (action.type) {
    // get
    case actionType.GET_GALLERY: {
      return {
        ...state,
        get: { loading: false, data: action.payload },
      };
    }
    case actionType.FAILED_GET_GALLERY: {
      return {
        ...state,
        get: { loading: false, error: action.payload },
      };
    }

    // add
    case actionType.START_ADD_GALLERY: {
      return {
        ...state,
        add: { fetching: true },
      };
    }
    case actionType.SUCESS_ADD_GALLERY: {
      return {
        ...state,
        add: { fetching: false, data: action.data },
      };
    }
    case actionType.FAILED_ADD_GALLERY: {
      return {
        ...state,
        add: { fetching: false, error: action.error },
      };
    }

    default:
      return state;
  }
}

export default dashboardGallery;
