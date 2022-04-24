import * as actionType from "../../reducer/dashboard/auth/actionTypes";

import url from "../../../api/base";

const config = {
  headers: {
    "content-type": "application/json",
  },
};

export function signIn(email, password, rememberMe, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_LOGIN });
      const { data } = await url.post(
        "backend/signin",
        { email, password, rememberMe },
        config
      );

      dispatch({ type: actionType.SUCCESS_LOGIN, payload: data });
      navigate("/dashboard");
    } catch (error) {
      dispatch({ type: actionType.FAILED_LOGIN, payload: error.response.data });
    }
  };
}

export function signOut(navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_LOGOUT });
      const { data } = await url.get("backend/signout", config);
      dispatch({ type: actionType.SUCCESS_LOGOUT, payload: data });
      navigate("/auth");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_LOGOUT,
        payload: error.response.data,
      });
    }
  };
}

export function signUp(fullName, email, password, repeatPassword, navigate) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_REGISTRATION });
      const { data } = await url.post(
        "backend/signup",
        { fullName, email, password, repeatPassword },
        config
      );

      console.log(data);
      dispatch({ type: actionType.SUCCESS_REGISTRATION, payload: data });
      navigate("/auth");
    } catch (error) {
      dispatch({
        type: actionType.FAILED_REGISTRATION,
        payload: error.response.data,
      });
    }
  };
}

export function forget(email) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_FORGET });
      const { data } = await url.post("backend/forget", { email }, config);
      dispatch({ type: actionType.SUCCESS_FORGET, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_FORGET,
        payload: error.response.data,
      });
    }
  };
}

export function reset(password, confirmPassword, id) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionType.START_RESET });
      const { data } = await url.post(
        "backend/reset" + id,
        { password, confirmPassword },
        config
      );
      dispatch({ type: actionType.SUCCESS_RESET, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_RESET,
        payload: error.response.data,
      });
    }
  };
}

export function getTokenExp(token) {
  return async (dispatch) => {
    try {
      const { data } = await url.get("backend/exp" + token, config);
      dispatch({ type: actionType.GET_TOKEN, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_GET_TOKEN,
        payload: error.response.data,
      });
    }
  };
}

export function getUser() {
  return async (dispatch) => {
    try {
      const { data } = await url.get("backend/user", config);
      dispatch({ type: actionType.GET_USER, payload: data });
    } catch (error) {
      dispatch({
        type: actionType.FAILED_USER,
        payload: error.response.data,
      });
    }
  };
}
