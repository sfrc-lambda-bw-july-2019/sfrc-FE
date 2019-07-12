/*
  Please de-smurfify this and actions
*/

import {
  FETCHING_SMURFS,
  FETCHING_SMURFS_SUCCESSFUL,
  FETCHING_SMURFS_FAILED,

  ADDING_SMURF_START,
  ADDING_SMURF_SUCCESSFUL,
  ADDING_SMURF_FAILED,

  DELETING_SMURF_START,
  DELETING_SMURF_SUCCESSFUL,
  DELETING_SMURF_FAILED
  
} from '../actions'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  recipes:[
    {
      id:0,
      title:"PBJ",
      source:"Mother",
      ingredients:["bread", "peanut butter", "jam"],
      instructions: "1. Get bread. 2. Get peanut butter and jam. 3. Put together.",
      category:["snack", "dinner", "vegetarian", "sandwich"],
      user_id:1
  }, 
  {
      id:1,
      title:"Peanut Butter and Banana Sandwich",
      source:"Uncle Steve",
      instructions: "1. Get bread. 2. Get peanut butter. 3. Slice banana. 4. Put together",
      ingredients:["bread", "peanut butter", "banana", "chocolate"],
      category:["snack", "dinner", "vegetarian", "sandwich"],
      user_id:2
  }
  ]
 }


function reducer (state = initialState , action) {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: true,
        error: null,
      }
    case FETCHING_SMURFS_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null,
      }
    case FETCHING_SMURFS_FAILED:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: false,
        error: action.payload,
      }

    case ADDING_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: null,
      }
    case ADDING_SMURF_SUCCESSFUL:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: null,
      }
    case ADDING_SMURF_FAILED:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
      }
    
    case DELETING_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: null
      }
    
    case DELETING_SMURF_SUCCESSFUL:
      return{
        ...state,
        smurfs: action.payload,
        deletingSmurf: false,
        error: null
      }

    case DELETING_SMURF_FAILED:
      return {
        ...state,
        deletingSmurf:false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default reducer;