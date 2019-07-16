/*
  Please de-smurfify this and actions
*/

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_START,
  REG_SUCCESS,
  REG_FAILURE
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
  //     ingredients: "bread peanut butter jam
  //     instructions:
  //       '1. Get bread. 2. Get peanut butter and jam. 3. Put together.',
  //     category: "snack dinner vegetarian sandwich"
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
        error: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn:false,
        error:action.payload
      }


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

    case REG_FAILURE:
      return {
        ...state,
        registerUser:false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default reducer;
