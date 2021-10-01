import * as actionTypes from "../actions/actionTypes/authTypes"
const initState = {
  login: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token")).token
    : false,
  err: false
};

const authReducer = (state = initState, { type }) => {
  switch (type) {
    case actionTypes.LOGOUT: {
      return {
        ...state,
        login: false
      };
    }

    case actionTypes.LOGIN: {
      return {
        ...state,
        login: JSON.parse(localStorage.getItem("token")).token
      };
    }

    case actionTypes.ERROR: {
      return {
        ...state,
        err: true
      };
    }

    case actionTypes.HIDEERROR: {
      return {
        ...state,
        err: false
      };
    }
    default:
      return state;
  }
};

export default authReducer;
