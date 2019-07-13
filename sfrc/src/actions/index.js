import axios from 'axios';

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
      console.log(res.data);
      localStorage.setItem('token', res.data.authToken);
      localStorage.setItem('user_id', res.data.user_id);
      dispatch({ type: LOGIN_SUCCESS });
      console.log(res);
    })
    .catch(err => console.log(err));
};

export const REG_START = 'REG_START';
export const REG_SUCCESS = 'REG_SUCCESS';

export const register = user => dispatch => {
  dispatch({ type: REG_START });
  axios
    .post(
      'https://secret-family-recipe-backend.herokuapp.com/api/auth/register',
      user
    )
    .then(res => {
      dispatch({ type: REG_SUCCESS });
      dispatch(getUsers());
    })
    .catch(err => console.log(err));
};

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_START });
  axios
    .get('https://secret-family-recipe-backend.herokuapp.com/api/users', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
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
    .catch(err => console.log(err));
};

export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
