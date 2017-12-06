// this file contains all Action Creator functions; It imports action types from actionTypes.js

import * as types from '../constants/actionTypes';

// export action creators, which will be used by

export const requestLogin = creds => ({
  type: types.LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  payload: creds,
});

export const receiveLogin = user => ({
  type: types.LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  payload: user.id_token,
});

export const loginError = message => ({
  type: types.LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  payload: message,
});

export const requestLogout = () => ({
  type: types.LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true,
});

export const receiveLogout = () => ({
  type: types.LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false,
});

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem('id_token');
  localStorage.removeItem('access_token');
  dispatch(receiveLogout());
};

export const getSpaces = user_id => ({
  type: types.GET_SPACES,
  user_id,
});

export const deleteSpace = (space_id, user_id) => ({
  type: types.DELETE_SPACE,
  space_id,
  user_id,
});

export const addSpace = user_id => ({
  type: types.ADD_SPACE,
  user_id,
});