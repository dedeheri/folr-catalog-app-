import * as actionTypes from "../action-types";

const initalState = {
  signin: {
    fetching: false,
    data: [],
    error: [],
  },
  signout: {
    fetching: false,
    data: [],
    error: [],
  },
  signup: {
    fetching: false,
    data: [],
    error: [],
    success: false,
  },
  forget: {
    fetching: false,
    data: [],
    error: [],
  },
  reset: {
    fetching: false,
    data: [],
    error: [],
    success: false,
  },
  token: {
    data: [],
    error: [],
    loading: true,
  },
  user: {
    data: [],
    error: [],
    loading: true,
  },
};

function auth(state = initalState, action) {
  switch (action.type) {
    // user

    case actionTypes.GET_USER: {
      return {
        ...state,
        user: {
          loading: false,
          data: action.payload,
        },
      };
    }
    case actionTypes.FAILED_USER: {
      return {
        ...state,
        user: {
          loading: false,
          error: action.payload,
        },
      };
    }
    // login
    case actionTypes.START_LOGIN: {
      return {
        ...state,
        signin: {
          fetching: true,
        },
      };
    }
    case actionTypes.SUCCESS_LOGIN: {
      return {
        ...state,
        signin: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionTypes.FAILED_LOGIN: {
      return {
        ...state,
        signin: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // log out
    case actionTypes.START_LOGOUT: {
      return {
        ...state,
        signout: {
          fetching: true,
        },
      };
    }
    case actionTypes.SUCCESS_LOGOUT: {
      return {
        ...state,
        signout: {
          fetching: false,
          data: action.payload,
        },
      };
    }
    case actionTypes.FAILED_LOGOUT: {
      return {
        ...state,
        signout: {
          fetching: false,
          error: action.payload,
        },
      };
    }

    // register
    case actionTypes.START_REGISTRATION: {
      return {
        ...state,
        signup: {
          fetching: true,
          success: false,
        },
      };
    }
    case actionTypes.SUCCESS_REGISTRATION: {
      return {
        ...state,
        signup: {
          fetching: false,
          data: action.payload,
          success: true,
        },
      };
    }
    case actionTypes.FAILED_REGISTRATION: {
      return {
        ...state,
        signup: {
          fetching: false,
          error: action.payload,
          success: false,
        },
      };
    }

    case actionTypes.REMOVE_MESSAGE_REGISTER: {
      return {
        ...state,
        signup: {},
      };
    }

    // forget
    case actionTypes.START_FORGET: {
      return {
        ...state,
        forget: {
          fetching: true,
          success: false,
        },
      };
    }
    case actionTypes.SUCCESS_FORGET: {
      return {
        ...state,
        forget: {
          fetching: false,
          data: action.payload,
          success: true,
        },
      };
    }
    case actionTypes.FAILED_FORGET: {
      return {
        ...state,
        forget: {
          fetching: false,
          error: action.payload,
          success: false,
        },
      };
    }

    // reset
    case actionTypes.START_RESET: {
      return {
        ...state,
        reset: {
          fetching: true,
        },
      };
    }
    case actionTypes.SUCCESS_RESET: {
      return {
        ...state,
        reset: {
          fetching: false,
          data: action.payload,
          success: true,
        },
      };
    }
    case actionTypes.FAILED_RESET: {
      return {
        ...state,
        reset: {
          fetching: false,
          error: action.payload,
          success: false,
        },
      };
    }
    // token
    case actionTypes.GET_TOKEN: {
      return {
        ...state,
        token: {
          data: action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.FAILED_GET_TOKEN: {
      return {
        ...state,
        token: {
          error: action.payload,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
}

export default auth;
