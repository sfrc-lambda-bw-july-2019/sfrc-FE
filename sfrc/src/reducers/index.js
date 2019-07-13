/*
  Please de-smurfify this and actions
*/

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  REG_START,
  REG_SUCCESS
  // FETCH_RECIPES_START,
  // FETCH_RECIPES_SUCCESS,
  // FETCH_RECIPES_FAILURE
} from '../actions';

const initialState = {
  users: [],
  logginIn: false,
  error: '',
  errorStatusCode: null,
  fetchingUsers: false,
  token: localStorage.getItem('token'),
  success: false,
  registerUser: false

  // recipes: [
  //   {
  //     id: 0,
  //     title: 'PBJ',
  //     source: 'Mother',
  //     ingredients: ['bread', 'peanut butter', 'jam'],
  //     instructions:
  //       '1. Get bread. 2. Get peanut butter and jam. 3. Put together.',
  //     category: ['snack', 'dinner', 'vegetarian', 'sandwich'],
  //     user_id: 1
  //   },
  //   {
  //     id: 1,
  //     title: 'Peanut Butter and Banana Sandwich',
  //     source: 'Uncle Steve',
  //     instructions:
  //       '1. Get bread. 2. Get peanut butter. 3. Slice banana. 4. Put together',
  //     ingredients: ['bread', 'peanut butter', 'banana', 'chocolate'],
  //     category: ['snack', 'dinner', 'vegetarian', 'sandwich'],
  //     user_id: 2
  //   }
  // ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      };
    case FETCH_USERS_START:
      return {
        ...state,
        fetchingUsers: true,
        error: null
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        error: '',
        errorStatusCode: null,
        fetchingUsers: false,
        users: action.payload
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        fetchingUsers: false,
        error: action.payload
      };
    case REG_START:
      return {
        ...state,
        registerUser: false,
        error: null
      };
    case REG_SUCCESS:
      return {
        ...state,
        registerUser: true,
        users: action.payload
      };
    // case FETCH_RECIPES_START:
    //   return {
    //     ...state,
    //     recipes: action.payload,
    //     fetchingRecipes: true,
    //     error: null
    //   };
    // case FETCH_RECIPES_SUCCESS:
    //   return {
    //     ...state,
    //     error: '',
    //     errorStatusCode: null,
    //     fetchingRecipes: false,
    //     users: action.payload
    //   };
    // case FETCH_RECIPES_FAILURE:
    //   return {
    //     ...state,
    //     recipes: [],
    //     fetchingRecipes: false,
    //     error: action.payload
    //   };

    // case ADDING_SMURF_START:
    //   return {
    //     ...state,
    //     addingSmurf: true,
    //     error: null
    //   };
    // case ADDING_SMURF_SUCCESSFUL:
    //   return {
    //     ...state,
    //     smurfs: action.payload,
    //     addingSmurf: false,
    //     error: null
    //   };
    // case ADDING_SMURF_FAILED:
    //   return {
    //     ...state,
    //     addingSmurf: false,
    //     error: action.payload
    //   };

    // case DELETING_SMURF_START:
    //   return {
    //     ...state,
    //     deletingSmurf: true,
    //     error: null
    //   };

    // case DELETING_SMURF_SUCCESSFUL:
    //   return {
    //     ...state,
    //     smurfs: action.payload,
    //     deletingSmurf: false,
    //     error: null
    //   };

    // case DELETING_SMURF_FAILED:
    //   return {
    //     ...state,
    //     deletingSmurf: false,
    //     error: action.payload
    //   };

    default:
      return state;
  }
}

export default reducer;
