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
      console.log(res.data)
      localStorage.setItem('token', res.data.authToken);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data});
      return true;
    })
    .catch(err => {dispatch({type:LOGIN_FAILURE, payload:err})
  console.log(localStorage.token)});
};

export const REG_START = 'REG_START';
export const REG_SUCCESS = 'REG_SUCCESS';
export const REG_FAILURE = 'REG_ERROR'

export const register = credentials => dispatch => {
  dispatch({ type: REG_START });
  axios
    .post(
      'https://secret-family-recipe-backend.herokuapp.com/api/auth/register',
      credentials
    )
    .then(res => {
      localStorage.setItem('token', res.data.authToken);
      localStorage.setItem("user_id", res.data.user.id);

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
    .get('https://secret-family-recipe-backend.herokuapp.com/api/recipes', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: FETCH_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({type:FETCH_RECIPES_FAILURE, payload:err}));
};

export const DELETE_RECIPE_START = 'DELETE_RECIPE_START';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

export const deleteRecipe = id => dispatch => {
  dispatch({ type: DELETE_RECIPE_START});
  axios
    .delete(`https://secret-family-recipe-backend.herokuapp.com/api/recipes/${id}`, { 
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({type: DELETE_RECIPE_FAILURE, payload:err}));
};


export const ADD_RECIPE_START = 'ADD_RECIPE_START';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const ADD_RECIPE_FAILURE = 'ADD_RECIPE_FAILURE';

export const addRecipe = recipe => dispatch => {
  dispatch({ type: ADD_RECIPE_START});
  axios
    .post('https://secret-family-recipe-backend.herokuapp.com/api/recipes', recipe)
    .then(res => {
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({type: ADD_RECIPE_FAILURE, payload:err}));
};

export const UPDATE_RECIPE_START = "UPDATE_RECIPE_START";
export const UPDATE_RECIPE_SUCCESS = "UPDATE_RECIPE_SUCCESS";
export const UPDATE_RECIPE_FAILURE = "UPDATE_RECIPE_FAILURE";
//UPDATE ENDPOINT DOES NOT YET EXIST, JULY 16 2019


export const LOGOUT = 'LOGOUT';

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
