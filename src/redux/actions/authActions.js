import * as actionTypes from "./actionTypes/authTypes";
import axios from "axios";

export const userLogin = () => {
  return { type: actionTypes.LOGIN };
};

export const userLogout = () => {
  return { type: actionTypes.LOGOUT };
};

export const loginError = () => {
  return { type: actionTypes.ERROR };
};

export const hideError = () => {
  return { type: actionTypes.HIDEERROR };
};

export const appLogin = (payload) => (dispatch) => {
  const { email, password } = payload;
  axios
    .post("https://reqres.in/api/login", {
      email,
      password
    })
    .then(({ data }) => {
      localStorage.setItem("token", JSON.stringify(data));
      dispatch(userLogin());
    })
    .catch((error) => dispatch(loginError(error)));
};
