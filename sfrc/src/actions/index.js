import axios from 'axios';
import {authenticator} from '../utils/authenticator';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post(
      'https://secret-family-recipe-backend.herokuapp.com/api/auth/login',
      creds
    )
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
      return true;
    })
    .catch(err => {dispatch({type:LOGIN_FAILURE, payload:err})
  console.log(localStorage.token)});
};

export const REG_START = 'REG_START';
export const REG_SUCCESS = 'REG_SUCCESS';
export const REG_FAILURE = 'REG_ERROR'

export const register = credentials => dispatch => {
  //const creds = { username: credentials.username, password: credentials.password };
  dispatch({ type: REG_START });
  axios
    .post(
      'https://secret-family-recipe-backend.herokuapp.com/api/auth/register',
      credentials
    )
    .then(res => {
      localStorage.setItem('token', res.data.payload);

      dispatch({ type: REG_SUCCESS });
    })
    .catch(err => dispatch({type:REG_FAILURE, payload:err}));
};

export const FETCH_RECIPES_START = 'FETCH_RECIPES_START';
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';

export const getRecipes = () => dispatch => {
  dispatch({ type: FETCH_RECIPES_START });
  axios
    .get('https://secret-family-recipe-backend.herokuapp.com/api/ recipes', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({type:FETCH_RECIPES_FAILURE, payload:err}));
};

export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
