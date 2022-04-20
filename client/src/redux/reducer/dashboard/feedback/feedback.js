import * as actionType from "./actionType";
const initalState = {
  feedback: {
    data: [],
    error: [],
    fetching: false,
  },
};

function dashboardFeedback(state = initalState, action) {
  switch (action.type) {
    //   get
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

    default:
      return state;
  }
}

export default dashboardFeedback;
