import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../types";

const initialState = {
  userData: [],
  isLogin: false,
};

const LoginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLogin: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        userData: null,
      };
    default:
      return state;
  }
};

export default LoginReducer;